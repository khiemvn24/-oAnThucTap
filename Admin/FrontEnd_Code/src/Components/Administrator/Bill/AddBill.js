import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CreateBill } from "../../../Features/BillSlice";



export default function AddBill() {

  const initState = {
    ID_Bill: "",
    ReceiverName: "",
    ReceiverAddress: "",
    ReceiverEmail: "",
    ReceiverPhone: "",
    PayType: "",
    Status: "",
    CreatedDate: "",
    ID_Account: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [data, setData] = useState(initState);
  const {
    ID_Bill,
    ReceiverName,
    ReceiverAddress,
    ReceiverEmail,
    ReceiverPhone,
    PayType,
    Status,
    CreatedDate,
    ID_Account,
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
      if (data.ReceiverName === "" || data.ReceiverAddress === "" ||
      data.ReceiverPhone === "" || data.PayType === "" || data.ID_Account === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        if(data.ReceiverPhone.length === 10){
          dispatch(CreateBill({data}))
          setData({
            // ID_Bill: "",
            ReceiverName: "",
            ReceiverAddress: "",
            ReceiverEmail: "",
            ReceiverPhone: "",
            PayType: "",
            Status: "",
            CreatedDate: "",
            ID_Account: "",
          });
          alert("Thêm mới thành công");
          navigate(
            `/Admin/QuanLyBill`
          );
          
        }else{
          alert("Sai định dạng");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          THÊM HÓA ĐƠN MỚI
        </h2>
        <Link to="/Admin/QuanLyBill" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          {/* <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã Bill</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ID_Bill"
                value={ID_Bill}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr> */}
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Người nhận</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ReceiverName"
                value={ReceiverName}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Địa chỉ</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ReceiverAddress"
                value={ReceiverAddress}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Email</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ReceiverEmail"
                value={ReceiverEmail}
            
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Số điện thoại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ReceiverPhone"
                value={ReceiverPhone}
                placeholder='Số điện thoại bao gồm 10 ký tự'
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
                pattern='[0][0-9]{9}'
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Loại thanh toán</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="PayType"
                value={PayType}
              
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
          {/* <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Ngày tạo</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="CreatedDate"
                value={CreatedDate}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr> */}
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã người nhận</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ID_Account"
                value={ID_Account}
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

