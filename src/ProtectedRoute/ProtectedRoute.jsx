import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from "../components/component/Loading";
import { logout } from "../redux/actions/userAction";

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
   
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
 
 
 
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    
    sessionStorage.setItem('lastVisitedPage', location.pathname);
     
  }, [location]);

  if (loading==true) {
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
    dispatch(logout())
    return <Navigate to="/login" replace />;
  }

  return Component ? <Component {...rest} /> : <Outlet />;
};

export default ProtectedRoute;
