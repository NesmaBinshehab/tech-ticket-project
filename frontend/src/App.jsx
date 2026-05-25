import { Routes, Route } from "react-router-dom";
import AuthPage from "./features/auth/pages/AuthPage";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import ProfilePage from "./features/profile/pages/ProfilePage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;