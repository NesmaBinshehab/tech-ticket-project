import { Routes, Route } from "react-router-dom";
import AuthPage from "./features/auth/pages/AuthPage";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;