import type { NavigateFunction } from "react-router-dom";

// 컴포넌트 외부에서 navigate 함수를 사용할 수 있는 통로를 만드는 것
// 보통 React Router의 useNavigate 훅은 컴포넌트 내부에서만 호출 할 수 있지만,
// 때로는 로그인 성공 후 자동으로 페이지 이동(리다이렉션), API 호출이 완료된 후 특정 경로로 이동해야 할 때가 있음
let navigateResolver: (navigate: NavigateFunction) => void;

// 1단계: navigate 함수를 언젠가 받을 Promise를 만듦
export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  // 2단계: Promise의 resolve 함수를 navigateResolver라는 전역 변수에 저장
  navigateResolver = resolve;
  // resolve(최종 값): 최종으로 반환할 값을 전달, 인자 없이 호출하면 Promise는 성공적으로 완료되지만, undefined를 최종 값으로 갖게 됨
});

// 3단계: 이 Promise의 resolve 함수를 외부에 노출
export const getNavigateResolver = () => navigateResolver;
