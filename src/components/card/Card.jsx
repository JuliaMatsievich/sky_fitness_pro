import React from 'react'
import './card.css'
import { cards } from '../../constants/cardsConst'

export const Cards = () => {

  return (
    <>
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <span>{card.title}</span>
          <img className="card-img" src={card.src} alt="" />
        </div>
      ))}
    </>
  )
}
