
import React, { Component } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AddAcount from "./Account/AddAccount";
import DeleteAccount from "./Account/DeleteAccount";

import QuanLyAccount from "./Account/QuanLyAccount";
import ListSanPham from "./DanhSachSP/ListSanPham";
import Dashboard from "./Dashboard";

import NavbarAdmin from "./NavbarAdmin";

import ChiTietHoaDon from "./QuanLyHoaDon/ChiTietHoaDon";

import QuanLyHoaDon from "./QuanLyHoaDon/QuanLyHoaDon";

import QuanLyCategory from "./Category/QuanLyCategory";
import AddCategory from "./Category/AddCategory";
import DeleteCategory from "./Category/DeleteCategory";
import UpdateAccount from "./Account/UpdateAccount";
import QuanLyPromotion from "./Promotion/QuanLyPromotion";
import AddPromotion from "./Promotion/AddPromotion";
import DeletePromotion from "./Promotion/DeletePromotion";
import UpdatePromotion from "./Promotion/UpdatePromotion";
import UpdateCategory from "./Category/UpdateCategory";
import QuanLyProduct from "./Product/QuanLyProduct";
import AddProduct from "./Product/AddProduct";
import DeleteProduct from "./Product/DeleteProduct";
import UpdateProduct from "./Product/UpdateProduct";
import QuanLyRestaurant from "./Restaurant/QuanLyRestaurant";
import DeleteRestaurant from "./Restaurant/DeleteRestaurant";
import UpdateRestaurant from "./Restaurant/UpdateProduct";
import AddRestaurant from "./Restaurant/AddRestaurant";
import QuanLyBill from "./Bill/QuanLyBill";
import AddBill from "./Bill/AddBill";
import DeleteBill from "./Bill/DeleteBill";
import UpdateBill from "./Bill/UpdateBill";
import QuanLyBillDetail from "./BillDetail/QuanLyBillDetail";





export default function Admin() {
  return (
    <div className="mt-[30px] w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full h-full px-[50px] flex flex-row justify-between items-start">
        <NavbarAdmin />
        <div className="w-[80%] rounded-xl shadow-[0_0px_14px_1px_#80bfff] ">
          {Outlet}
          
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/QuanLyAccount" element={<QuanLyAccount/>}></Route>
            <Route path="/ThemAccount" element={<AddAcount/>}></Route>
            <Route path="/DeleteAccount/:ID_Account" element={<DeleteAccount/>}></Route>
            <Route path="/UpdateAccount/:ID_Account" element={<UpdateAccount/>}></Route>
            {/* Danh mục */}
            <Route path="/QuanLyCategory" element={<QuanLyCategory/>}></Route>
            <Route path="/ThemCategory" element={<AddCategory/>}></Route>
            <Route path="/DeleteCategory/:ID_Category" element={<DeleteCategory/>}></Route>
            <Route path="/UpdateCategory/:ID_Category" element={<UpdateCategory/>}></Route>

            <Route path="/QuanLyPromotion" element={<QuanLyPromotion/>}></Route>
            <Route path="/ThemPromotion" element={<AddPromotion/>}></Route>
            <Route path="/DeletePromotion/:ID_Promotion" element={<DeletePromotion/>}></Route>
            <Route path="/UpdatePromotion/:ID_Promotion" element={<UpdatePromotion/>}></Route>
           


            <Route path="/QuanLyProduct" element={<QuanLyProduct />}></Route>
            <Route path="/ThemProduct" element={<AddProduct/>}></Route>
            <Route path="/DeleteProduct/:ID_Product" element={<DeleteProduct/>}></Route>
            <Route path="/UpdateProduct/:ID_Product" element={<UpdateProduct/>}></Route>

            <Route path="/QuanLyRestaurant" element={<QuanLyRestaurant />}></Route>
            <Route path="/ThemRestaurant" element={<AddRestaurant/>}></Route>
            <Route path="/DeleteRestaurant/:ID_Restaurant" element={<DeleteRestaurant/>}></Route>
            <Route path="/UpdateRestaurant/:ID_Restaurant" element={<UpdateRestaurant/>}></Route>

            <Route path="/QuanLyBill" element={<QuanLyBill />}></Route>
            <Route path="/ThemBill" element={<AddBill/>}></Route>
            <Route path="/DeleteBill/:ID_Bill" element={<DeleteBill/>}></Route>
            <Route path="/UpdateBill/:ID_Bill" element={<UpdateBill/>}></Route>

             
            <Route path="/QuanLyBillDetail/:ID_Bill" element={<QuanLyBillDetail/>}></Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}
