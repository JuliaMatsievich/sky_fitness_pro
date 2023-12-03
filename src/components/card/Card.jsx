import React from 'react'
import './card.css'
import { cards } from '../../constants/cardsConst'
import { Link } from 'react-router-dom'

export const Cards = () => {

  return (
    <>
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <Link to={`/curs/${card.id}`}>
          <span className='card-span'>{card.title}</span>
          <img className="card-img" src={card.src} alt="" />
          </Link>
        </div>
      ))}
    </>
  )
}
