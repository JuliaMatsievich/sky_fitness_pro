import React, { useState, useEffect } from 'react'
import './workout.css'
import { Header } from '../../components/header/header'
import { MyProgress } from '../../components/myProgress/Myprogress'

export const WorkoutPage = () => {
  const [isProgressPop, setIsProgressPop] = useState(false)
  const [isProgressFilled, setIsProgressFilled] = useState(false)

  const fillProgress = () => {
    setIsProgressPop(true)
    setIsProgressFilled(false)
  }

  useEffect(() => {
    setTimeout(() => {
      if (isProgressFilled) {
        setIsProgressFilled(false)
        setIsProgressPop(false)
      }
    }, 2000)
  }, [isProgressFilled])

  return (
    <div className="workout__container">
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="workout">
            <div className="workout__info">
              <div className="workout__section">
                <h1 className="workout__title">Йога</h1>
              </div>
              <span> Красота и здоровье / Йога на каждый день / 2 день</span>
            </div>

            <iframe
              width="1160"
              height="639"
              src="https://www.youtube.com/embed/OjqPk3FDZLs"
              title="КАЖДАЯ ЖЕНЩИНА ДОЛЖНАЯ ДЕЛАТЬ ЭТИ 3 УПРАЖНЕНИЯ!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="workout-exercises">
              <div className="workout-description">
                <p>Упражнения</p>
                <ul>
                  <li>Наклон вперед (10 повторений)</li>
                  <li>Наклон назад (10 повторений)</li>
                  <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
                </ul>
                <button onClick={fillProgress} className='btn-purple'>Заполнить свой прогресс</button>
              </div>

              <div className="workout-progress">
                <p>Мой прогресс по тренировке 2:</p>

                <div className="workout-progress__rate">
                  <span>Наклоны вперед</span>
                  <div className="workout-show__progress">
                    <div className="workout-progress_button button_first">
                      <div className="workout-progress_bar bar_first">
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="workout-progress__rate">
                  <span>Наклоны назад</span>
                  <div className="workout-show__progress">
                    <div className="workout-progress_button button_second">
                      <div className="workout-progress_bar bar_second">
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="workout-progress__rate">
                  <span>Поднятие ног, согнутых в коленях</span>
                  <div className="workout-show__progress">
                    <div className="workout-progress_button button_third">
                      <div className="workout-progress_bar bar_third">
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isProgressPop && !isProgressFilled ? (
          <div className="workout-progress_popup">
            <MyProgress setIsProgressFilled={setIsProgressFilled} />
          </div>
        ) : null}
        {isProgressFilled ? (
          <div className="workout-progress_popup">
            <img src="img/progress-complete.png" alt="" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
