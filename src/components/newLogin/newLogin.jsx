import React from 'react'
import './newLogin.css'
import { closeWindow } from '../profile/profile'
export function NewLogin() {
  return (
    <div className='for__profile'>
      <img onClick={() => closeWindow(false)} className='close-png' src="./img/close.png" alt="" />
      <div className="new-login">
      <img className="new-login_logo" src="./img/logo.svg" alt="" />
      <div className="new-login_div">
        <h2 className="new-login_login">Новый логин:</h2>
        <input className="new-login_input" type="text" placeholder="Логин" />
      </div>
      <button className="new-login_button">Сохранить</button>
    </div>
    </div>
  )
}


