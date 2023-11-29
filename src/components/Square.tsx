import React, { Component } from 'react'
import '../assets/css/square.scss'

const Square = ({onClick, value}) => {
  return (
    <button className='square' onClick={onClick}>
    {value}
  </button>
  )
}

export default Square;