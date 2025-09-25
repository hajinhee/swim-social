import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 경로가 바뀔 때마다 스크롤을 맨 위로 올립니다.
  }, [pathname]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}
