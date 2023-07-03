import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';

import './App.css'

function TestButtons (){
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

function App() {
  useEffect(() => {
   alert("여기 왔어요?")
   return () => {
    alert("나갈꺼야?")
   }
  });
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <TestButtons></TestButtons>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
