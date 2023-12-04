import React, { useContext, useEffect, useState } from 'react'
import '../authRegForm.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../App'
import { getLoginUser } from '../../../api/apiAuthorization'
import { useLoginUser } from '../../../hooks/useLoginUser'

export const Authorization = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { isUser, handleLoginUser } = useLoginUser(email, password)

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
