import './curs.css'
import { useEffect, useState } from 'react'
import { ref, child, get } from 'firebase/database'
import { db } from '../../firebase'

export const Curs = ({ cursId }) => {
 
  const [isLoading, setIsLoading] = useState(true)
  const [currentCurs, setCurrentCurs] = useState({})

useEffect(() => {
    const courseRef = ref(db)
    get(child(courseRef, `courses/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const curses = Object.values(snapshot.val())
          setCurrentCurs(curses.find((curs) => curs._id === cursId))
          setIsLoading(false)
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [currentCurs])

  return (
    <>
      {isLoading ? (
        <p>Данные загружаются...</p>
      ) : (
        <>
          <div className="curs__header">
            <h1 className="curs__title">{currentCurs.name}</h1>
            <div className="curs__image">
              <img src={currentCurs.img_for_curs} alt="" />
            </div>
          </div>
          <div className="foryou">
            <h2 className="foryou__title">Подойдет для вас, если:</h2>
            <div className="foryou__list">
              {currentCurs.foryou.map((item, index) => {
                return (
                  <div className="foryou__item foryou-item" key={index + 5}>
                    <div className="foryou-item__count">{index + 1}</div>
                    <p className="foryou-item__text">{item}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="directions">
            <h2 className="directions__title">Направления:</h2>
            <ul className="directions__list">
              {currentCurs.directions.map((direction, index) => {
                return (
                  <li className="directions__item" key={index + 10}>
                    {direction}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="description">
            {currentCurs.description.map((descr, index) => {
              return (
                <p className="description__text" key={index + 50}>
                  {descr}
                </p>
              )
            })}
          </div>
        </>
      )}

      <div className="signUpTrain">
        <p className="signUpTrain__text">
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <button className="signUpTrain__btn btn-purple">
          Записаться на тренировку
        </button>
      </div>
    </>
  )
}
