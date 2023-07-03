import { useContext } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

/**
 * useContext: useContext hook은 React 컨텍스트(Context)를 사용하기 위한 Hook입니다. 컨텍스트는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위한 메커니즘을 제공합니다. useContext를 사용하여 컨텍스트 값을 가져올 수 있으며, 해당 컨텍스트 값이 변경될 때 컴포넌트를 다시 렌더링합니다.
 */