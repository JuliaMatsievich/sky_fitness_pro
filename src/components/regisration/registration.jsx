import React from 'react'
import './registration.css'


function Registration() {
    return (
        <div className="main">
        <img className="main-logo" src="./img/logo.svg" alt=""/>
        <div className="main-div">
            <h2 className="main-login">Новый пароль:</h2>
            <div className="main-div-login">
                <input className="main-input" type="text" placeholder="Пароль"/>
                <input className="main-input" type="text" placeholder="Повторите пароль"/>
            </div>
        </div>
        <button className="main-button">Сохранить</button>
    </div>
    )
}

export default Registration;