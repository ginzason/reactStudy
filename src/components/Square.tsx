import React, { Component } from 'react'
import '../assets/css/square.scss'
interface SquareProps {
  value: number;
}
export default class Square extends Component<SquareProps> {
  render() {
    return (
      <button className='square'>
        { this.props.value }
      </button>
    )
  }
}
