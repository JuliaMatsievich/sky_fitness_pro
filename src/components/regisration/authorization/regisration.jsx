import React, { useState } from 'react'
import '../authRegForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { writeUserData } from '../../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { sendEmailVerification } from "firebase/auth";

export function Registration() {
  const push = useNavigate()
  const [inputLogin, setLogin] = useState('')
  const [inputPassword, setPassword] = useState('')
  const [inputPasswordChange, setPasswordChange] = useState('')
  const [error, setError] = useState(false)
  function newUser() {
    let email = inputLogin
    let password = inputPassword
    const auth = getAuth()

    if (!(inputPassword === inputPasswordChange)) {
      setError(true)
    } else {
    

       createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          localStorage.setItem('userName', user.email)
          localStorage.setItem('userPassword', password)
          push('/')
          // ...
          sendEmailVerification(auth.currentUser).then(() => {
          })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          alert(errorCode + ' ' + errorMessage)
          // ..
        })
    }
  }

  return (
    <div className="main-authorization">
      <Link to="/">
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
            value={inputLogin}
            onChange={(event) => setLogin(event.target.value)}
            minLength={4}
            maxLength={36}
          />
          <input
            className="authorization-form__input"
            placeholder="Пароль"
            type="password"
            value={inputPassword}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            maxLength={16}
          />
          <input
            className="authorization-form__input"
            placeholder="Повторите пароль"
            type="password"
            value={inputPasswordChange}
            onChange={(event) => setPasswordChange(event.target.value)}
            minLength={8}
            maxLength={16}
          />
        </div>
        <div className="authorization-form__buttons">
          {error && (
            <div>
              <p className="authorization-form_error">Пароли не совпадают</p>
            </div>
          )}
          <button onClick={newUser} className="authorization-form__button">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  )
}
