import React, { useState } from 'react'

import '../App.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function TestButtons (){
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

function App() {
  return (
    <>
      <div>
        리액트로 된 테스트 페이지 
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <TestButtons></TestButtons>
        <p>
          <a href="/News">여긴 뉴스로 가는 곳</a>
        </p>
      </div>
      <div>
        <RecoilRoot>
          <CharacterCounter />
        </RecoilRoot>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
