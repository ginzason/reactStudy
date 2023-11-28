import React, { Component } from 'react'
import '../assets/css/square.scss'
interface SquareProps {
  value: string | null;
  handleClick: () => void; // handleClick이라는 함수가 전달되어야 함
}
export default class Square extends Component<SquareProps> {
  render() {
    return (
      <button className='square' onClick={this.props.handleClick}>
        {this.props.value}
      </button>
    )
  }
}
