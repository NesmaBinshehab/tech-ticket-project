export const AuthLayout = ({ children }) => {
  return (
    <section className="flex items-center justify-center w-full h-screen neon-bg">
      <div className="relative w-[70%]">
        {children}
      </div>
    </section>
  );
};