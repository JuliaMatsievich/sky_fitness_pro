import React, { useEffect, useRef, useState } from 'react'
import './myprogress.css'
import { ref, set, child, push } from 'firebase/database'
import { db } from '../../firebase'
import { useForm } from 'react-hook-form'

export const MyProgress = ({ setIsProgressFilled, closePopup, exercises, currentWorkout }) => {
  const fillProgressComplete = () => {
    // if (value) {
    //   writeUserProgress(userName, value, exId)
    // }
    console.log('userProgress', userProgress);
    setIsProgressFilled(true)
  }

  const {register, handleSubmit} = useForm()
  const [userProgress, setUserProgress] = useState([])
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const onSubmit = data => {
    console.log('data', data);
  }

  const getProcentProgress = (value, max) => {
    const procentProgress = Math.round((value * 100) / max)
    return procentProgress
  }

  const userName = localStorage.getItem('userName')

  function writeUserProgress(userName, value, exId) {
    const workoutRef = ref(db, `workouts/${currentWorkout._id}/trains/${exId}/users`)
    push(workoutRef, 
      {
        userName: userName,
        value: value,
      },
    )
  }

  function handleChange(e,exId) {
    setUserProgress([...userProgress,{exId: exId, value:  e.target.value}])
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
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        {exercises?.map((progress) => (
          <div className="my-progress__description_text" key={progress._id}>
            <label className="exercise-description">{progress.name}</label>
            <input
              type="number"
              className="exercise-number"
              placeholder="Введите значение"
              // {...register('name')}
              onChange={(e) => handleChange(e,progress._id)}
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
        {/* </form> */}
      </div>
    </div>
  )
}
