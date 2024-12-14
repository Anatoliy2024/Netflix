import { useEffect, useRef, useState } from "react"
import style from "./App.module.scss"
import "./fonts/fonts.css"
import { Face } from "./face/Face"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { NewContext } from "./context"
import { RegForm } from "./RegForm/RegForm"

function App() {
  const [width, setWidth] = useState(450)
  const [offSet, setOffSet] = useState(0)
  const [showRegForm, setShowRegForm] = useState("")

  const [userActive, setUsersActive] = useState(false)
  const [userName, setUsersName] = useState("")
  const containerRef = useRef()

  useEffect(() => {
    function changeWidth() {
      const windowElWidth = containerRef.current.offsetWidth
      setWidth(windowElWidth - 150)
      setOffSet(0)
    }
    changeWidth()
    window.addEventListener("resize", changeWidth)
    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  useEffect(() => {
    if (showRegForm) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [showRegForm])

  return (
    <NewContext.Provider
      value={{ width: width, offSet: offSet, setOffSet: setOffSet }}
    >
      <div className={style.container} ref={containerRef}>
        <Header
          setShowRegForm={setShowRegForm}
          userActive={userActive}
          setUsersActive={setUsersActive}
          userName={userName}
          setUsersName={setUsersName}
        />
        <Face userActive={userActive} setShowRegForm={setShowRegForm} />
        <Footer />

        {showRegForm && (
          <RegForm
            showRegForm={showRegForm}
            setShowRegForm={setShowRegForm}
            setUsersActive={setUsersActive}
            setUsersName={setUsersName}
          />
        )}
      </div>
    </NewContext.Provider>
  )
}

export default App
