
import { useRef, useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./RegisterForm";
import { motion, AnimatePresence } from "framer-motion";



export const AuthForms = ({ mode, onChange }) => {
  const first = useRef(true);

  const [isDesktop, setIsDesktop] = useState(() => {
    try {
      return window.matchMedia("(min-width: 768px)").matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e) => setIsDesktop(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    first.current = false;
  }, []);

  const exitDuration = 0.25;
  const containerDelay = exitDuration; // start sliding after content has exited
  const containerDuration = 0.45; // tween duration for slide
  const enterDelay = first.current ? 0 : containerDelay + containerDuration; // delay enter until after slide on mode change

  return (
    <motion.div
      className="relative w-full min-h-[420px] auth-card rounded-[15px] shadow-[2px_0_15px_rgba(0,0,0,0.25)] overflow-hidden z-20 md:absolute md:inset-y-0 md:left-[30px] md:my-auto md:w-[calc(50%-30px)] md:-translate-y-1/2"
      initial={false}
      animate={isDesktop ? { x: mode === "signup" ? "100%" : "0%" } : { x: "0%" }}
      transition={isDesktop ? { type: "tween", duration: containerDuration, ease: "easeInOut", delay: first.current ? 0 : containerDelay } : {}}
    >
      <AnimatePresence mode="wait">
        {mode === "login" ? (
          <motion.div
            key="login"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ duration: 0.45, delay: first.current ? 0 : enterDelay, ease: "easeInOut" }}
          >
            <LoginForm onModeChange={onChange} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ duration: 0.45, delay: first.current ? 0 : enterDelay, ease: "easeInOut" }}
          >
            <SignupForm onModeChange={onChange} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

