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
import Search from "./Screens/Search";
import Layout from "./Layout";

function App() {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center relative">
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route
          path="/"
          element={
            <Layout>
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
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
