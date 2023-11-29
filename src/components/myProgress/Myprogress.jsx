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
  const userId = localStorage.getItem('uid')

  const fillProgressComplete = () => {
    // if (Object.keys(value).length) {
    //   writeUserProgress(userId, userName)
    // } else {
    //   console.log('pol');
    // }
    console.log(value)
    writeUserProgress(userId, userName)
    setIsProgressFilled(true)
  }

  const [value, setValue] = useState([])

  const writeUserProgress = (userId, userName) => {
    set(ref(db, 'users/' + userId), {
      username: userName,
      courses: {
        wy: {
          wy1: {
            id: 'wy1',
            wy1tr1: {
              id: 'wy1tr1',
              name: 'Приветствие солнца',
              progress_color: '#565EEF',
              max: 10,
              userValue: Number(value.wy1tr1) || 0,
            },
          },
          wy2: {
            id: 'wy2',
            wy2tr1: {
              id: 'wy2tr1',
              name: 'Наклон вперед ',
              progress_color: '#565EEF',
              max: 10,
              userValue: Number(value.wy2tr1) || 0,
            },
            wy2tr2: {
              id: 'wy2tr2',
              name: 'Наклон назад',
              progress_color: '#FF6D00',
              max: 10,
              userValue: Number(value.wy2tr2) || 0,
            },
            wy2tr3: {
              id: 'wy2tr3',
              name: 'Поднятие ног, согнутых в коленях',
              progress_color: '#9A48F1',
              max: 5,
              userValue: Number(value.wy2tr3) || 0,
            },
          },
          wy3: {
            id: 'wy3',
            wy3tr1: {
              id: 'wy3tr1',
              name: 'Наклон к правой ноге',
              progress_color: '#565EEF',
              max: 10,
              userValue: Number(value.wy3tr1) || 0,
            },
            wy3tr2: {
              id: 'wy3tr2',
              name: 'Наклон к левой ноге ',
              progress_color: '#FF6D00',
              max: 10,
              userValue: Number(value.wy3tr2) || 0,
            },
            wy3tr3: {
              id: 'wy3tr3',
              name: 'Наклон к согнутой правой ноге',
              progress_color: '#9A48F1',
              max: 10,
              userValue: Number(value.wy3tr3) || 0,
            },
            wy3tr4: {
              id: 'wy3tr4',
              name: 'Наклон к согнутой левой ноге',
              progress_color: '#565EEF',
              max: 10,
              userValue: Number(value.wy3tr4) || 0,
            },
            wy3tr5: {
              id: 'wy3tr5',
              name: 'Асана стоя',
              progress_color: '#FF6D00',
              max: 5,
              userValue: Number(value.wy3tr5) || 0,
            },
          },
          wy4: {
            id: 'wy4',
            wy4tr1: {
              id: 'wy4tr1',
              name: 'Сесть на пятки с носками от себя',
              progress_color: '#565EEF',
              max: 10,
              userValue: Number(value.wy4tr1) || 0,
            },
            wy4tr2: {
              id: 'wy4tr2',
              name: 'Сесть на пятки с носками на себя',
              progress_color: '#FF6D00',
              max: 20,
              userValue: Number(value.wy4tr2) || 0,
            },
            wy4tr3: {
              id: 'wy4tr3',
              name: 'Отпустить колено на пол из позы лотоса ',
              progress_color: '#9A48F1',
              max: 20,
              userValue: Number(value.wy4tr3) || 0,
            },
            wy4tr4: {
              id: 'wy4tr4',
              max: 10,
              name: 'Отпустить колено на пол из позы лотоса с соединенными стопами',
              progress_color: '#565EEF',
              userValue: Number(value.wy4tr4) || 0,
            },
          },
          wy5: {
            id: 'wy5',
            wy5tr1: {
              id: 'wy5tr1',
              max: 10,
              name: 'Округляем грудную клетку при выдохе',
              progress_color: '#565EEF',
              userValue: Number(value.wy5tr1) || 0,
            },
            wy5tr2: {
              id: 'wy5tr2',
              max: 20,
              name: 'Тянем левую руку в правую сторону',
              progress_color: '#FF6D00',
              userValue: Number(value.wy5tr2) || 0,
            },
            wy5tr3: {
              id: 'wy5tr3',
              max: 20,
              name: 'Тянем правую руку в левую сторону',
              progress_color: '#9A48F1',
              userValue: Number(value.wy5tr3) || 0,
            },
          },
        },
      },
    })
  }


  const handleChange = (e, exId) => {
    const value = e.target.value
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
            <InputProgress handleChange={handleChange} progress={progress} />
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
