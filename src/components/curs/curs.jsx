import './curs.css'
import {
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
} from '../../services/coursesApi'
import { useEffect } from 'react'
import { Curses } from '../../constants/cursData'

export const Curs = ({ cursId }) => {
  // const {data: courses, isLoading} = useGetCoursesQuery()
  const [fetchGetCourses, { data: courses, isLoading }] =
    useLazyGetCoursesQuery()

  let currCurs
  useEffect(() => {
    fetchGetCourses()
      .unwrap()
      .then(() => {
        console.log('courses', courses)
        currCurs = courses.find((curs) => curs._id === cursId)
        console.log('currCurs', currCurs)
      })
      .catch((error) => {
        console.log('error', error.message)
      })
  }, [courses])

  const currentCurs = Curses.find((curs) => curs.id === cursId)
  // console.log('currentCurs', currentCurs);

  return (
    <>
      {isLoading ? (
        <p>Данные загружаются...</p>
      ) : (
        <>
          <div className="curs__header">
            <h1 className="curs__title">{currentCurs.title}</h1>
            <div className="curs__image">
              <img src="/img/fitness-curs.svg" alt="" />
            </div>
          </div>
          <div className="foryou">
            <h2 className="foryou__title">Подойдет для вас, если:</h2>
            <div className="foryou__list">
              {currentCurs.foryou.map((item,index) => {
                return (
                  <div className="foryou__item foryou-item" key={index+5}>
                  <div className="foryou-item__count">{index+1}</div>
                  <p className="foryou-item__text">
                    {item}
                  </p>
                </div>
                )

              })}
            </div>
          </div>

          <div className="directions">
            <h2 className="directions__title">Направления:</h2>
            <ul className="directions__list">
              <li className="directions__item">Йога для новичков</li>
              <li className="directions__item">Классическая йога</li>
              <li className="directions__item">Йогатерапия</li>
              <li className="directions__item">Кундалини-йога</li>
              <li className="directions__item">Хатха-йога</li>
              <li className="directions__item">Аштанга-йога</li>
            </ul>
          </div>

          <div className="description">
            <p className="description__text">
              Йога - это философия здорового образа жизни. Тот, кто занимается
              йогой, становится здоровее и выносливее, после занятий чувствует
              прилив сил, а также с новой силой может ощутить вкус к жизни.
            </p>
            <p className="description__text">
              Благодаря комплексному воздействию упражнений происходит
              проработка всех групп мышц, тренировка суставов, улучшается
              циркуляция крови. Кроме того, упражнения дарят отличное
              настроение, заряжают бодростью и помогают противостоять стрессам.
            </p>
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
