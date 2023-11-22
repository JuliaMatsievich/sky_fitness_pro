import React from 'react'
import './card.css'
import { cards } from '../../constants/cardsConst'
import { useGetCoursesQuery } from '../../services/coursesApi'

export const Cards = () => {

  const {data: courses} = useGetCoursesQuery()
  console.log('data',courses);

  const handleClickCard = () => {
    
  }

  return (
    <>
      {cards.map((card) => (
        <div className="card"  key={card.id}>
          <span>{card.title}</span>
          <img className="card-img" src={card.src} alt="" />
        </div>
      ))}
    </>
  )
}
