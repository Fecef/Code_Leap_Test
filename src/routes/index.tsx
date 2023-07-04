import { Route, Routes } from "react-router-dom";

import MainScreen from "../pages/mainScreen";
import Dashboard from "../pages/dashboard";
import ProtectedRoutes from "./protectedRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
