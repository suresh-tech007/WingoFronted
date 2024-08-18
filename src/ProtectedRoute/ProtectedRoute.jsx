import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from "../components/component/Loading";

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
 
  const location = useLocation();

  useEffect(() => {
    
    sessionStorage.setItem('lastVisitedPage', location.pathname);
     
  }, [location]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center min-h-screen max-h-screen overflow-hidden bg-gray-400 ">
         <Loading />
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
