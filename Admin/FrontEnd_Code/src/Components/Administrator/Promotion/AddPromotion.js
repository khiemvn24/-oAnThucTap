import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CreatePromotion } from "../../../Features/PromotionSlice";



export default function AddPromotion() {

  const initState = {
    ID_Promotion : "",
    Content: "",
    createDate: "",
    modifyDate: "",
    Status: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [data, setData] = useState(initState);
  const {
    ID_Promotion,
    Content,
    createDate,
    modifyDate,
    Status,
  } = data;
  const onChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.ID_Promotion === "" || data.createDate === "" || data.modifyDate === "" ||
      data.Content === "" ) {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        dispatch(CreatePromotion({data}))
        setData({
          ID_Promotion : "",
          Content: "",
          createDate: "",
          modifyDate: "",
          Status: "",
        });
        alert("Thêm mới thành công");
        navigate(
          `/Admin/QuanLyPromotion`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          THÊM KHUYẾN MẠI MỚI
        </h2>
        <Link to="/Admin/QuanLyPromotion" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ID_Promotion"
                value={ID_Promotion}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Nội dung</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Content"
          
                value={Content}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Ngày tạo</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="createDate"
                value={createDate}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Ngày kết thúc</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="modifyDate"
                value={modifyDate}
            
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Trạng thái</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Status"
                value={Status}
            
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          
        </table>
        <button
          type="button"
          className="btn btn-outline-info text-center m-[10px] align-middle"
          onClick={onSubmit}
        >
          Thêm
        </button>
      </div>
    </div>
  );
}

