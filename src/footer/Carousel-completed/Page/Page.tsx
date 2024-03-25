import { useContext } from 'react'
import { CarouselContext } from '../carousel-compaund'
import style from './page.module.scss'

export const Page = ({ children }: any) => {
  const { width }: any = useContext(CarouselContext)
  return (
    <div
      className={style.pageMainContainer}
      style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
    >
      {children}
    </div>
  )
}
