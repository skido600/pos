import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdWarning } from "react-icons/io";
import { toast } from "sonner";
import { toastSuccesscolor } from "../util/toastcol";
import { MdEmail } from "react-icons/md";
import type { FormData } from "../util/types";
import Forgetpassword from "../components/Forgetpassword";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [forgetpassword, setForgetpassword] = useState<boolean>(false);
  const [random, setRandom] = useState<string>("");
  const navigate = useNavigate();
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
    setRandom("");
    navigate("/admin");
    toast.success("successfully", toastSuccesscolor);
    reset();
  };
  const onError = () => {
    const emailType = errors.email?.type;
    const passwordType = errors.password?.type;

    if (emailType === "required" && passwordType === "required") {
      setRandom("Please fill in all the fields");
    } else if (emailType === "required") {
      setRandom("Email field can’t be empty.");
    } else if (emailType === "pattern") {
      const index = Math.floor(Math.random() * randomEmailerror.length);
      setRandom(randomEmailerror[index]);
    } else if (errors.email) {
      // other email errors like minLength etc.
      const index = Math.floor(Math.random() * randomEmailerror.length);
      setRandom(randomEmailerror[index]);
    } else if (passwordType === "required") {
      setRandom("Password field can’t be empty.");
    } else if (errors.password) {
      const index = Math.floor(Math.random() * randomtextpasswordError.length);
      setRandom(randomtextpasswordError[index]);
    } else {
      setRandom("");
    }
  };

  const randomtextpasswordError: string[] = [
    "Oops! The password you entered is incorrect. Please try again.",
    "Hmm, that doesn’t look like the right password. Double-check and try again.",
    "We couldn’t verify your password. Make sure it’s typed correctly.",
    "Sorry, the password you entered doesn’t match our records.",
    "That password isn’t quite right. Please re-enter it carefully.",
    "Looks like that’s not the correct password. Give it another shot.",
    "Password mismatch. Kindly check and try again.",
    "We’re unable to log you in with that password. Please try again.",
    "The password entered is invalid. Please review and try once more.",
    "Too many failed attempts. Please take a moment and try again.",
  ];

  const randomEmailerror: string[] = [
    "Hmm... we couldn't find that email in our admin records. Please double-check.",
    "This email doesn’t appear to be linked to an admin account.",
    "Oops! You may have entered the wrong email. Try again, please.",
    "We’re having trouble verifying this email for admin access.",
    "This email isn’t authorized for admin login. Please use a registered admin email.",
    "Sorry, that email isn’t on the list of approved admin users.",
    "Access restricted. Please use an email associated with an admin account.",
    "We couldn’t recognize this email. Make sure it’s spelled correctly.",
    "That email isn’t linked to admin privileges. Try another one.",
    "Looks like that’s not the right email for admin access. Please verify.",
  ];

  return (
    <div className="flex justify-center  px-4 h-screen  dark:bg-black  items-center   ">
      <section className=" w-full max-w-xl ">
        <h1 className="text-black md:text-2xl text-2xl mt-5 mb-2 md:mb-4 font-bold dark:text-white tracking-[-1px]">
          Welcome to Delion Communications Lim
        </h1>
        <div className="">
          {random ? (
            <div className="md:flex  gap-x-2.5">
              <div className="mb-2 md:mb-0">
                <IoMdWarning className="text-red-500 " size={30} />{" "}
              </div>
              <p className="text-red-600 mb-6">{random}</p>
            </div>
          ) : (
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              This is only for admins who have the necessary access. If you are
              not an admin and you see yourself here, please leave.
            </p>
          )}
        </div>

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
