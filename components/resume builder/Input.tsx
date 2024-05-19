import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  setText: Function;
  value: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  setText,
  value,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={label}
        className="text-xs tracking-wider font-base uppercase pl-2 text-muted-foreground"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        defaultValue={value}
        className="rounded-md  py-3 px-4 hover:outline-primary outline-none bg-transparent border border-muted"
      />
    </div>
  );
};

export default Input;
