import React, { useEffect, useRef, useState } from 'react'
import './myprogress.css'
import { ref, set, child, push } from 'firebase/database'
import { db } from '../../firebase'
import { useForm } from 'react-hook-form'
import { InputProgress } from '../inputProgress/inputProgress'

export const MyProgress = ({
  setIsProgressFilled,
  closePopup,
  exercises,
  currentWorkout,
}) => {

  const userName = localStorage.getItem('userName')
  const userId  = localStorage.getItem('uid')

  const fillProgressComplete = () => {
    // if (Object.keys(value).length) {
    //   writeUserProgress(userId, userName)
    // } else {
    //   console.log('pol');
    // }
    console.log(value);
    writeUserProgress(userId, userName)
    setIsProgressFilled(true)
  }

  const [value, setValue] = useState([])


const writeUserProgress= (userId, userName) => {
  set(ref(db, 'users/' + userId), {
    username: userName,
    courses: {
      wy: {
        wy1: {
          id: 'wy1',
          wy1tr1: {
            id: 'wy1tr1',
            name:'', 
            max: 10,
            userValue: Number(value.wy1tr1) || 0
          }
        },
        wy2: {
          id: 'wy2',
          wy2tr1: {
            id: 'wy2tr1',
            name:'',
            max: 10,
            userValue: Number(value.wy2tr1) || 0
          },
          wy2tr2: {
            id: 'wy2tr2',
            name:'',
            max: 10,
            userValue: Number(value.wy2tr2) || 0
          },
          wy2tr3: {
            id: 'wy2tr3',
            name:'',
            max: 5,
            userValue: Number(value.wy2tr3) || 0
          }
        },
        wy3: {
          id: 'wy3',
          wy3tr1: {
            id: 'wy3tr1',
            name:'',
            max: 10,
            userValue: Number(value.wy3tr1) || 0
          },
          wy3tr2: {
            id: 'wy3tr2',
            name:'',
            max: 10,
            userValue: Number(value.wy3tr2) || 0
          },
          wy3tr3: {
            id: 'wy3tr3',
            name:'',
            max: 10,
            userValue: Number(value.wy3tr3) || 0
          },
          wy3tr4: {
            id: 'wy3tr4',
            name:'',
            max: 10,
            userValue: Number(value.wy3tr4) || 0
          },
          wy3tr5: {
            id: 'wy3tr5',
            name:'',
            max: 5,
            userValue: Number(value.wy3tr5) || 0
          }
        },
        wy4: {
          id: 'wy4',
          wy4tr1: {
            id: 'wy4tr1',
            name:'',
            max: 10,
            userValue: Number(value.wy4tr1) || 0
          },
          wy4tr2: {
            id: 'wy4tr2',
            name:'',
            max: 20,
            userValue: Number(value.wy4tr2) || 0
          },
          wy4tr3: {
            id: 'wy4tr3',
            name:'',
            max: 20,
            userValue: Number(value.wy4tr3) || 0
          }
        }
      }
    }
  });
}

const getProcentProgress = (value, max) => {
    const procentProgress = Math.round((value * 100) / max)
    return procentProgress
  }

const handleChange = (e, exId) => {
    const value  = e.target.value
    setValue((prevState) => ({
      ...prevState,
      [exId]: value,
    }))
    // setValue(value)
    // setUserProgress([...userProgress, { exId: exId, value: e.target.value }])
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
            <InputProgress
              handleChange={handleChange}
              progress={progress}
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
