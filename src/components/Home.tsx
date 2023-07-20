import React, { useState } from 'react'
import Navigator from '../components/Navigator';
import News from '/pages/News';
import Tag from '/pages/Tag';
import GuestBook from '/pages/GuestBook';
import '../App.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Route, Switch, Link, RouterProvider } from 'react-router-dom';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  }
});
function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}

function TestButtons (){
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const RouterProvide = ({ children }) => {
  return <Router>{ children }</Router>;
};

function App() {
  return (
    <>
      <RouterProvide>
        <Navigator /> 
        <div>
          리액트로 된 테스트 페이지 
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <TestButtons></TestButtons>
        </div>
        <div>
          <RecoilRoot>
            <CharacterCounter />
          </RecoilRoot>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </RouterProvide>
    </>
  )
}

export default App
