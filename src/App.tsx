import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import "./assets/fonts/remixicon.css";

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
