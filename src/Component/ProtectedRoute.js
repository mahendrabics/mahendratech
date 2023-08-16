import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated:', isAuthenticated);


  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
