import React, { useState, useEffect } from 'react'
import './workout.css'
import { Header } from '../../components/header/header'
import { MyProgress } from '../../components/myProgress/Myprogress'
import { useNavigate } from 'react-router-dom'

export const WorkoutPage = () => {
  const push = useNavigate();
  const [isProgressPop, setIsProgressPop] = useState(false)
  const [isProgressFilled, setIsProgressFilled] = useState(false)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setVisible(true);
    } else {
      push('/auth');
    }
  }, [])

  const fillProgress = () => {
    setIsProgressPop(true)
    setIsProgressFilled(false)
  }

  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');
  const [progress3, setProgress3] = useState('');

  useEffect(() => {
      if (localStorage.getItem('inputForWorkout1') > 10) {
        setProgress1(10);
      } else {
        setProgress1(localStorage.getItem('inputForWorkout1'));
      }

      if (localStorage.getItem('inputForWorkout2') > 10) {
        setProgress2(10);
      } else {
        setProgress2(localStorage.getItem('inputForWorkout2'));
      }

      if (localStorage.getItem('inputForWorkout1') > 10) {
        setProgress1(10);
      } else {
        setProgress1(localStorage.getItem('inputForWorkout1'));
      }

      if (localStorage.getItem('inputForWorkout3') > 10) {
        setProgress3(10);
      } else {
        setProgress3(localStorage.getItem('inputForWorkout3'));
      }
  })

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
      {visible && (
        <div>
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
                        <div className="workout-progress_bar bar_first" style={{width: `${progress1*10}` + '%'}}>
                          <span>{progress1*10}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="workout-progress__rate">
                    <span>Наклоны назад</span>
                    <div className="workout-show__progress">
                      <div className="workout-progress_button button_second">
                        <div className="workout-progress_bar bar_second" style={{width: `${progress2*10}` + '%'}}>
                          <span>{progress2*10}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="workout-progress__rate">
                    <span>Поднятие ног, согнутых в коленях</span>
                    <div className="workout-show__progress">
                      <div className="workout-progress_button button_third">
                        <div className="workout-progress_bar bar_third" style={{width: `${progress3*10}` + '%'}}>
                          <span>{progress3*10}%</span>
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
      )}
    </div>
  )
}
