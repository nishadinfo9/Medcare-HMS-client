import React, { forwardRef } from "react";

const Input = (
  {
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    error,
    className = "",
    ...props
  },
  ref,
) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label
          className="mb-1 text-gray-700 font-medium"
          htmlFor={props.id || label}
        >
          {label}
        </label>
      )}
      <input
        id={props.id || label}
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default forwardRef(Input);
