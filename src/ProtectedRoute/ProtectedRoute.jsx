import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom';
import Loader from "../components/component/Loader";

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center min-h-screen max-h-screen overflow-hidden bg-gray-400 ">
         <Loader />
      </div>
    );  
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return Component ? <Component {...rest} /> : <Outlet />;
};

export default ProtectedRoute;
