import { Link } from "react-router-dom";

export default function GuestView() {
  return (
    <>
      <head>
        <title>Swim Social - 시작하기</title>
        <meta name="description" content="수영 데이터를 기록하고 분석하세요." />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-cyan-500 text-white">
        {/* 상단 헤더 */}
        <header className="absolute top-0 left-0 right-0 p-6 z-10">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center">
                🏊
              </div>
              <span
                className="text-2xl font-bold pr-2"
                style={{ fontFamily: '"Pacifico", serif' }}
              >
                SwimSocial
              </span>
            </Link>
          </nav>
        </header>

        {/* 메인 콘텐츠 섹션 */}
        <section
          className="flex-grow flex items-center justify-center p-6 text-center bg-cover bg-center bg-no-repeat"
          style={{
            // 배경 이미지 위에 어두운 파란색 계열의 그라데이션 오버레이를 추가하여 텍스트 가독성을 높입니다.
            backgroundImage: `linear-gradient(rgba(10, 20, 50, 0.7), rgba(0, 10, 30, 0.7)), url('https://readdy.ai/api/search-image?query=Beautiful%20swimming%20pool%20with%20crystal%20clear%20blue%20water%2C%20modern%20design%2C%20underwater%20view%20with%20sunlight%20rays%20penetrating%20water%20surface%2C%20serene%20aquatic%20environment%2C%20professional%20swimming%20facility%20with%20lane%20markers&width=1200&height=600&seq=hero-swimming-bg&orientation=landscape')`,
          }}
        >
          <div className="text-center max-w-8xl mx-auto w-full">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInDown">
              나의 수영 실력, 몇 등일까?
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed animate-fadeInUp">
              매일의 수영 기록을 친구들과 공유하고, 서로의 랭킹을 확인하며 함께
              즐겁게 성장해 보세요!{" "}
            </p>
            <div className="flex justify-center gap-4 animate-fadeInUp delay-300">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-black rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
              >
                시작하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
