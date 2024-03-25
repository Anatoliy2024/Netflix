import { Children, cloneElement, useContext, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MyContext } from '../../context'
import { NewContext } from '../../context'
import { Page } from './Page/Page'
import style from './carousel.module.scss'

export const Carousel = ({ children }: any) => {
  // const myComponent = () =>{
  //   const widthChange = useContext(MyContent)
  //   return <div>{}</div>
  // }
  const [count, setCount] = useState(0)
  const { width, offSet, setOffSet }: any = useContext(NewContext)
  console.log(width)
  // const [pages, setPages] = useState([])
  // const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffSet((currentOffset: any) => {
      const newOffset = currentOffset + width
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
    console.log('handleLeftArrowClick')
  }
  const handleRightArrowClick = () => {
    setOffSet((currentOffset: any) => {
      const newOffset = currentOffset - width
      const maxOffset = -(width * (children.length - 1))
      console.log(newOffset)

      return Math.max(newOffset, maxOffset)
    })
    console.log('handleRightArrowClick')
  }

  // useEffect(() => {
  //   setPages(
  //     Children.map(children, (child) => {
  //       return cloneElement(child, {
  //         style: {
  //           height: '100%',
  //           minWidth: `${PAGE_WIDTH}px`,
  //           maxWidth: `${PAGE_WIDTH}px`,
  //         },
  //       })
  //     })
  //   )
  // }, [])
  return (
    <MyContext.Provider value={{ width }}>
      <div style={{ width: `${width}px` }} className={style.mainContainer}>
        <FaChevronLeft className={style.arrow} onClick={handleLeftArrowClick} />
        <div className={style.window}>
          <div
            className={style.allPagesContainer}
            style={{ transform: `translateX(${offSet}px)` }}
          >
            {children}
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
