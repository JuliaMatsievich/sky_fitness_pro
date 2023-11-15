import React from 'react'
import './workout.css'
import { closeWindow } from '../profile/profile';

function Workout() {
  return (
    <div className='for__profile'>
    <img onClick={() => closeWindow(false)} className='close-png close-png__workout' src="./img/close.png" alt="" />
    <div className="main-workout">
      <h1 className="main-h1__workout">Выберите тренировку</h1>
      <div className="main-div__workout">
        <div className="main-tasks tasks-color">
          <h2 className="main-tasks-h2 task-color">
            Утренняя практика
            <svg
              className='main-tasks__svg'
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <circle cx="12" cy="13.5" r="11.5" stroke="#06B16E" />
              <path d="M6 9.81034L11.775 15.5L27 0.5" stroke="#06B16E" />
            </svg>
          </h2>
          <p className="main-tasks-p main-tasks-pColor">
            Йога на каждый день / 1 день
          </p>
        </div>
        <div className="main-tasks tasks-color">
          <h2 className="main-tasks-h2 task-color">
            Красота и здоровье
            <svg
              className='main-tasks__svg'
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <circle cx="12" cy="13.5" r="11.5" stroke="#06B16E" />
              <path d="M6 9.81034L11.775 15.5L27 0.5" stroke="#06B16E" />
            </svg>
          </h2>
          <p className="main-tasks-p main-tasks-pColor">
            Йога на каждый день / 2 день
          </p>
        </div>
        <div className="main-tasks">
          <h2 className="main-tasks-h2 main-tasks_h2__help">Асаны стоя</h2>
          <p className="main-tasks-p">Йога на каждый день / 3 день</p>
        </div>
        <div className="main-tasks">
          <h2 className="main-tasks-h2 main-tasks_h2__help">Утренняя практика</h2>
          <p className="main-tasks-p">Йога на каждый день / 4 день</p>
        </div>
        <div className="main-tasks main-margin">
          <h2 className="main-tasks-h2 main-tasks_h2__help">Утренняя практика</h2>
          <p className="main-tasks-p">Йога на каждый день / 5 день</p>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Workout;

