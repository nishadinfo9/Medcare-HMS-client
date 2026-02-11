import React from "react";

const Select = ({
  label,
  value,
  onChange,
  options = [],
  error,
  disabled = false,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className="mb-1 text-gray-700 font-medium"
          htmlFor={props.id || label}
        >
          {label}
        </label>
      )}
      <select
        id={props.id || label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${error ? "border-red-500" : "border-gray-300"} 
                    ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        {...props}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Select;
