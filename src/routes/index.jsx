import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default MainRoutes;
