import React from 'react'
import '../styles/card_home.css'
import pic from '../components/pic02.png'
import { Link, useNavigate } from 'react-router-dom'

const Card1 = ({ id, date, moist, temp, light}) => {
  const navigate = useNavigate()
  return (
    
    <div className='card1' onClick={() => navigate(`/detail/${id}`)}>
      <h1>ID: {id}</h1>
      <img src={pic} alt="plant" />
      <div className='det'>Date: {date}</div>
      <div className='det'>Moisture: {moist}</div>
      <div className='det'>Temperature: {temp}</div>
      <div className='det'>Light: {light}</div>
    </div>
    
  )
}

export default Card1