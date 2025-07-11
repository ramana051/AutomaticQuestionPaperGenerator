import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = sessionStorage.getItem('user'); // Check if the user is logged in
  return user ? children : <Navigate to="/" />; // Redirect to login page if not authenticated
};
// const Private

export default PrivateRoute;
