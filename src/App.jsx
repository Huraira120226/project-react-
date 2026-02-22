import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

// User Pages
import Dashboard from "./pages/user/Dashboard.jsx";
import Profile from "./pages/user/Profile.jsx";
import Upload from "./pages/user/Upload.jsx";
import Verify from "./pages/user/Verify.jsx";
import History from "./pages/user/History.jsx";
import Share from "./pages/user/Share.jsx";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
import Documents from "./pages/admin/Documents.jsx";
import AuditLogs from "./pages/admin/AuditLogs.jsx";
import Blacklist from "./pages/admin/Blacklist.jsx";

// Protected Route Component
const ProtectedRoute = ({ children, role, userRole }) => {
  if (!userRole) return <Navigate to="/login" />;
  if (role && role !== userRole) return <Navigate to="/" />;
  return children;
};

export default function App() {
  const [userRole, setUserRole] = useState(null); // null / "user" / "admin"

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/signup" element={<Signup setUserRole={setUserRole} />} />

        {/* ================= USER ROUTES ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <Upload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/verify"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <Verify />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/share"
          element={
            <ProtectedRoute userRole={userRole} role="user">
              <Share />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute userRole={userRole} role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute userRole={userRole} role="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/documents"
          element={
            <ProtectedRoute userRole={userRole} role="admin">
              <Documents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/audit"
          element={
            <ProtectedRoute userRole={userRole} role="admin">
              <AuditLogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blacklist"
          element={
            <ProtectedRoute userRole={userRole} role="admin">
              <Blacklist />
            </ProtectedRoute>
          }
        />

        {/* Redirect */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

      </Routes>
    </Router>
  );
}