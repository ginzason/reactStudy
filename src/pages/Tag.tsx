import React from "react"
import Board from "../components/Board"
function Tag() {
  return (
    <>
      <div>
        작은 게임하나 만들어 넣자
      </div>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">

        </div>
      </div>
    </>
  )
}

export default Tag