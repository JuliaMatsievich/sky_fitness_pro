import React, { useEffect, useState } from 'react'
import './newPassword.css'
import { Profile, closeWindow } from '../profile/profile'
import { getAuth, updatePassword } from 'firebase/auth'

export function NewPassword() {
  const [inputPassword, setPassword] = useState('')
  const [inputPasswordChange, setPasswordChange] = useState('')
  const [error, setError] = useState('')


  function newPasswordUser() {
    const auth = getAuth()
    const user = auth.currentUser
    let pass = inputPassword
    user.emailVerified = true
    if(!inputPassword || !inputPasswordChange) {
      setError('Поля не должны быть пустыми')
      return
      console.log('inputPassword',inputPassword);
      console.log('inputPasswordChange', inputPasswordChange);
    }
    if (!(inputPassword === inputPasswordChange)) {
      setError('Пароли не совпадают')
    } else {
      updatePassword(user, pass)
        .then(() => {
          // Update successful.
          localStorage.setItem('userPassword', pass)
          closeWindow(false)
        })
        .catch((error) => {
          // An error ocurred
          if (error.code === 'auth/wrong-password') {
            setError('Неправильно введен пароль')
          }
          if (error.code === 'auth/weak-password') {
            setError('Пароль должен быть не меньше 8 символов')
          }
          console.log(error.code + ' ' + error.message)

          // ...
        })
    }
  }

  useEffect(() => {
    setError('')  
  },[inputPassword, inputPasswordChange])


  return (
    <div className="for__profile">
      <div className="new-password_password">
      <img
        onClick={() => closeWindow(false)}
        className="close-png main-password__close"
        src="./img/close.png"
        alt=""
      />
        <img className="new-password_logo" src="./img/logo-black.svg" alt="" />
        <div className="new-password_div">
          <h2 className="new-password_login">Новый пароль:</h2>
          <div className="new-password_div-login">
            <input
              className="new-password_input"
              type="password"
              placeholder="Пароль"
              value={inputPassword}
              onChange={(event) => setPassword(event.target.value)}
              minLength={8}
              maxLength={16}
            />
            <input
              className="new-password_input"
              type="password"
              placeholder="Повторите пароль"
              value={inputPasswordChange}
              onChange={(event) => setPasswordChange(event.target.value)}
              minLength={8}
              maxLength={16}
            />
          </div>
        </div>
        {error && (
          <div>
            <p className="authorization-form_error">{error}</p>
          </div>
        )}
        <button onClick={newPasswordUser} className="new-password_button btn-purple">
          Сохранить
        </button>
      </div>
    </div>
  )
}
