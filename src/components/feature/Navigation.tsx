import { Link, useLocation } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/routes";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: ROUTE_PATH.SOCIAL, label: "소셜", icon: "ri-team-line" },
    { path: ROUTE_PATH.RECORDS, label: "기록", icon: "ri-calendar-line" },
    { path: ROUTE_PATH.RANKING, label: "랭킹", icon: "ri-trophy-line" },
    { path: ROUTE_PATH.MYPAGE, label: "MY", icon: "ri-user-line" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:flex bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                🏊
              </div>
              <span
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent pr-2"
                style={{ fontFamily: '"Pacifico", serif' }}
              >
                SwimSocial
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer">
                <i className="ri-notification-line text-xl"></i>
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold text-sm">김</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-blue-100 shadow-lg">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <i className={`${item.icon} text-xl mb-1`}></i>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Header */}
      {/* <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              🏊‍♀️
            </div>
            <span
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent pr-2"
              style={{ fontFamily: '"Pacifico", serif' }}
            >
              SwimSocial
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors cursor-pointer">
              <i className="ri-notification-line text-lg"></i>
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-white font-bold text-xs">김</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Spacer for fixed navigation */}
      <div className="hidden md:block h-20"></div>
      <div className="md:hidden h-2"></div>
    </>
  );
}
