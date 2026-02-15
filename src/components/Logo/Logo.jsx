import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img className="w-7" src="/logo.png" alt="logo" />
      <h1 className="text-2xl font-bold">MedCare HMS</h1>
    </div>
  );
};

export default Logo;
