import { useState } from "react";
import { AuthLayout } from "../components/AuthLayout";
import { AuthOptions } from "../components/AuthOptions";
import { AuthForms } from "../components/AuthForms";

const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <AuthLayout>
      <AuthOptions mode={mode} onChange={setMode} />
      <AuthForms mode={mode} onChange={setMode} />
    </AuthLayout>
  );
};

export default AuthPage;