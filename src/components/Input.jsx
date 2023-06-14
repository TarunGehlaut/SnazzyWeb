import { useState } from "react";

const Input = ({ info, value, onChange, error }) => {
  const { label, type, name } = info;
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="form-filed group relative flex-1">
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="relative h-14 w-full rounded border border-[#edeff2] bg-white px-4 pt-5 text-base text-text outline-btn-primary-bg"
      />
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-[14px] top-1/2 z-40 translate-y-[-50%] text-[#a7abb6] transition-all duration-100 ease-linear ${
          isInputFocused || value ? " translate-y-[-100%] scale-90 " : ""
        }`}
      >
        <span> {label}</span>
        <span className="pointer-events-none text-lg text-[#a7abb6]">*</span>
      </label>

      <p className="text-sm text-rose-600">{error}</p>
    </div>
  );
};

export default Input;
