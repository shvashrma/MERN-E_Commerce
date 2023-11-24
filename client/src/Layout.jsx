import react from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

// eslint-disable-next-line react/prop-types
export default function Layout() {
  return (
    <div className="w-[100vw] h-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
