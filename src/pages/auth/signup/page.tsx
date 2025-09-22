import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pt-12">
      {/* 상단 로고 */}
      <div className="w-full flex justify-center mb-8  items-center space-x-2 ">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          🏊
        </div>
        <span
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent pr-2"
          style={{ fontFamily: '"Pacifico", serif' }}
        >
          SwimSocial
        </span>
      </div>

      {/* 닫기 버튼 */}
      <div className="absolute top-6 right-6">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>

      <div className="w-full max-w-sm">
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition cursor-pointer">
            <i className="ri-kakao-talk-fill mr-2"></i>
            카카오로 연결하기
          </button>
          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition cursor-pointer">
            <i className="ri-google-fill mr-2"></i>
            구글로 연결하기
          </button>
          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition cursor-pointer">
            <i className="ri-apple-fill mr-2"></i>
            애플로 연결하기
          </button>
          {/* <button
            onClick={() => setShowPhoneSignup(true)}
            className="w-full flex flex-col items-center justify-center p-3 mt-4 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            휴대폰 번호로 로그인
          </button> */}
        </div>

        {/* 하단 약관 동의 텍스트 또는 로그인 링크 */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          회원가입 시 약관의{" "}
          <Link to="/privacy" className="text-blue-600 hover:underline">
            개인정보처리방침
          </Link>{" "}
          및{" "}
          <Link to="/terms" className="text-blue-600 hover:underline">
            이용약관
          </Link>{" "}
          에 동의하는 것으로 간주합니다
        </div>
      </div>
    </div>
  );
}
