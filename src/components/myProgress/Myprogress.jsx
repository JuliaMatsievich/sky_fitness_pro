import React, { useState } from 'react'
import './myprogress.css'

export const MyProgress = ({ setIsProgressFilled }) => {
  const fillProgressComplete = () => {
    setIsProgressFilled(true);
    localStorage.setItem('inputForWorkout1', inputForWorkout1);
    localStorage.setItem('inputForWorkout2', inputForWorkout2);
    localStorage.setItem('inputForWorkout3', inputForWorkout3);
  }
  const [inputForWorkout1, setInputForWorkout1] = useState('');
  const [inputForWorkout2, setInputForWorkout2] = useState('');
  const [inputForWorkout3, setInputForWorkout3] = useState('');

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
            value={inputForWorkout1}
            onChange={(event) => setInputForWorkout1(event.target.value)}
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
            value={inputForWorkout2}
            onChange={(event) => setInputForWorkout2(event.target.value)}
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
            value={inputForWorkout3}
            onChange={(event) => setInputForWorkout3(event.target.value)}
          />
        </div>
        <button type="submit" className="submit-button btn-purple" onClick={fillProgressComplete}>
          Отправить
        </button>
      </div>
    </div>
  )
}
