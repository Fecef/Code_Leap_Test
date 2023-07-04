import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const user = localStorage.getItem("@username");

  return user ? <Outlet /> : <Navigate to={"/"} />;
}

export default ProtectedRoutes;
