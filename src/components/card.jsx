import React from 'react'
import '../styles/card.css'

const Card = ({img,detail}) => {
  return (
    <div className='card'>
     <img src={img} className='pic' />
     <p>{detail}</p>
     </div>
  )
}

export default Card