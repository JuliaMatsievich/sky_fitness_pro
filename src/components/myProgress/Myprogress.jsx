import React from 'react'
import './myprogress.css'

export const MyProgress = ({ setIsProgressFilled }) => {
  const fillProgressComplete = () => {
    setIsProgressFilled(true)
  }

  return (
    <div className="my-progress">
      <div className="my-progress__description">
        <span>Мой прогресс</span>
        <div className="my-progress__description_text">
          <label className="exercise-description">
            Сколько раз вы сделали наклоны вперед?
          </label>
          <input
            type="number"
            className="exercise-number"
            placeholder="Введите значение"
          />
        </div>

        <div className="my-progress__description_text">
          <label className="exercise-description">
            Сколько раз вы сделали наклоны назад?
          </label>
          <input
            type="number"
            className="exercise-number"
            placeholder="Введите значение"
          />
        </div>

        <div className="my-progress__description_text">
          <label className="exercise-description">
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </label>
          <input
            type="number"
            className="exercise-number"
            placeholder="Введите значение"
          />
        </div>
        <button type="submit" className="submit-button" onClick={fillProgressComplete}>
          Отправить
        </button>
      </div>
    </div>
  )
}
