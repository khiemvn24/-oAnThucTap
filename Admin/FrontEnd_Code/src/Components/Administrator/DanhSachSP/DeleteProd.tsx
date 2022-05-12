import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { deleteSanPham, detailSP } from "../../../Features/SanPhamSlice";
import { SanPhamType } from "../../../TypeState/SanPhamType";

export default function DeleteProd() {
  const params = useParams();
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.listSanPham)
  const sanPham:any = data.detailSP
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailSP(params.idSanPham))
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      dispatch(deleteSanPham(params.idSanPham))
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLySanPham`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Delete Sản phẩm
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <div className="w-full p-[20px]">
          <table className="p-[20px] mt-[20px] w-full">
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.id}
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.name}
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Avatar</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.avatar} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">cost</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.cost}
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Capacity</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.capacity}
            </td>
          </tr>
         <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID Loại</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.LoaiId}
            </td>
          </tr>
        </table>
        </div>
        
        <button
          type="button"
          className="btn btn-outline-info mb-[10px] ml-[20px] "
          onClick={onSubmit}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
