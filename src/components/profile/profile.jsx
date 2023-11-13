import React from 'react'
import './profile.css'
export function Profile() {
  return (
    <div>
      <header className="header">
        
        <div className="header-profileInfo">
          <img className="header-logo" src="./img/logo.svg" alt="" />
        </div>
        <div className="header-profileInfo">
          <img className="header-photo" src="./img/photoProfile.svg" alt="" />
          <p className="header-p">Сергей</p>
          <img
            className="header-settingsProfile"
            src="./img/settingsProfile.svg"
            alt=""
          />
        </div>
      </header>

      <div className="main">
        <div className="main-profileInfo">
          <h1 className="main-h1">Мой профиль</h1>
          <h2 className="main-p">Логин: sergey.petrov96</h2>
          <h2 className="main-p">Пароль: 4fkhdj880d</h2>
        </div>
        <div className="main-button">
          <button className="main-button-login">Редактировать логин</button>
          <button className="main-button-login">Редактировать пароль</button>
        </div>
      </div>

      <footer className="footer">
        <h1 className="footer-h1">Мои курсы</h1>
        <div className="footer-main">
          <div className="footer-main-block img1">
            <h2 className="footer-main-h1 help-for-h1-1">Йога</h2>
            <img className="footer-img-gap1" src="./img/ForYoga.png" alt="" />
            <button className="footer-main-button">Перейти →</button>
          </div>
          <div className="footer-main-block img2">
            <h2 className="footer-main-h1">Стретчинг</h2>
            <img
              className="footer-img-gap2"
              src="./img/RectangleFor2.png"
              alt=""
            />
            <button className="footer-main-button">Перейти →</button>
          </div>
          <div className="footer-main-block img3">
            <h2 className="footer-main-h1 help-for-h1">Бодифлекс</h2>
            <img className="footer-img-gap3" src="./img/UnionFor3.png" alt="" />
            <button className="footer-main-button">Перейти →</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
