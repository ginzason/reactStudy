import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}


/**
 * useReducer: useReducer hook은 컴포넌트의 상태(state)를 관리하기 위해 사용됩니다. useState와 달리 복잡한 상태 로직을 다룰 수 있으며, 상태와 관련된 업데이트 로직을 분리하여 관리할 수 있습니다. 리듀서(reducer) 함수와 초기 상태를 인자로 받아 현재 상태와 디스패치(dispatch) 함수를 반환합니다.
 */