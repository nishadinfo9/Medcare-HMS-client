import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
      className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-200
                  bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {loading && (
        <span className="mr-2 animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
      )}
      {iconLeft && !loading && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
