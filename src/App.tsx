import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import "./assets/fonts/remixicon.css";
import { NavigationProvider } from "./components/feature/NavigationProvider";
import { AuthProvider } from "./components/feature/AuthProvider";

const App = () => {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AuthProvider>
        <NavigationProvider />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
