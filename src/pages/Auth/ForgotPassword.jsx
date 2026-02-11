import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../utils/Input";
import Button from "../../utils/Button";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password Email:", data);
    // Here you can call API to send reset password link
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-12">
      {/* Left Side - Hospital Illustration */}
      <div className="hidden md:flex col-span-5 bg-gray-600 relative">
        <div className="absolute inset-0 bg-gray-500/50 flex flex-col items-center justify-center p-8">
          <h1 className="text-white text-4xl font-bold mb-4">
            Hospital System
          </h1>
          <p className="text-white text-lg text-center">
            Reset your password and regain access to your account.
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1661685745163-eddd0d1da80d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hospital"
        />
      </div>

      {/* Right Side - Form */}
      <div className="col-span-12 md:col-span-7 flex items-center justify-center p-6 bg-gray-50">
        <form
          className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Forgot Password
          </h2>

          <p className="text-center text-gray-500 text-sm mb-4">
            Enter your email address below and we’ll send you a link to reset
            your password.
          </p>

          <Input
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />

          <Button type="submit" className="mt-4 w-full">
            Send Reset Link
          </Button>

          <p className="text-center text-gray-500 text-sm">
            Remember your password?{" "}
            <a
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
