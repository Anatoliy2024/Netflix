import { useContext } from 'react'
import { MyContext } from '../../../context'
import style from './page.module.scss'

export const Page = ({ children }: any) => {
  const { width }: any = useContext(MyContext)

  return (
    <div
      className={style.container}
      style={{ maxWidth: `${width}px`, minWidth: `${width}px` }}
    >
      {children}
    </div>
  )
}
