import React from 'react'
import './newPassword.css'
import { closeWindow } from '../profile/profile'

export function NewPassword() {
  return (
    <div className='for__profile'>
    <img onClick={() => closeWindow(false)} className='close-png main-password__close' src="./img/close.png" alt="" />
      <div className="main-password">
        <img className="main-logo" src="./img/logo.svg" alt="" />
        <div className="main-div">
          <h2 className="main-login">Новый пароль:</h2>
          <div className="main-div-login">
            <input className="main-input" type="text" placeholder="Пароль" />
            <input
              className="main-input"
              type="text"
              placeholder="Повторите пароль"
            />
          </div>
        </div>
        <button className="main-button">Сохранить</button>
      </div>
    </div>
  )
}
