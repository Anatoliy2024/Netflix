import { useEffect, useRef, useState } from 'react'
import style from './App.module.scss'
import './fonts/fonts.css'
import { Face } from './face/Face'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { NewContext } from './context'
import { RegForm } from './RegForm/RegForm'

function App() {
  const [width, setWidth] = useState(450)
  const [offSet, setOffSet] = useState(0)
  const [regForm, setRegForm] = useState(false)
  const [regFormLogin, setRegFormLogin] = useState(false)
  const [userActive, setUsersActive] = useState('')
  const containerRef = useRef<any>()

  const openRegForm = (active: string) => {
    if (active === 'log') {
      setRegFormLogin(true)
    }
    setRegForm(true)
  }
  const closeRegForm = () => {
    setRegForm(false)
    setRegFormLogin(false)
  }
  useEffect(() => {
    function changeWidth() {
      const windowElWidth = containerRef.current.offsetWidth
      setWidth(windowElWidth - 150)
      setOffSet(0)
    }
    changeWidth()
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <NewContext.Provider
      value={{ width: width, offSet: offSet, setOffSet: setOffSet }}
    >
      <div className={style.container} ref={containerRef}>
        <Header
          setUsersActive={setUsersActive}
          userActive={userActive}
          openRegForm={openRegForm}
        />
        <Face userActive={userActive} openRegForm={openRegForm} />
        <Footer />

        {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div> */}
        <RegForm
          regFormLogin={regFormLogin}
          regForm={regForm}
          closeRegForm={closeRegForm}
          setUsersActive={setUsersActive}
        />
      </div>
    </NewContext.Provider>
  )
}

export default App
