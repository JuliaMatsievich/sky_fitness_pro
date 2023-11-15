import React from 'react'
import './main.css'
import { Header } from '../../components/header/header'
import { MAIN_PAGE } from '../../constants/pagesСonst'
import { Cards } from '../../components/card/Card'

export const MainPage = () => {
  return (
    <div className="main__container-body">
      <div className="wrapper">
        <div className="main__page">
          <Header namePage={MAIN_PAGE}/>

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
                <Cards />

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
