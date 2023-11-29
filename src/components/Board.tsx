import React, { Component, useState } from 'react'
import Square from './Square'

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const status = `Next Player ${xIsNext? 'X': 'O'}`
  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext? 'X': 'O';
    setSquares(newSquares);
    setXIsNext(prev => !prev);
  }
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }
  return (
    <>
      <div>
        <div className='statu'>{status}</div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  )
  
}

export default Board;