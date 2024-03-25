import { Children, cloneElement, useContext, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MyContext } from '../../context'
import { Page } from './Page/Page'
import style from './carousel.module.scss'
const PAGE_WIDTH = 450

export const Carousel = ({ children }: any) => {
  // const myComponent = () =>{
  //   const widthChange = useContext(MyContent)
  //   return <div>{}</div>
  // }

  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
    console.log('handleLeftArrowClick')
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
      console.log(newOffset)

      return Math.max(newOffset, maxOffset)
    })
    console.log('handleRightArrowClick')
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      })
    )
  }, [])
  return (
    <MyContext.Provider value={{ width: PAGE_WIDTH }}>
      <div className={style.mainContainer}>
        <FaChevronLeft className={style.arrow} onClick={handleLeftArrowClick} />
        <div className={style.window}>
          <div
            className={style.allPagesContainer}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {pages}
          </div>
        </div>
        <FaChevronRight
          className={style.arrow}
          onClick={handleRightArrowClick}
        />
      </div>
    </MyContext.Provider>
  )
}

Carousel.Page = Page
