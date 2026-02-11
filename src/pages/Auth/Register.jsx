import { useForm } from "react-hook-form";
import Input from "../../utils/Input";
import Select from "../../utils/Select";
import Button from "../../utils/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCurrentUserQuery, useRegisterMutation } from "../../api/apiSlice";

const roles = ["Admin", "Doctor", "Receptionist", "Patient"];

const Register = () => {
  const { data: user } = useCurrentUserQuery();
  const [triggerRegister, { isLoading, error: apiError }] =
    useRegisterMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  if (user) return <Navigate to="/" />;

  const onSubmit = async (data) => {
    try {
      const response = await triggerRegister(data).unwrap();
      console.log(response);
      reset("");
      navigate("/login");
    } catch (err) {
      console.log(err || apiError);
    }
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-12">
      {/* Left Side */}
      <div className="hidden md:flex col-span-5 bg-gray-600 relative">
        <div className="absolute inset-0 bg-gray-500/50 flex flex-col items-center justify-center p-8">
          <h1 className="text-white text-4xl font-bold mb-4">
            Hospital System
          </h1>
          <p className="text-white text-lg text-center">
            Manage patients, appointments, and staff seamlessly.
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
            Create an Account
          </h2>

          <Input
            label="Username"
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9_]{3,20}$/,
                message:
                  "Username must be 3-20 characters with no spaces or special characters",
              },
            })}
            error={errors.username?.message}
          />

          <Input
            label="Full Name"
            {...register("fullName", { required: "Full Name is required" })}
            error={errors.fullName?.message}
          />

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

          <Input
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />

          <Input
            label="Confirm Password"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            error={errors.confirmPassword?.message}
          />

          <Select
            label="Role"
            {...register("role", { required: "Role is required" })}
            options={roles.map((role) => ({ value: role, label: role }))}
            error={errors.role?.message}
          />

          <Button
            disabled={isLoading}
            loading={isLoading}
            type="submit"
            className="mt-4 w-full"
          >
            Register
          </Button>

          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
