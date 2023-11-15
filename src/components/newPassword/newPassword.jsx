import React from 'react'
import './newPassword.css'
import { closeWindow } from '../profile/profile'

export function NewPassword() {
  return (
    <div className='for__profile'>
    <img onClick={() => closeWindow(false)} className='close-png main-password__close' src="./img/close.png" alt="" />
      <div className="new-password_password">
        <img className="new-password_logo" src="./img/logo.svg" alt="" />
        <div className="new-password_div">
          <h2 className="new-password_login">Новый пароль:</h2>
          <div className="new-password_div-login">
            <input className="new-password_input" type="text" placeholder="Пароль" />
            <input
              className="new-password_input"
              type="text"
              placeholder="Повторите пароль"
            />
          </div>
        </div>
        <button className="new-password_button">Сохранить</button>
      </div>
    </div>
  )
}
