import React from 'react'
import './myprogress.css'
import { myProgress } from '../../constants/myProgressConst'

export const MyProgress = ({ setIsProgressFilled, closePopup }) => {
  const fillProgressComplete = () => {
    setIsProgressFilled(true)
  }

  return (
    <div className="my-progress">
      <div className="my-progress__close">
        <div className="my-progress__close_btn">
          <img
            src="img/close.png"
            alt="close"
            className="my-progress__close-png"
            onClick={closePopup}
          />
        </div>
      </div>

      <div className="my-progress__description">
        <span>Мой прогресс</span>

        {myProgress.map((progress) => (
          <div className="my-progress__description_text" key={progress.id}>
            <label className="exercise-description">{progress.text}</label>
            <input
              type="number"
              className="exercise-number"
              placeholder="Введите значение"
            />
          </div>
        ))}

        <button
          type="submit"
          className="submit-button btn-purple"
          onClick={fillProgressComplete}
        >
          Отправить
        </button>
      </div>
    </div>
  )
}
