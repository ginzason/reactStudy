import { useCallback, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

/**
 * useCallback: useCallback hook은 콜백 함수를 memoize하여 새로운 함수 인스턴스를 생성하는 것을 최적화합니다. 
 * 의존성 배열에 기반하여 새로운 콜백 함수 인스턴스를 생성하고, 의존성이 변경되지 않으면 이전에 생성된 콜백 함수 인스턴스를 재사용합니다. 
 * 이를 통해 자식 컴포넌트에 전달되는 콜백 함수들이 불필요한 재렌더링을 방지할 수 있습니다.
 */