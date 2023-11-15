import React from 'react'
import './main.css'
import { Card } from '../../components/card/Card'

export const MainPage = () => {
  return (
    <div className="main__container-body">
      <div className="wrapper">
        <div className="main__page">
          <header className="header">
            <div className="header_wrapper">
              <img className="header_logo" src="img/logo.svg" alt="" />
              <button className="header-button">Войти</button>
            </div>
          </header>

          <div className="container">
            <div className="main">
              <div className="main__info">
                <span>Онлайн-тренировки для занятий дома</span>
                <div className="main__section">
                  <h1 className="main__title">
                    Начните заниматься спортом <br></br> и улучшите качество
                    жизни
                  </h1>
                </div>
              </div>

              <div className="main__cards">
                <Card title={'Йога'} link={'img/yoga.svg'} />
                <Card title={'Танцевальный фитнес'} link={'img/fitness.svg'} />
                <Card title={'Стретчинг'} link={'img/stretching.svg'} />
                <Card title={'Степ-аэробика'} link={'img/step.svg'} />
                <Card title={'Бодифлекс'} link={'img/bodyflex.svg'} />

                <div className="main__logo">
                  <div className="main__logo_img">
                    <img src="img/Union.svg" alt=""></img>
                  </div>
                </div>
              </div>
            </div>

            <button className="main__button">Вверх!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
