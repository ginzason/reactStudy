import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


/**
 * useState: useState hook은 상태(state)를 관리하기 위해 사용됩니다. 컴포넌트에서 가변적인 값이 필요한 경우, 상태 변수와 해당 변수를 업데이트하는 함수를 반환합니다. 상태 변수의 초기값을 인자로 전달하며, 업데이트 함수를 호출하면 상태가 변경되고 컴포넌트가 다시 렌더링됩니다.
 */