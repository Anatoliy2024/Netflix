import style from "./header.module.scss"
export function Header({
  userActive,
  setShowRegForm,
  setUsersActive,
  setUsersName,
  userName,
}) {
  return (
    <div className={style.header}>
      <div className={style.boxLogo}>
        <img className={style.img} src="../Netflix/logo.webp" />
      </div>
      <div className={style.buttonHeader}>
        <p>UNLIMITED TV PROGRAMMES & FILMS</p>

        {userActive && (
          <>
            <span>{userName}</span>
            <button
              onClick={() => {
                setShowRegForm("")
                setUsersActive(false)
                setUsersName("")
              }}
            >
              Выход
            </button>
          </>
        )}
        {!userActive && (
          <>
            <button onClick={() => setShowRegForm("reg")}>JOIN NOW</button>

            <button
              className={style.secondButton}
              onClick={() => setShowRegForm("log")}
              // style={{ backgroundColor: 'black', border: '1px solid white' }}
            >
              SIGN IN
            </button>
          </>
        )}
      </div>
    </div>
  )
}
