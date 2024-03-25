import { useState } from 'react'
import style from './RegForm.module.scss'
export function RegForm({
  regForm,
  closeRegForm,
  setUsersActive,
  regFormLogin,
}: any) {
  if (!regForm) return
  const [users, setUsers] = useState({ name: '', password: '' })
  const [isCopy, setIsCopy] = useState(false)
  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')

  const handleSubmitReg = async (e: any) => {
    e.preventDefault()
    if (users.name.length < 4 && users.password.length < 4) {
      console.log(users.name.length, users.password.length)
      alert('Имя и пароль должны содержать не менее 5 букв')
      return
    }
    try {
      const response1 = await fetch('http://localhost:3001/users')
      const responseDate = await response1.json()
      const nameExists = responseDate.some((el: any) => el.name === users.name)
      if (nameExists) {
        setUsers({ ...users, name: '' })
        setIsCopy(true)
        return
      }
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(users),
      })
      if (response.ok) {
        console.log('Данные успешно отправлены')
        setUsersActive(users.name)
        setUsers({ name: '', password: '' })
        closeRegForm()
      } else {
        console.log('Ошибка при добавлении данных на сервер')
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error)
    }
  }
  const handleSubmitLog = async (e: any) => {
    e.preventDefault()
    if (users.name.length < 4 && users.password.length < 4) {
      console.log(users.name.length, users.password.length)
      alert('Имя и пароль должны содержать не менее 5 букв')
      return
    }
    try {
      const response1 = await fetch('http://localhost:3001/users')
      const responseDate = await response1.json()
      const nameExists = responseDate.some(
        (el: any) => el.name === users.name && el.password === users.password
      )
      if (nameExists) {
        setUsersActive(users.name)
        setUsers({ name: '', password: '' })
        closeRegForm()
        return
      } else {
        alert('Проверьте правильность ввода пароля')
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error)
    }
  }
  return (
    <div onClick={closeRegForm} className={style.container}>
      <div className={style.containerForm} onClick={(e) => e.stopPropagation()}>
        <form
          action=''
          onSubmit={regFormLogin ? handleSubmitLog : handleSubmitReg}
        >
          <label htmlFor='name'>Введите имя</label>
          <input
            type='text'
            id='name'
            value={users.name}
            onChange={(e) => {
              setIsCopy(false)
              setUsers({ ...users, name: e.target.value })
            }}
          />
          {isCopy && <p style={{ color: 'red' }}>Данное имя уже занято</p>}
          <label htmlFor='password'>Введите пароль</label>
          <input
            value={users.password}
            type='password'
            id='password'
            onChange={(e) => {
              setUsers({ ...users, password: e.target.value })
            }}
          />
          <button type='submit'>
            {regFormLogin ? 'Войти' : 'Регистрация'}
          </button>
          <button onClick={closeRegForm}>Отмена</button>
        </form>
      </div>
    </div>
  )
}
