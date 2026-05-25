import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "./features/auth/pages/AuthPage";

import DashboardPage from "./sheard/components/DashboardPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<AuthPage />}
      />

      <Route
        path="/dashboard/*"
        element={<DashboardPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>

  );
}

export default App;