import { useState, useEffect } from "react";

interface Tab {
  label: string;
  key: string;
}

interface MobileHeaderProps {
  title: string;
  leftButtons?: React.ReactNode;
  rightButtons?: React.ReactNode;
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (key: string) => void;
  gradientEnd?: string; // 그라데이션 끝 위치 조정 가능
}

export default function MobileHeader({
  title,
  leftButtons,
  rightButtons,
  tabs = [],
  activeTab,
  onTabChange,
  gradientEnd = "80%",
}: MobileHeaderProps) {
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      setShowTabs(currentScrollY === 0 || !isScrollingDown);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 md:hidden py-6 px-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, #F3F4F6, #F3F4F6 ${gradientEnd}, rgba(220, 230, 250, 0))`,
        }}
      >
        {/* 상단: 좌측 버튼 + 제목 + 우측 버튼 */}
        <div className="relative flex justify-center items-center ">
          <div className="absolute left-0 flex space-x-1">{leftButtons}</div>
          <h2 className="font-semibold">{title}</h2>
          <div className="absolute right-0 flex space-x-1">{rightButtons}</div>
        </div>

        {/* 하단 탭 메뉴 */}
        {tabs.length > 0 && (
          <div
            className={`transition-all duration-300 ease-in-out ${
              showTabs ? "h-10 opacity-100" : "h-0 opacity-0"
            }`}
          >
            <div className="flex justify-around items-center text-gray-500 mt-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => onTabChange?.(tab.key)}
                  className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                    activeTab === tab.key
                      ? "text-blue-600 after:bg-blue-600 after:scale-100"
                      : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 헤더 높이만큼 빈 공간 */}
      {tabs.length > 0 ? (
        <div className="block md:hidden h-22"></div>
      ) : (
        <div className="block md:hidden h-12"></div>
      )}
    </>
  );
}
