import {
  Children,
  cloneElement,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FaRegHandPointLeft, FaRegHandPointRight } from 'react-icons/fa6'
import { Page } from './Page/Page'
import style from './carousel2.module.scss'
import { CarouselContext } from './carousel-compaund'

const TRANSITION_DURATION = 500

export default function Carousel2({ children, infinite }: any) {
  const [offSet, setOffSet] = useState(0)
  const [width, setWidth] = useState(450)
  const [pages, setPage] = useState([])
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION)
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })

  useEffect(() => {
    if (infinite) {
      setPage([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]),
      ])
      setClonesCount({ head: 1, tail: 1 })
      return
    }
    setPage(children)
  }, [children, infinite])

  const windowElRef = useRef<any>()

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION)
      }, TRANSITION_DURATION)
    }
  }, [transitionDuration])

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth
      console.log('resized', windowElWidth)
      setWidth(windowElWidth)
      setOffSet(-clonesCount.head * width)
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [clonesCount, width])

  useEffect(() => {
    if (!infinite) return
    if (offSet == 0) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffSet(-width * (pages.length - 1 - clonesCount.tail))
      }, TRANSITION_DURATION)
      return
    }
    if (offSet == -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffSet(-(clonesCount.head * width))
      }, TRANSITION_DURATION)
      return
    }
  }, [infinite, offSet, width, pages, clonesCount])

  const goLeft = () => {
    setOffSet((current) => {
      const result = current + width
      //   const max = -(WIDTH_PAGE * (page.length - 1))

      //   if (result > 0) {
      //     return max
      //   }
      //   return result
      return Math.min(result, 0)
    })
  }

  function goRight() {
    setOffSet((current) => {
      const result = current - width
      const max = -(width * (pages.length - 1))

      //   if (result < max) {
      //     return 0
      //   }
      //   return result
      return Math.max(result, max)
    })
  }
  return (
    <CarouselContext.Provider value={{ width }}>
      <div className={style.mainContainer}>
        <FaRegHandPointLeft onClick={goLeft} />
        <div className={style.window} ref={windowElRef}>
          <div
            style={{
              transitionDuration: `${transitionDuration}ms`,
              transform: `translateX(${offSet}px)`,
            }}
            className={style.allPagesContainer}
          >
            {pages}
          </div>
        </div>
        <FaRegHandPointRight onClick={goRight} />
      </div>
    </CarouselContext.Provider>
  )
}

Carousel2.Page = Page
