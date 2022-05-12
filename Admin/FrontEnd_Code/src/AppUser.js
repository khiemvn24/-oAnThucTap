/** @format */
import React, { Component } from "react";
import Smember from "./Components/SignIn/Smember";
import CuaHang from "./Components/CuaHang/CuaHang";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/FooterAndHeader/Header";
import Footer from "./Components/FooterAndHeader/Footer";
import Content from "./Components/HomeTrangChu/Content";
import SearchOrder from "./Components/TraCuuDonHang/SearchOrder";
import DanhMucSP from "./Components/DanhMucSP/DanhMucSP";
import DanhMucSPByName from "./Components/DanhMucSP/DanhMucSPByName";
import Cart from "./Components/Carts/Cart";
import PayInfor from "./Components/Carts/PayInfor";
import Payment from "./Components/Carts/Payment";
import CompletePayment from "./Components/Carts/CompletePayment";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmemberMain from "./Components/Smember/SmemberMain";


export default function AppUser() {
  return (
    <div className="App w-full flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/Smember" element={<Smember />}></Route>
        <Route path="/SmemberMain" element={<SmemberMain/>}></Route>
        <Route path="/CuaHang" element={<CuaHang />}></Route>
        <Route path="/SearchOrder" element={<SearchOrder />}></Route>
        <Route path="/DanhMucSP/:idLoai" element={<DanhMucSP />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/payment-infor" element={<PayInfor />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/completePayment" element={<CompletePayment />}></Route>
        <Route path="/product-detail/:idSP" element={''}></Route>
        <Route
          path="/DanhMucSPByName/:name"
          element={<DanhMucSPByName />}
        ></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}
