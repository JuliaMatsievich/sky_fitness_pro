import React from 'react'
import '../authRegForm.css'
import { Link } from 'react-router-dom'

export function Registration() {
  return (
    <div className="main-authorization">
      <Link to='/.'>
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
            placeholder="Логин"
            type="text"
          />
          <input
            className="authorization-form__input"
            placeholder="Пароль"
            type="text"
          />
          <input
            className="authorization-form__input"
            placeholder="Повторите пароль"
            type="text"
          />
        </div>
        <div className="authorization-form__buttons">
          <button className="authorization-form__button">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  )
}
