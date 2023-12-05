import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
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
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SellerAcount from "./Screens/SellerAcount";
import SellerRegister from "./Screens/SellerRegister";
import { getUserDetails } from "./Redux/Slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAccountDetails } from "./Redux/Slices/sellerSlice";
import Wishlist from "./Screens/Wishlist";
import Account from "./Screens/Account";

function App() {
  const authToken = useSelector((state) => state.user?.authToken);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      dispatch(getUserDetails());
    }
  }, [authToken, dispatch]);

  useEffect(() => {
    if (user?.isSeller) {
      dispatch(getSellerAccountDetails());
    }
  }, [dispatch, user?.isSeller]);

  return (
    <div className="w-full h-full items-center flex flex-col justify-center relative">
      <Layout />
      <div className="w-[80vw]">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/return" element={<Return />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<Address />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/seller/:sellerId" element={<SellerAcount />} />
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
