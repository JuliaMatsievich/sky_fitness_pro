import React, { useState } from 'react'
import './myprogress.css'
import { ref, set } from 'firebase/database'
import { db } from '../../firebase'
import { InputProgress } from '../inputProgress/inputProgress'

export const MyProgress = ({
  setIsProgressFilled,
  closePopup,
  exercises,
  currentWorkout,
}) => {
  const userName = localStorage.getItem('userName')
  const userId = localStorage.getItem('uid')
  const [error, setError] = useState('')

  const fillProgressComplete = () => {
    if (Object.keys(value).length) {
      setError('')
      Object.keys(value).forEach(key => {
        addUserCourse (userId, userName,key,value[key])
      })
      setIsProgressFilled(true)
    } else {
      setError('Введите значения')
    }
  }

  const [value, setValue] = useState([])


  const addUserCourse = (userId, userName,exId,userValue) => {
    set(ref(db, `/workouts/${currentWorkout._id}/trains/${exId}/users/`+userId), {
      id: userId,
      userName: userName,
      userValue: userValue
    })
}


  const handleChange = (e, exId) => {
    const value = e.target.value
    setValue((prevState) => ({
      ...prevState,
      [exId]: value,
    }))
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
        {exercises?.map((progress, index) => (
          <div className="my-progress__description_text" key={progress._id}>
            <label className="exercise-description">{progress.name}</label>
            {/* <input
              type="number"
              className="exercise-number"
              placeholder="Введите значение"
              // {...register('name')}
              onChange={(e) => handleChange(e,progress._id)}
            /> */}
            <InputProgress handleChange={handleChange} progress={progress} />
          </div>
        ))}
        {error ? <p className='my-progress__error error'>{error}</p> : ''}
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
