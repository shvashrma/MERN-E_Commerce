import react from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="w-[80vw] h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
