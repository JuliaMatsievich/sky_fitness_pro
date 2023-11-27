import React, { useEffect, useState } from 'react'
import './myprogress.css'
import { ref, set } from 'firebase/database'
import { db } from '../../firebase'

export const MyProgress = ({ setIsProgressFilled, closePopup, exercises }) => {
  const fillProgressComplete = () => {
    setIsProgressFilled(true)
  }

  const [valueAndMax, setValueAndMax] = useState({})

  const getProcentProgress = (value, max) => {
    const procentProgress = Math.round((value * 100) / max)
    return procentProgress
  }

  const userName = localStorage.getItem('userName')

  function writeUserProgress(userName, value, exerciciseId) {
    set(
      ref(
        db,
        `/workouts/${workoutId}/trains/${exerciciseId}/users/${userName}`,
      ),
      {
        value: value,
      },
    )
  }

  useEffect(() => {
    workoutId = "wy2"
    exerciciseId = "wy2tr1"
    writeUserProgress(userName, valueAndMax.value, exerciciseId)
  }, [valueAndMax])

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
              onChange={(e) =>
                setValueAndMax({ value: e.target.value, max: progress.max })
              }
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
