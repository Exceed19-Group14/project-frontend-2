import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Button.css'

const Button = () => {
  return (
    <Link to='/create' className='a'>
        ADD
    </Link>
  )
}

export default Button