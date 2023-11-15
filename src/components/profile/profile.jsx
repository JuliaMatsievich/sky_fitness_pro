import React, { useState } from 'react'
import './profile.css'
import { NewLogin } from '../newLogin/newLogin'
import { NewPassword } from '../newPassword/newPassword'
import { useEffect } from 'react'
import Workout from '../workout/workout'
import { Link } from 'react-router-dom'
let data

export function closeWindow(e) {
  data = e
}

export function Profile() {
  const buttonWorkout = () => {
    if (isShowWorkout === true) {
      setIsShowWorkout(false)
    } else {
      setIsShowWorkout(true)
    }
  }

  const buttonLogin = () => {
    if (isShowLogin === true) {
      setIsShowLogin(false)
    } else {
      setIsShowLogin(true)
    }
  }

  const buttonPassword = () => {
    if (isShowPassword === true) {
      setIsShowPassword(false)
    } else {
      setIsShowPassword(true)
    }
  }

  const openMenuProfile = () => {
    if (isShowMenu === true) {
      setIsShowMenu(false)
    } else {
      setIsShowMenu(true)
    }
  }
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isShowWorkout, setIsShowWorkout] = useState(false)
  const [isShowLogin, setIsShowLogin] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  useEffect(() => {
    setInterval(() => {
      if (data === false) {
        setIsShowLogin(false)
        setIsShowPassword(false)
        setIsShowWorkout(false)
        data = true
      }
    }, 500)
  })
  return (
    <div>
      <header className="header">
        <Link to="/">
          <div className="header-profileInfo">
            <img className="header-logo" src="./img/logo.svg" alt="" />
          </div>
        </Link>
        <div>
          <div onClick={openMenuProfile} className="header-profileInfo">
            <img className="header-photo" src="./img/photoProfile.svg" alt="" />
            <p className="header-p">Сергей</p>
            <img
              className="header-settingsProfile"
              src="./img/settingsProfile.svg"
              alt=""
            />
          </div>   
            {isShowMenu && (
              <div className="header-profile-div__main">
                <Link to="/"><div className="header-profile-div">На главную</div></Link>
              <Link to="/profile"><div className="header-profile-div">Профиль</div></Link>
              <div className="header-profile-div">Выйти</div>
            </div>
            )}
        </div>
      </header>

      <div className="main-profile">
        <div className="main-profileInfo">
          <h1 className="main-h1">Мой профиль</h1>
          <h2 className="main-p">Логин: sergey.petrov96</h2>
          <h2 className="main-p">Пароль: 4fkhdj880d</h2>
        </div>
        <div className="main-button__profile">
          <button onClick={buttonLogin} className="main-button-login">
            Редактировать логин
          </button>
          <button onClick={buttonPassword} className="main-button-login">
            Редактировать пароль
          </button>
        </div>
      </div>

      <footer className="footer">
        <h1 className="footer-h1">Мои курсы</h1>
        <div className="footer-main">
          <div className="footer-main-block img1">
            <h2 className="footer-main-h1 help-for-h1-1">Йога</h2>
            <img className="footer-img-gap1" src="./img/ForYoga.png" alt="" />
            <button onClick={buttonWorkout} className="footer-main-button">
              Перейти →
            </button>
          </div>
          <div className="footer-main-block img2">
            <h2 className="footer-main-h1">Стретчинг</h2>
            <img
              className="footer-img-gap2"
              src="./img/RectangleFor2.png"
              alt=""
            />
            <button onClick={buttonWorkout} className="footer-main-button">
              Перейти →
            </button>
          </div>
          <div className="footer-main-block img3">
            <h2 className="footer-main-h1 help-for-h1">Бодифлекс</h2>
            <img className="footer-img-gap3" src="./img/UnionFor3.png" alt="" />
            <button onClick={buttonWorkout} className="footer-main-button">
              Перейти →
            </button>
          </div>
        </div>
      </footer>
      {isShowLogin && <NewLogin />}
      {isShowPassword && <NewPassword />}
      {isShowWorkout && <Workout />}
    </div>
  )
}
