import './curs.css'

export const Curs = () => {
  return (
    <>
      <div className="curs_header">
        <h1 className="curs_title">Йога</h1>
        <div className="curs_image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="foryou">
        <h2 className="foryou_title">Подойдет для вас, если:</h2>
        <div className="foryou_list">
          <div className="foryou_item foryou-item">
            <div className="foryou-item_count">1</div>
            <p className="foryou-item_text">
              Давно хотели попробовать йогу, но не решались начать.
            </p>
          </div>

          <div className="foryou_item foryou-item">
            <div className="foryou-item_count">2</div>
            <p className="foryou-item_text">
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </p>
          </div>

          <div className="foryou_item foryou-item">
            <div className="foryou-item_count">3</div>
            <p className="foryou-item_text">
              Ищете активность, полезную для тела и души.
            </p>
          </div>
        </div>
      </div>

      <div className="directions">
        <h2 className="directions_title">Направления:</h2>
        <ul className="directions_list">
          <li className="directions_item">Йога для новичков</li>
          <li className="directions_item">Классическая йога</li>
          <li className="directions_item">Йогатерапия</li>
          <li className="directions_item">Кундалини-йога</li>
          <li className="directions_item">Хатха-йога</li>
          <li className="directions_item">Аштанга-йога</li>
        </ul>
      </div>

      <div className="description">
        <p className="description_text">
          Йога - это философия здорового образа жизни. Тот, кто занимается
          йогой, становится здоровее и выносливее, после занятий чувствует
          прилив сил, а также с новой силой может ощутить вкус к жизни.
        </p>
        <p className="description_text">
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </p>
      </div>

      <div className="signUpTrain">
        <p className="signUpTrain_text">
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <button className="signUpTrain_btn">Записаться на тренировку</button>
      </div>
    </>
  )
}
