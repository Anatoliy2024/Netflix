import style from './header.module.scss'
export function Header({ openRegForm, userActive, setUsersActive }: any) {
  return (
    <div className={style.header}>
      <div className={style.boxLogo}>
        <img className={style.img} src='/logo.webp' />
      </div>
      <div className={style.buttonHeader}>
        <p>UNLIMITED TV PROGRAMMES & FILMS</p>

        {userActive && (
          <>
            <span>{userActive}</span>
            <button onClick={() => setUsersActive('')}>Выход</button>
          </>
        )}
        {!userActive && (
          <>
            <button onClick={() => openRegForm('reg')}>JOIN NOW</button>

            <button
              onClick={() => openRegForm('log')}
              style={{ backgroundColor: 'black', border: '1px solid white' }}
            >
              SIGN IN
            </button>
          </>
        )}

        {/* <button onClick={openRegForm}>JOIN NOW</button>

        <button style={{ backgroundColor: 'black', border: '1px solid white' }}>
          SIGN IN
        </button> */}
      </div>
    </div>
  )
}
