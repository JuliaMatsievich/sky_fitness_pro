import React from 'react'
import './card.css'
import { cards } from '../../constants/cardsConst'
import { Link } from 'react-router-dom'

export const Cards = () => {

  return (
    <>
      {cards.map((card) => (
        <Link to='/curs'  key={card.id}>
        <div className="card" >
          <span>{card.title}</span>
          <img className="card-img" src={card.src} alt="" />
        </div>
        </Link>
      ))}
    </>
  )
}
