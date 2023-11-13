import React from 'react'
import './newLogin.css'
function NewLogin() {
  return (
    <div className="main">
      <img className="main-logo" src="./img/logo.svg" alt="" />
      <div className="main-div">
        <h2 className="main-login">Новый логин:</h2>
        <input className="main-input" type="text" placeholder="Логин" />
      </div>
      <button className="main-button">Сохранить</button>
    </div>
  )
}

export default NewLogin;

