

import { useState } from "react";
import { FormInput } from "./FormInput";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AUTH_CREDENTIALS } from "../config/auth.config";

export const SignupForm = ({ onModeChange }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const next = { name: "", email: "", password: "" };

    if (!name.trim()) next.name = "الرجاء إدخال الاسم الكامل";
    if (!email.trim()) next.email = "الرجاء إدخال البريد الإلكتروني";
    else if (!email.includes("@")) next.email = "البريد الإلكتروني غير صحيح — يجب أن يحتوي على @";
    if (!password.trim()) next.password = "الرجاء إدخال كلمة المرور";

    setErrors(next);

    if (!next.name && !next.email && !next.password) {
      if (name === "admin" && email === "admin" && password === "123") {
        navigate("/dashboard", { state: { fromLogin: true } });
      } else {
        setErrors({ ...next, auth: "البيانات غير صحيحة" });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative py-6 px-4 w-full md:pt-[40px] md:px-[40px]" dir="rtl" noValidate>
      <h2 className="mb-4 text-[1.125rem] neon-title font-bold md:mb-[40px] md:text-[1.5rem]">إنشاء حساب</h2>

      <div className="relative mb-4 md:mb-[30px]">
        <FormInput
          name="name"
          type="text"
          placeholder="الاسم الكامل"
          className={errors.name ? "border-red-500" : ""}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="absolute -bottom-5 right-0 text-red-500 text-xs">{errors.name}</span>}
      </div>

      <div className="relative mb-4 md:mb-[30px]">
        <FormInput
          name="email"
          type="email"
          placeholder="البريد الإلكتروني"
          className={errors.email ? "border-red-500" : ""}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="absolute -bottom-5 right-0 text-red-500 text-xs">{errors.email}</span>}
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
        {errors.password && <span className="absolute -bottom-5 right-0 text-red-500 text-xs">{errors.password}</span>}
      </div>

      <div className="mb-3 md:mb-0 md:h-5 relative">
        {errors.auth && (
          <div className="text-red-500 text-sm text-right md:absolute md:top-0 md:right-0">{errors.auth}</div>
        )}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-neon px-6 rounded-[5px] py-2 tracking-[0.1rem] transition w-full md:w-auto md:px-[35px] md:py-[10px]">
          إنشاء
        </button>
      </div>

      <div className="mt-4 text-center md:hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key="signup-footer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-sm text-[#cbd5e1]">هل لديك حساب بالفعل؟</span>
            <button
              type="button"
              onClick={() => onModeChange?.("login")}
              className="ml-2 text-[var(--neon-green)] font-semibold"
            >
              تسجيل الدخول
            </button>
          </motion.p>
        </AnimatePresence>
      </div>
    </form>
  );
};

