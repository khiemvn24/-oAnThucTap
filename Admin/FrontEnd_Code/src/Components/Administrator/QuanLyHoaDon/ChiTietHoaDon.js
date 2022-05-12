import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllHoaDon, getChiTietHoaDon } from "../../../Features/HoaDonSlice";
import { getAllSanPham } from "../../../Features/SanPhamSlice";

export default function ChiTietHoaDon() {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChiTietHoaDon(param.idhoadon));
    dispatch(getAllSanPham());
  }, []);
  const listData = useSelector((state) => state.listHoaDon);
  const listHoaDon = listData.hoaDonDetail;
  const listSP = useSelector((state) => state.listSanPham);
  const listSPham = listSP.listSanPham;

  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        CHI TIẾT HÓA ĐƠN
      </h1>
      <Link to="/Admin/QuanLyHoaDon" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
      <div className="p-[20px] w-full">
        <table className="p-[20px] mt-[20px] w-full">
          {/* // id */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.id}
            </td>
          </tr>
          {/* // name */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.customerName}
            </td>
          </tr>
          {/* //Phone */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Phone</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.customerPhoneNumber}
            </td>
          </tr>
          {/* // email */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Email</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.customerEmail}
            </td>
          </tr>
          {/* // Price */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Price</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.totalPrice}
            </td>
          </tr>
          {/* // Address */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Address</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.cutomerAddress}
            </td>
          </tr>
          {/* // san SanPham */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">List Product</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <table className="table table-hover leading-[40px] w-full">
                <thead>
                  <tr className="text-center">
                    <th className="border border-slate-400">ID SP</th>
                    <th className="border border-slate-400">Name</th>
                    <th className="border border-slate-400">IMG</th>
                    <th className="border border-slate-400">Price</th>
                    <th className="border border-slate-400">count</th>
                  </tr>
                </thead>
                {listHoaDon?.productList.map((item, index) => {
                  return (
                    <tbody>
                      {listSPham.map((itemSP, index) => {
                        if (item.id === itemSP.id) {
                          return (
                            <tr className="text-center">
                              <td className="border border-slate-400">
                                {itemSP.id}
                              </td>
                              <td className="border border-slate-400">
                                {itemSP.name}
                              </td>

                              <td className="border border-slate-400">
                                <img src={itemSP.avatar} alt="" />
                              </td>
                              <td className="border border-slate-400">
                                {itemSP.cost}
                              </td>

                              <td className="border border-slate-400">
                                {item.count}
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  );
                })}
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
