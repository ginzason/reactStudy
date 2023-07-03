import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}


/**
 * useRef: useRef hook은 가변적인(mutable) 값이 필요한 경우 사용됩니다. useRef를 통해 생성한 ref 객체는 컴포넌트의 생명주기 동안 유지되며, current 프로퍼티에 할당된 값이 변경되어도 컴포넌트의 리렌더링을 트리거하지 않습니다.
 */