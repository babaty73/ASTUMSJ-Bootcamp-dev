import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Global Context Matrix Layer Imports
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AttendanceProvider } from './context/AttendanceContext';

// Protected Custom Authorization Gateway Module
import { ProtectedRoute } from './routes/ProtectedRoute';

// Layout & Static Authentication View Components
import { DashboardLayout } from './layouts/DashboardLayout';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AccessDenied } from './pages/AccessDenied';

// Core Business Operational Workspace View Components
import { Dashboard } from './pages/Dashboard';
import { AllMembers } from './pages/AllMembers';
import { Attendance } from './pages/Attendance';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AttendanceProvider>
          <Router>
            <Routes>
              {/* ==================================================
                  PUBLIC ROUTING LAYERS
                 ================================================== */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/access-denied" element={<AccessDenied />} />

              {/* ==================================================
                  SHARED OPERATIONS (Admin, Supervisor, User)
                 ================================================== */}
              <Route element={<ProtectedRoute allowedRoles={['Admin', 'Supervisor', 'User']} />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/members" element={<AllMembers />} />
                </Route>
              </Route>

              {/* ==================================================
                  SUPERVISORY OPERATIONS (Admin & Supervisor Only)
                 ================================================== */}
              <Route element={<ProtectedRoute allowedRoles={['Admin', 'Supervisor']} />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/attendance" element={<Attendance />} />
                </Route>
              </Route>

              {/* ==================================================
                  ADMINISTRATION OPERATIONS (Admin Only)
                 ================================================== */}
              <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/settings" element={<Settings />} />
                </Route>
              </Route>

              {/* Catch-all global fallback fallback routing optimization matrix */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Router>
        </AttendanceProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
