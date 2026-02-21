import React from "react";
import { Navigate } from "react-router-dom";

// props:
// children -> component to render
// userRole -> current logged in role
// role -> required role for this route
export default function ProtectedRoute({ children, userRole, role }) {
  if (!userRole) {
    // user not logged in
    return <Navigate to="/login" />;
  }

  if (role && role !== userRole) {
    // role mismatch
    return <Navigate to="/" />;
  }

  return children;
}