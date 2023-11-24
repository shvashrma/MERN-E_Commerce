import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Order from "./Screens/Order";
import Return from "./Screens/Returns";
import Cart from "./Screens/Cart";
import Store from "./Screens/Store";
import Checkout from "./Screens/Checkout";
import Product from "./Screens/Product";
import Payment from "./Screens/Payment";
import Feedback from "./Screens/Feedback";
import Address from "./Screens/Address";
import Billing from "./Screens/Billing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Screens/Search";

function App() {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center relative">
      <div className="w-[100vw]">
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
        </Routes>
      </div>
      {/* <Navbar /> */}
      <div className="w-[80vw] h-full">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/orders" Component={Order}></Route>
          <Route path="/return" Component={Return}></Route>
          <Route path="/store" Component={Store}></Route>
          <Route path="/product:id" Component={Product}></Route>
          <Route path="/search" Component={Search}></Route>
          <Route path="/payment" Component={Payment}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/feedback" Component={Feedback}></Route>
          <Route path="/checkout" Component={Checkout}></Route>
          <Route path="/address" Component={Address}></Route>
          <Route path="/billing" Component={Billing}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
