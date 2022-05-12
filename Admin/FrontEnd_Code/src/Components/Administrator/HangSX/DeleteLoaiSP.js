import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDanhMucByID, getDanhMucByID } from "../../../Features/MenuSlice";

export default function DeleteLoaiSP() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    //getDanhMuc();
    dispatch(getDanhMucByID(params.idLoai));
  }, []);
  const DetailLoaiSP = useSelector((state) => state.listDanhMuc);
  const deleteLoaiSP = DetailLoaiSP.detaildele;
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
       dispatch(deleteDanhMucByID(params.idLoai))
       alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyHangSX`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Delete Hãng Sản Xuất
        </h2>
        <Link to="/Admin/QuanLyHangSX" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">ID Hãng</label>
          <input
            type="text"
            name="id"
            placeholder={deleteLoaiSP?.id}
            value={deleteLoaiSP?.id}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <label htmlFor="">Tên Hãng</label>
          <input
            type="text"
            name="name"
            placeholder={deleteLoaiSP?.id}
            value={deleteLoaiSP?.name}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
