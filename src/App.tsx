import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import "./assets/fonts/remixicon.css";
import { NavigationProvider } from "./components/feature/NavigationProvider";

const App = () => {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <NavigationProvider />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
