import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getNavigateResolver } from "../../lib/navigation";

// React 훅과 navigation.ts 파일의 약속을 연결해주는 다리
// App.tsx에서 <NavigationProvider /> 컴포넌트를 렌더링하면, React는 이 컴포넌트의 코드를 실행
export function NavigationProvider() {
  // 4단계: React 훅을 사용해 navigate 함수 호출
  const navigate = useNavigate();

  // 5단계: 컴포넌트가 처음 렌더링될 때 한 번만 Promise를 이행
  useEffect(() => {
    const navigateResolver = getNavigateResolver();
    navigateResolver(navigate); // Promise를 resolve하는 순간, navigatePromise는 pending 상태에서 fulfilled 상태로 바뀌고, navigate 함수를 값으로
  }, [navigate]);

  return null; // 이 컴포넌트는 화면에 아무것도 표시하지 않음
}

// 이제 navigatePromise는 navigate 함수를 가지고 있으므로 navigation.ts 파일을 임포트하는 모든 곳에서 이 Promise를 사용할 수 있음
// const navigate = await navigatePromise;
// navigate('/dashboard');
