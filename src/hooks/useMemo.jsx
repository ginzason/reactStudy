import { useMemo, useState } from 'react';

function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    // 계산 비용이 높은 연산 수행
    console.log('Expensive calculation');
    return a + b;
  }, [a, b]);

  return <div>Result: {result}</div>;
}

// app쪽에 담아서 실제 적인 샘플로 만들자 
/**
 * useMemo: useMemo hook은 계산 비용이 높은 연산의 결과를 메모이제이션(memoize)하여 이전에 계산한 값을 재사용합니다. 
 * 의존성 배열을 통해 값이 변경되지 않는 한 이전에 계산된 값을 반환하므로, 불필요한 재계산을 방지하고 성능을 최적화할 수 있습니다.
 */