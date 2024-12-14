import { useState } from "react"
import style from "./RegForm.module.scss"
import { dbPlayers } from "../../db/dbPlayers"

export function RegForm({
  showRegForm,
  setShowRegForm,
  setUsersActive,
  setUsersName,
}) {
  const [users, setUsers] = useState({ name: "", password: "" })

  const [isCopy, setIsCopy] = useState(false)
  const auth = ({ name, password }) => {
    if (dbPlayers[name] === password) {
      setUsersActive(true)
      setShowRegForm("")
      setUsersName(name)
      localStorage.setItem("userName", name)
    } else {
      alert("Неправильный логин или пароль")
    }
  }
  const login = ({ name, password }) => {
    if (dbPlayers[name]) {
      setIsCopy(true)
    } else {
      dbPlayers[name] = password
      setUsersActive(true)
      setShowRegForm("")
      setUsersName(name)
      localStorage.setItem("userName", name)

      // setIsCopy(false)
    }
  }

  return (
    <div onClick={() => setShowRegForm("")} className={style.container}>
      <div className={style.containerForm} onClick={(e) => e.stopPropagation()}>
        <div
          className={style.Form}
          // onSubmit={regFormLogin ? handleSubmitLog : handleSubmitReg}
        >
          <label htmlFor="name">Введите имя</label>
          <input
            type="text"
            id="name"
            value={users.name}
            onChange={(e) => {
              setUsers({ ...users, name: e.target.value })
            }}
          />
          {isCopy && <p style={{ color: "red" }}>Данное имя уже занято</p>}
          <label htmlFor="password">Введите пароль</label>
          <input
            value={users.password}
            type="password"
            id="password"
            onChange={(e) => {
              setUsers({ ...users, password: e.target.value })
            }}
          />
          <button
            type="submit"
            onClick={() => {
              if (showRegForm === "log") {
                auth(users)
              } else {
                login(users)
              }
            }}
          >
            {showRegForm === "log" ? "Войти" : "Регистрация"}
          </button>
          <button onClick={() => setShowRegForm("")}>Отмена</button>
        </div>
      </div>
    </div>
  )
}
