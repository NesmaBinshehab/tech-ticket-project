

import { useState } from "react";
import { FormInput } from "./FormInput";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AUTH_CREDENTIALS } from "../config/auth.config";

export const LoginForm = ({ onModeChange }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const next = { username: "", password: "", auth: "" };

    if (!username.trim()) next.username = "الرجاء إدخال اسم المستخدم";
    if (!password.trim()) next.password = "الرجاء إدخال كلمة المرور";

    if (!next.username && !next.password) {
      if (username !== AUTH_CREDENTIALS.username || password !== AUTH_CREDENTIALS.password) {
        next.auth = "اسم المستخدم أو كلمة المرور خاطئة";
      } else {
        navigate("/dashboard", { state: { fromLogin: true } });
      }
    }

    setErrors(next);
  };

  return (
    <form onSubmit={handleSubmit} className="relative py-6 px-4 w-full md:pt-[40px] md:px-[40px]" dir="rtl" noValidate>
      <h2 className="mb-4 text-[1.125rem] tracking-[0.1rem] neon-title font-bold md:mb-[40px] md:text-[1.5rem]">تسجيل الدخول</h2>

      <div className="relative mb-4 md:mb-[30px]">
        <FormInput
          name="username"
          type="text"
          placeholder="اسم المستخدم"
          className={errors.username ? "border-red-500" : ""}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">{errors.username}</span>
        )}
      </div>

      <div className="relative mb-4 md:mb-[30px]">
        <FormInput
          name="password"
          type="password"
          placeholder="كلمة المرور"
          className={errors.password ? "border-red-500" : ""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">{errors.password}</span>
        )}
      </div>

      <div className="mb-3 md:mb-0 md:h-5 relative">
        {errors.auth && (
          <div className="text-red-500 text-sm text-right md:absolute md:top-0 md:right-0">{errors.auth}</div>
        )}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-neon px-6 rounded-[5px] py-2 tracking-[0.1rem] transition w-full md:w-auto md:px-[35px] md:py-[10px]">
          تسجيل
        </button>
      </div>

      <div className="mt-4 text-center md:hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key="login-footer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-sm text-[#cbd5e1]">ليس لديك حساب؟</span>
            <button
              type="button"
              onClick={() => onModeChange?.("signup")}
              className="ml-2 text-[var(--neon-green)] font-semibold"
            >
              إنشاء حساب
            </button>
          </motion.p>
        </AnimatePresence>
      </div>
    </form>
  );
};


