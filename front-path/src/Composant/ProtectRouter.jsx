import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const ProtectRouter = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/Authentification/Login" replace />;
  }

  return <Outlet />;
};

export default ProtectRouter