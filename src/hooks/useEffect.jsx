import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Seconds: {seconds}</div>;
}


/**
 * useEffect: useEffect hook은 부수 효과(side effects)를 처리하기 위해 사용됩니다. 컴포넌트의 렌더링과는 별개로 실행되며, 주로 데이터 가져오기, 구독 설정, 타이머 설정 등의 작업에 사용됩니다. 의존성 배열을 사용하여 특정 값이 변경될 때만 실행되도록 설정할 수 있습니다.
 */