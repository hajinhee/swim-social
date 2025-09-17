import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import "./assets/fonts/remixicon.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
