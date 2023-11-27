import React from 'react'
import './myprogress.css'

export const MyProgress = ({ setIsProgressFilled, closePopup, exercises }) => {
  const fillProgressComplete = () => {
    setIsProgressFilled(true)
  }

  return (
    <div className="my-progress">
      <div className="my-progress__close">
        <div className="my-progress__close_btn">
          <img
            src="/img/close.png"
            alt="close"
            className="my-progress__close-png"
            onClick={closePopup}
          />
        </div>
      </div>

      <div className="my-progress__description">
        <span>Мой прогресс</span>

        {exercises?.map((progress) => (
          <div className="my-progress__description_text" key={progress._id}>
            <label className="exercise-description">{progress.name}</label>
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
