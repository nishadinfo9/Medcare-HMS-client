import { useForm } from "react-hook-form";
import Input from "../../utils/Input";
import Button from "../../utils/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/apiSlice";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [triggerLogin, { isLoading, error }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await triggerLogin(data).unwrap();
      dispatch(login(response.user));
      reset("");
      navigate("/");
    } catch (err) {
      console.log(err || error);
    }
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
            Manage patients, appointments, and staff seamlessly.
          </p>
        </div>
        <img
          className="w-full h-full max-h-screen object-cover object-top"
          src="https://plus.unsplash.com/premium_photo-1661761222780-7981c33bfef3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Login to Your Account
          </h2>

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

          <Button
            disabled={isLoading}
            loading={isLoading}
            type="submit"
            className="mt-4 w-full"
          >
            Login
          </Button>

          <div className="flex justify-between text-sm text-gray-500">
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
            <Link to="/register" className="hover:underline">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
