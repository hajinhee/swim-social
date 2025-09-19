// src/router/index.tsx (또는 AppRoutes가 있는 곳)

import { useRoutes } from "react-router-dom";
import routes from "./config";

export function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}
