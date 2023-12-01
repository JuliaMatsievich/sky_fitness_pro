import React, { useContext, useEffect, useState } from 'react'
import './myprogress.css'
import { ref, set, get, child } from 'firebase/database'
import { db } from '../../firebase'
import { InputProgress } from '../inputProgress/inputProgress'
import { UserContext } from '../../App'
import { current } from '@reduxjs/toolkit'

export const MyProgress = ({
  setIsProgressFilled,
  closePopup,
  exercises,
  currentWorkout,
}) => {
  const userName = localStorage.getItem('userName')
  const userId = localStorage.getItem('uid')
  const [error, setError] = useState('')
  const [workoutId, setWorkoutId] = useState()
  const [value, setValue] = useState([])
  const [isProgressComplete, setIsProgressComplete] = useState(false)



  // const { isProgressComplete, setIsProgressComplete, isWorkoutComplete, setIsWorkoutComplete } = useContext(UserContext)

  const fillProgressComplete = () => {
    if (Object.keys(value).length) {
      setError('')
      Object.keys(value).forEach((key) => {
        addUserCourse(userId, userName, key, value[key], isProgressComplete)
      })
      addCourseToUser(userId, userName, isProgressComplete)
      setIsProgressFilled(true)
    } else {
      setError('Введите значения')
    }
  }

  const addUserCourse = (
    userId,
    userName,
    exId,
    userValue,
    isProgressComplete,
  ) => {
    set(
      ref(db, `/workouts/${currentWorkout._id}/trains/${exId}/users/` + userId),
      {
        id: userId,
        userName: userName,
        userValue: userValue,
        isProgressComplete: isProgressComplete
      },
    )
  }

  const addCourseToUser = (userId, userName, isProgressComplete) => {
    set(ref(db, `/users/${userId}/courses/wy/${currentWorkout._id}/`),
    {
      id: currentWorkout._id,
      isProgressComplete: isProgressComplete,
      userName: userName
    })
  }

  const handleChange = (e, exId) => {
    const value = e.target.value
    setValue((prevState) => ({
      ...prevState,
      [exId]: value,
    }))
  }

  const userValues = Object.values(value).map((val) => val)
  const maxValues = Object.values(currentWorkout.trains).map((train) =>
    train.max.toString(),
  )

  const areValuesEqual = (userValues, maxValues, id) => {
    if (
      userValues.length === maxValues.length &&
      userValues.every((element, index) => element === maxValues[index])
    ) {
      setWorkoutId(id)
      return true
    }
    return false
  }

  useEffect(() => {
    const result = areValuesEqual(userValues, maxValues, currentWorkout._id)
    if (result) setIsProgressComplete(true)
    else setIsProgressComplete(false)
    // setIsWorkoutComplete((prevState) => ({
    //   ...prevState,
    //   [currentWorkout._id]: result
    // }))
    // console.log('isWorkoutComplete', isWorkoutComplete);
  },[value])

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
        {error ? <p className="my-progress__error error">{error}</p> : ''}
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
