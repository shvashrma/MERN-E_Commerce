/* eslint-disable react/no-unescaped-entities */
import react from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-black/5">
      <div className="w-1/4 bg-teal-700 h-full flex flex-col items-center justify-center gap-4 ">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <h2 className="text-white font-bold text-2xl ">
            Welcome to BlipKart
          </h2>
          <h5 className="text-white font-semibold text-sm">
            Create a new account using email address
          </h5>
        </div>
        <form className="flex flex-col mt-8 w-full items-center gap-4">
          <input
            type="text"
            name="email"
            placeholder="email address"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
          />
          <input
            type="text"
            name="username"
            placeholder="userName"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
          />
          <button
            className="border-2 border-white rounded-md w-3/4 h-10 text-lg font-bold text-white"
            type="submit"
          >
            Signup
          </button>
        </form>

        <div className="w-full flex flex-col items-center mt-2 mb-6">
          <button className="border-2 flex flex-row items-center justify-center py-4 border-white rounded-md w-3/4 h-10 text-sm font-bold text-white text-center gap-2">
            <span>
              <AiFillGoogleCircle size={'30px'} />
            </span>

            <span>Continue with Google</span>
          </button>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-6">
          <p className="text-white text-xs ">
            Already have an account?{" "}
            <span className="font-bold text-md">
              <a href="">click here</a>
            </span>{" "}
            to signin your account
          </p>
        </div>
      </div>
    </div>
  );
}
