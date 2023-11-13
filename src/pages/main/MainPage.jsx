import React from "react";
import "./main.css";

export const MainPage = () => {
  return (
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
                Начните заниматься спортом <br></br> и улучшите качество жизни
              </h1>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <span>Йога</span>
              <img className="img" src="img/yoga.svg" alt="" />
            </div>

            <div className="card">
              <span>Танцевальный фитнес</span>
              <img className="img" src="img/fitness.svg" alt="" />
            </div>

            <div className="card">
              <span>Стретчинг</span>
              <img className="img" src="img/stretching.svg" alt="" />
            </div>

            <div className="card">
              <span>Степ-аэробика</span>
              <img className="img" src="img/step.svg" alt="" />
            </div>

            <div className="card">
              <span>Бодифлекс</span>
              <img className="img" src="img/bodyflex.svg" alt="" />
            </div>

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
  );
};
