import React, {useEffect, useState } from 'react'
import '../authRegForm.css'
import { Link } from 'react-router-dom'
import { useLoginUser } from '../../../hooks/useLoginUser'
import { getLoginUser } from '../../../api/apiAuthorization'

export const Authorization = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const { isUser, handleLoginUser} = useLoginUser(email, password)

  const handleLoginUser = () => {
		// if (!email && !password) {
		//   setError('Поля не должны быть пустыми')
		//   return
		// }
		// if (!email && password) {
		//   setError('Поле Логин(email) не должно быть пустым')
		//   return
		// }
		// if (email && !password) {
		//   setError('Поле Пароль не должно быть пустым')
		//   return
		// }
	//  getLoginUser(email, password)
  try {
    getLoginUser(email, password)
  }
  catch (error) {
    console.log('error');
  }
	//  setIsUser(true)
  }

  useEffect(() => {
    setError('')
  }, [email, password])

  return (
    <div className="main-authorization">
      <Link to="/.">
        <img className="main-authorization__logo" src="./img/logo.svg" alt="" />
      </Link>
      <div className="authorization-form">
        <div className="authorization-form__forImg">
          <img
            className="authorization-form__img"
            src="./img/logo-black.svg"
            alt=""
          />
        </div>
        <div className="authorization-form__inputs">
          <input
            className="authorization-form__input"
            placeholder="Логин(email)"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            minLength={4}
            maxLength={36}
          />
          <input
            className="authorization-form__input"
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            maxLength={16}
          />
        </div>
        {error ? <p className="error">{error}</p> : ''}
        <div className="authorization-form__buttons">
          <button onClick={handleLoginUser} className="authorization-form__button">
            Войти
          </button>
          <Link to="/reg">
            <button className="authorization-form__button authorization-form__button__reg">
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
