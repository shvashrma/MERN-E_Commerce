/* eslint-disable react/no-unescaped-entities */
import react, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import axios from "../axios";
import {Link} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [userName, setuserName] = useState("");

  const userRegisterFunction = async () => {
    const { data } = await axios.post("api/v1/user/register", {
      email,
      password,
      userName,
    });

    console.log(data);

    setEmail("");
    setPassword("");
    setconfirmPassword("");
    setuserName("");
  };

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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            name="username"
            placeholder="userName"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            required
            className="w-3/4 outline-none px-4 h-10 rounded-sm bg-white font-semibold"
            onChange={(e) => setconfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <button
            className="border-2 border-white rounded-md w-3/4 h-10 text-lg font-bold text-white"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              userRegisterFunction();
            }}
            disabled={confirmPassword !== password}
          >
            Signup
          </button>
        </form>

        <div className="w-full flex flex-col items-center mt-2 mb-6">
          <button className="border-2 flex flex-row items-center justify-center py-4 border-white rounded-md w-3/4 h-10 text-sm font-bold text-white text-center gap-2">
            <span>
              <AiFillGoogleCircle size={"30px"} />
            </span>

            <span>Continue with Google</span>
          </button>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-6">
          <p className="text-white text-xs ">
            Already have an account?{" "}
            <span className="font-bold text-md">
              <Link to={'/login'}>click here</Link>
            </span>{" "}
            to signin your account
          </p>
        </div>
      </div>
    </div>
  );
}
