import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Listing from "./Listing/Listing";
import PageNotFound404 from "./PageNotFound404/PageNotFound404";
import DetailsProduct from "./DetailsProduct/DetailsProduct";
import MyAccount from "./MyAccount/MyAccount";
import Login from "./Login/Login";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import ResetPassword from "./ResetPassword/ResetPassword";
import Contact from "./Contact/Contact";
import PurchaseGuide from "./PurchaseGuide/PurchaseGuide";

const IndexRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/DetailsProduct" element={<DetailsProduct />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/PurchaseGuide" element={<PurchaseGuide />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
  );
};

export default IndexRouter;
