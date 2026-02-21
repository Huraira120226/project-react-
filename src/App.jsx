import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

import Dashboard from "./pages/user/Dashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

// Protected Route Component
const ProtectedRoute = ({ children, role, userRole }) => {
  if (!userRole) return <Navigate to="/login" />;
  if (role && role !== userRole) return <Navigate to="/" />;
  return children;
};

export default function App() {
  // dummy auth state
  const [userRole, setUserRole] = useState(null); // null / "user" / "admin"

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/signup" element={<Signup setUserRole={setUserRole} />} />

        {/* User Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute userRole={userRole} role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}