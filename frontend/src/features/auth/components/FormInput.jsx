export const FormInput = ({
  name,
  type,
  placeholder = "",
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`
        w-full 
        bg-transparent 
        text-gray-800
        border-b 
        border-[#ccc]
        py-[6px] 
        px-[6px] 
        outline-none
        transition-all 
        duration-300
        focus:border-cyan-400
        hover:border-cyan-300
        ${className}
      `}
    />
  );
};