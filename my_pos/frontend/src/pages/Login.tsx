import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { toastErrorcolor, toastSuccesscolor } from "../util/toastcol";
import { MdEmail } from "react-icons/md";
import type { FormData } from "../util/types";
import Forgetpassword from "../components/Forgetpassword";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [forgetpassword, setForgetpassword] = useState<boolean>(false);

  //password shit
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleforget = () => {
    setForgetpassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    toast.success("successfully", toastSuccesscolor);
    reset();
  };
  const onError = () => {
    if (errors.email) {
      toast.error(errors.email.message, toastErrorcolor);
    } else if (errors.password) {
      toast.error(errors.password.message, toastErrorcolor);
    } else {
      toast.error("Please fill in all the fields.", toastErrorcolor);
    }
  };
  return (
    <div className="flex justify-center py-12 px-4 h-screen overflow-y-auto  dark:bg-black  items-center   ">
      <section className=" w-full max-w-xl ">
        <h1 className="text-black md:text-[40px] text-2xl mb-5 font-bold dark:text-white tracking-[-1px]">
          Welcome to Waveel Pos
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Sign up below to if you Don’t have account{" "}
          <Link to="/regiser">
            {" "}
            <i className="underline">Register</i>
          </Link>{" "}
          build Your business with us
        </p>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
          <div className="relative ">
            <MdEmail className="absolute dark:text-white top-1/2 left-3 transform -translate-y-1/2 text-[#000235]" />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border-2 dark:border-white outline-none border-[#000235] rounded-lg focus:ring-1 focus:ring-[#000235] placeholder:text-gray-500"
            />
          </div>

          {/* password */}
          <div className="relative ">
            <FaLock className="absolute dark:text-white top-1/2 left-3 transform -translate-y-1/2 text-[#000235]" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 border-2  dark:border-white outline-none border-[#000235] rounded-lg focus:ring-1 focus:ring-[#000235] placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#000235] focus:outline-none">
              {showPassword ? (
                <FaEyeSlash className="dark:text-white" />
              ) : (
                <FaEye className="dark:text-white" />
              )}
            </button>
          </div>
          <p
            onClick={toggleforget}
            role="button"
            className="dark:text-blue-200 text-gray-600  cursor-pointer">
            Forget password
          </p>
          {forgetpassword && (
            <Forgetpassword setForgetPassword={setForgetpassword} />
          )}

          <button
            type="submit"
            className="bg-black cursor-pointer font-[600] w-full dark:bg-white dark:text-black text-white px-4 text-sm py-4 rounded">
            {" "}
            Login in
          </button>

          {/* terms */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            By continuing, you agree to our{" "}
            <span className="hover:underline text-blue-600 dark:text-blue-400">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="hover:underline text-blue-600 dark:text-blue-400">
              {" "}
              Privacy Policy
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
