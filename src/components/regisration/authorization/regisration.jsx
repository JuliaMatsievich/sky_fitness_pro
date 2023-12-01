import React, { useEffect, useState } from 'react'
import '../authRegForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { sendEmailVerification } from 'firebase/auth'

export function Registration() {
  const push = useNavigate()
  const [inputLogin, setLogin] = useState('')
  const [inputPassword, setPassword] = useState('')
  const [inputPasswordChange, setPasswordChange] = useState('')
  const [error, setError] = useState('')

  function newUser() {
    let email = inputLogin
    let password = inputPassword

    if (!email && !password) {
      setError('Поля не должны быть пустыми')
      return
    }
    if (!email && password) {
      setError('Поле Логин(email) не должно быть пустым')
      return
    }
    if (email && !password) {
      setError('Поле Пароль не должно быть пустым')
      return
    }

    const auth = getAuth()

    if (!(inputPassword === inputPasswordChange)) {
      setError('Пароли не совпадают')
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          localStorage.setItem('userName', user.email)
          localStorage.setItem('userPassword', password)
          localStorage.setItem('uid', user.auth.currentUser.uid)
          push('/')
          // ...
          sendEmailVerification(auth.currentUser).then(() => {})
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/invalid-email') {
            setError('Неправильно введен email или такой пользователь не найден')
          }
          if (errorCode === 'auth/wrong-password') {
            setError('Неправильно введен пароль')
          }
          if (errorCode === 'auth/weak-password') {
            setError('Пароль должен быть не меньше 8 символов' )
          }


          console.log(errorCode + ' ' + errorMessage);
          // ..
        })
    }

    
  }

  useEffect(() => {
    setError('')  
  },[inputLogin, inputPassword])

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
              <p className="authorization-form_error error">{error}</p>
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
