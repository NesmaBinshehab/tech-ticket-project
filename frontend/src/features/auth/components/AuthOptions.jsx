export const AuthOptions = ({ mode, onChange }) => {
  const leftActive = mode === "login";
  const rightActive = mode === "signup";

  return (
    <div className="hidden md:flex justify-between w-full bg-[rgba(12,14,18,0.7)] rounded-[15px] overflow-hidden" dir="rtl">
      
      {/* Signup Side */}
      <div
        className={`w-1/2 p-[75px_45px] text-white font-light ${
          rightActive ? "opacity-100" : "opacity-70"
        }`}
      >
        <h2 className="mb-[15px] text-[1.66rem]">ليس لديك حساب؟</h2>
        <p className="text-[0.83rem] leading-[1.4em]">
          قم بإنشاء حساب للاستفادة من نظام التذاكر والتواصل مع فريق الدعم الفني.
        </p>
        <button
          onClick={() => onChange("signup")}
          className="mt-[30px] rounded-[5px] btn-outline-neon px-[30px] py-[10px] tracking-[0.2rem] transition"
        >
           إنشاء حساب
        </button>
      </div>

      {/* Login Side */}
      <div
        className={`w-1/2 p-[75px_45px] text-white font-light ${
          leftActive ? "opacity-100" : "opacity-70"
        }`}
      >
        <h2 className="mb-[15px] text-[1.66rem]">هل لديك حساب؟</h2>
        <p className="text-[0.83rem] leading-[1.4em]">
          سجّل الدخول للوصول إلى لوحة الدعم الخاصة بك ومتابعة التذاكر بكل سهولة.
        </p>
        <button
          onClick={() => onChange("login")}
          className="mt-[30px] btn-outline-neon px-[30px] py-[10px] rounded-[5px] tracking-[0.2rem] transition"
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
};