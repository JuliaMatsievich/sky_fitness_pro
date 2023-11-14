import React from 'react'
import './card.css'

export const Card = ({ title, link }) => {
  return (
    <div className="card">
      <span>{title}</span>
      <img className="img" src={link} alt="" />
    </div>
  )
}
