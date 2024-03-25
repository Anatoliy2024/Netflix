import { Children, cloneElement, useEffect, useState, useContext } from 'react'
import { FaRegHandPointLeft, FaRegHandPointRight } from 'react-icons/fa6'
import { NewContext } from '../../context'
import style from './carousel2.module.scss'
const WIDTH_PAGE = 450

export default function Carousel2({ children }: any) {
  const [page, setPage] = useState([])
  const [offSet, setOffSet] = useState(0)

  const { width }: any = useContext(NewContext)

  useEffect(() => {
    setPage(
      Children.map(children, (child: any) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            maxWidth: `${WIDTH_PAGE}px`,
            minWidth: `${WIDTH_PAGE}px`,
          },
        })
      })
    )
  }, [width])

  function goLeft() {
    setOffSet((current) => {
      const result = current + WIDTH_PAGE
      //   const max = -(WIDTH_PAGE * (page.length - 1))

      //   if (result > 0) {
      //     return max
      //   }
      //   return result
      return Math.min(result, 0)
    })

    console.log('Left')
  }
  function goRight() {
    setOffSet((current) => {
      const result = current - WIDTH_PAGE
      const max = -(WIDTH_PAGE * (page.length - 1))

      //   if (result < max) {
      //     return 0
      //   }
      //   return result
      return Math.max(result, max)
    })

    console.log('Right')
  }
  return (
    <div className={style.container}>
      <FaRegHandPointLeft onClick={goLeft} />
      <div className={style.window}>
        <div
          style={{ transform: `translateX(${offSet}px)` }}
          className={style.allPages}
        >
          {page}
        </div>
      </div>
      <FaRegHandPointRight onClick={goRight} />
    </div>
  )
}
