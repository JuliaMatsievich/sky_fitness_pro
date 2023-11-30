import React, { useState, useEffect } from 'react'
import './workout.css'
import { Header } from '../../components/header/header'
import { MyProgress } from '../../components/myProgress/Myprogress'
import { useNavigate } from 'react-router-dom'

import { db } from '../../firebase'
import { ref, child, get } from 'firebase/database'

export const WorkoutComponent = ({ workoutId }) => {
  const [isProgressPop, setIsProgressPop] = useState(false)
  const [isProgressFilled, setIsProgressFilled] = useState(false)
  const [visible, setVisible] = useState(false)

  const push = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setVisible(true)
    } else {
      push('/auth')
    }
  }, [])

  const fillProgress = () => {
    setIsProgressPop(true)
    setIsProgressFilled(false)
  }

  const closePopup = () => {
    setIsProgressFilled(false)
    setIsProgressPop(false)
  }

  useEffect(() => {
    setTimeout(() => {
      if (isProgressFilled) {
        setIsProgressFilled(false)
        setIsProgressPop(false)
      }
    }, 2000)
  }, [isProgressFilled])

  const [currentWorkout, setCurrentWorkout] = useState({})
  const userId = localStorage.getItem('uid')


  useEffect(() => {
    const workoutRef = ref(db)
    get(child(workoutRef, 'workouts/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const workouts = Object.values(snapshot.val())
          const data = workouts?.find((workout) => workout._id === workoutId)
          setCurrentWorkout(data)
        } else {
          console.log('No data')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [currentWorkout])

 
  let exercises
  if (currentWorkout) {
    if (currentWorkout.trains) {
      exercises = Object.values(currentWorkout.trains).map((elem) => elem)
    }
  }

  // let userExercises
  // if (userWorkout) {
  //   userExercises = Object.values(userWorkout).filter(
  //     (elem) => elem != workoutId,
  //   )
  // }

  const getProcentProgress = (value, max) => {
    const procentProgress = Math.round((value * 100) / max)
    return procentProgress
  }

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
                  <span>{currentWorkout?.name}</span>
                </div>

                <iframe
                  width="1160"
                  height="639"
                  src={currentWorkout?.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <div className="workout-exercises">
                  <div className="workout-description">
                    <p>Упражнения</p>
                    <ul>
                      {currentWorkout.trains &&
                        exercises?.map((ex) => (
                          <li
                            key={ex._id}
                          >{`${ex.name} (${ex.max} повторений)`}</li>
                        ))}
                    </ul>
                    <button onClick={fillProgress} className="btn-purple">
                      Заполнить свой прогресс
                    </button>
                  </div>

                  <div className="workout-progress">
                    <p>Мой прогресс по тренировке:</p>

                    {currentWorkout.trains &&
                      exercises?.map((ex) => (
                        <div className="workout-progress__rate" key={ex._id}>
                          <span>{ex.name}</span>
                          <div className="workout-show__progress">
                            <div
                              className="workout-progress_button button_first"
                              style={{
                                border: `2px solid ${ex.progress_color}`,
                              }}
                            >
                              <div
                                className="workout-progress_bar bar_first"
                                style={{
                                  background: `${ex.progress_color}`,
                                  width: `${getProcentProgress(ex.users[userId].userValue, ex.max)}%`,
                                  // /workouts/wy2/trains/wy2tr3/users/XIOynDBUovTrEjRQ3dhpKuMdm7G2
                                }}
                              >
                                <span>{getProcentProgress(ex.users[userId].userValue, ex.max)}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {isProgressPop && !isProgressFilled ? (
              <div className="workout-progress_popup">
                <MyProgress
                  setIsProgressFilled={setIsProgressFilled}
                  exercises={exercises}
                  closePopup={closePopup}
                  currentWorkout={currentWorkout}
                />
              </div>
            ) : null}
            {isProgressFilled ? (
              <div className="workout-progress_popup">
                <div className="my-progress_complete">
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
                  <img src="/img/progress-complete.png" alt="progress" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
