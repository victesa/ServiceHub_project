import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RedirectIfAuthenticated = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/protectedRoute', {
      method: 'GET',
      credentials: 'include', // Include credentials in request
    })
      .then(response => response.json())
      .then(data => {
        setIsAuthenticated(data.authenticated);
      })
      .catch(error => {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optionally render a loading state while checking authentication
  }

  return isAuthenticated ? <Navigate to="/HomeAuthenticatedScreen" /> : children;
};

export default RedirectIfAuthenticated;
