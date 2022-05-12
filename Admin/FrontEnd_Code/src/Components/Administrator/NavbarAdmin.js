import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  const admin = JSON.parse(localStorage.getItem("Admin"));
  // console.log('admin',admin);

  return (
    <div className="w-[18%] rounded-xl shadow-[0_0px_9px_1px_#ffb3b3]">
      <div className="w-full flex flex-col justify-start items-start bg-[#FBEAEB] rounded-xl">
        <div className="w-full">
          {" "}
          <Link to="" className="flex flex-row justify-start items-start">
            <img
              src="https://colorlib.com//polygon/adminty/files/assets/images/logo.png"
              alt=""
              className="w-full bg-[#f3a2a8] p-[15px] rounded-t-xl"
            />
          </Link>
        </div>
        <div className="w-full">
          <ul className="w-full flex flex-col justify-start items-start text-[#2f3c7e] font-Roboto text-[20px] font-[500] ease-in-out">
            <li className="w-full my-[20px] h-[70px] leading-[70px] mt-[0px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link className="inline-block w-full h-full pl-[20px]" to="">
                <i className="fa-solid fa-house-user mr-[10px]"></i>
                Dashboard
              </Link>{" "}
            </li>

            {admin.role === "Admin" ? (
              <li className="w-full my-[20px]  h-[70px] leading-[70px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
                <Link
                  className="inline-block w-full h-full pl-[20px]"
                  to="/Admin/QuanLyAccount"
                >
                  <i className="fa-solid fa-computer mr-[10px]"></i>
                  Quản lý Tài khoản
                </Link>
              </li>
            ) : (
              ""
            )}

            <li className="w-full my-[20px]  h-[70px] leading-[70px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link
                className="inline-block w-full h-full pl-[20px]"
                to="/Admin/QuanLyPromotion"
              >
                <i className="fa-solid fa-computer mr-[10px]"></i>
                Quản lý Khuyến mại
              </Link>
            </li>
            <li className="w-full my-[20px]  h-[70px] leading-[70px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link
                className="inline-block w-full h-full pl-[20px]"
                to="/Admin/QuanLyCategory"
              >
                <i className="fa-solid fa-computer mr-[10px]"></i>
                Quản lý Danh mục
              </Link>
            </li>
            <li className="w-full my-[20px]  h-[70px] leading-[70px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link
                className="inline-block w-full h-full pl-[20px]"
                to="/Admin/QuanLyProduct"
              >
                <i className="fa-solid fa-computer mr-[10px]"></i>
                Quản lý Sản phẩm
              </Link>
            </li>
            <li className="w-full my-[20px]  h-[70px] leading-[70px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link
                className="inline-block w-full h-full pl-[20px]"
                to="/Admin/QuanLyRestaurant"
              >
                <i className="fa-solid fa-computer mr-[10px]"></i>
                Quản lý Cửa hàng
              </Link>
            </li>
            <li className="w-full my-[20px]  h-[70px] leading-[70px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link
                className="inline-block w-full h-full pl-[20px]"
                to="/Admin/QuanLyBill"
              >
                <i className="fa-solid fa-computer mr-[10px]"></i>
                Quản lý Hóa đơn
              </Link>
            </li>
            {/* <li className="w-full my-[20px]  h-[70px] leading-[70px] mb-[0px] hover:bg-[#fa9f9f] hover:text-[#3956fd]">
              <Link className="inline-block w-full h-full pl-[20px]" to="/Admin/QuanLyBillDetail">
                <i className="fa-solid fa-address-card mr-[10px]"></i>
                Quản lý BillDetail
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
