import React, { useEffect, useState } from 'react'
import './newLogin.css'
import { Profile, closeWindow } from '../profile/profile'
import { getAuth, updateEmail } from 'firebase/auth'
import { reauthenticateWithCredential } from 'firebase/auth'
import { sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export function NewLogin() {
  const push = useNavigate();
  const [newLogin, setNewLogin] = useState('')
  const [error, setError] = useState('')

  function changeLogin() {
    const auth = getAuth()
    let newEmail = newLogin
    if (!newEmail) {
      setError('Поле Логин(email) не должно быть пустым')
      return
    }
    const user = auth.currentUser
    user.emailVerified = true

    updateEmail(auth.currentUser, newEmail)
      .then((e) => {
        console.log(e)
        // Email updated!
        localStorage.setItem('userName', newEmail);
        closeWindow(false);
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          setError('Неправильно введен email')
        }
        if (error.code === 'auth/requires-recent-login') {
          setError('Пользователь с таким Логином(email) уже существует')
        }
        
        console.log(error.code + ' ' + error.message);
      })
  }

  useEffect(() => {
    setError('')  
  },[newLogin])

  return (
    <div className="for__profile">
      <div className="new-login">
      <img
        onClick={() => closeWindow(false)}
        className="close-png"
        src="./img/close.png"
        alt=""
      />
        <img className="new-login_logo" src="./img/logo-black.svg" alt="" />
        <div className="new-login_div">
          <h2 className="new-login_login">Новый логин:</h2>
          <input
            className="new-login_input"
            type="text"
            placeholder="Логин"
            value={newLogin}
            onChange={(event) => setNewLogin(event.target.value)}
          />
        </div>
        {error ? <p className='error'>{error}</p> : ''}
        <button onClick={changeLogin} className="new-login_button btn-purple">
          Сохранить
        </button>
      </div>
    </div>
  )
}
