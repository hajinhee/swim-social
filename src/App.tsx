import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import "./assets/fonts/remixicon.css";
import { NavigationProvider } from "./components/feature/NavigationProvider";
import { AuthProvider } from "./components/feature/AuthProvider";
import ScrollToTop from "./components/base/ScrollToTop.js";

const App = () => {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <AuthProvider>
        <NavigationProvider />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
