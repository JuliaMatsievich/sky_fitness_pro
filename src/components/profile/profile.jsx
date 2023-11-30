import React, { useState } from 'react'
import './profile.css'
import { NewLogin } from '../newLogin/newLogin';
import { NewPassword } from '../newPassword/newPassword';
import { useEffect } from 'react';
import WorkoutList from '../workout/workout';
import { Header } from '../header/header';
import { PROFILE_PAGE } from '../../constants/pagesСonst';
import { useNavigate } from 'react-router-dom'

let data

export function closeWindow(e) {
  data = e
}

export function Profile() {
  const push = useNavigate()
  const [yourName, setYourName] = useState('');
  const [yourPassword, setYourPassword] = useState('');
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setVisible(true)
    } else {
      push('/auth')
    }
  }, [])

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
    }, 200)
  })
  useEffect(() => {
    setInterval(() => {
      setYourName(localStorage.getItem('userName'));
      setYourPassword(localStorage.getItem('userPassword'));
    }, 100);
  })
  return (
    <div>
      {visible && (
        <div>
          <Header namePage={PROFILE_PAGE} />
          <div className="wrapper">
            <div className="profile">
              <div className="profileInfo">
                <h1 className="profile-h1">Мой профиль</h1>
                <h2 className="profile-p">Логин: {yourName}</h2>
                <h2 className="profile-p">Пароль: {yourPassword}</h2>
              </div>
              <div className="profile-button__profile">
                <button onClick={buttonLogin} className="profile-button-login btn-purple">
                  Редактировать логин
                </button>
                <button
                  onClick={buttonPassword}
                  className="profile-button-login btn-purple"
                >
                  Редактировать пароль
                </button>
              </div>
            </div>

            <footer className="footer">
              <h1 className="footer-h1">Мои курсы</h1>
              <div className="footer-main">
                <div className="footer-main-block img1">
                  <h2 className="footer-main-h1 help-for-h1-1">Йога</h2>
                  <img
                    className="footer-img-gap1"
                    src="./img/ForYoga.png"
                    alt=""
                  />
                  <button
                    onClick={buttonWorkout}
                    className="footer-main-button"
                  >
                    Перейти →
                  </button>
                </div>
                {/* <div className="footer-main-block img2">
                  <h2 className="footer-main-h1">Стретчинг</h2>
                  <img
                    className="footer-img-gap2"
                    src="./img/RectangleFor2.png"
                    alt=""
                  />
                  <button
                    onClick={buttonWorkout}
                    className="footer-main-button"
                  >
                    Перейти →
                  </button>
                </div>
                <div className="footer-main-block img3">
                  <h2 className="footer-main-h1 help-for-h1">Бодифлекс</h2>
                  <img
                    className="footer-img-gap3"
                    src="./img/UnionFor3.png"
                    alt=""
                  />
                  <button
                    onClick={buttonWorkout}
                    className="footer-main-button"
                  >
                    Перейти →
                  </button>
                </div> */}
              </div>
            </footer>

            {isShowLogin && <NewLogin />}
            {isShowPassword && <NewPassword />}
            {isShowWorkout && <WorkoutList />}
          </div>
        </div>
      )}
    </div>
  )
}