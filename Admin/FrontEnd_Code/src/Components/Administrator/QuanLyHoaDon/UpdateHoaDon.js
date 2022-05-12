import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateHoaDon() {
  const [hoaDon, sethoaDon] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const gethoaDon = async () => {
    try {
      const res = await axios.get(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${params.idhoaDon}`
      );
      sethoaDon(res.data);
      const initState = {
        id:res.data.id,
        customerName: "",
        customerPhoneNumber: "",
        cutomerAddress: "",
        date: res.data.billInfo?.date,
        totalPrice: res.data.billInfo?.totalPrice,
        uid: res.data.billInfo?.uid,
        productLists:res.data.billInfo?.productLists
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gethoaDon();
  }, []);
  
  const {customerName, customerPhoneNumber, cutomerAddress } = data;

  const onChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        data.customerName === "" ||
        data.customerPhoneNumber === "" ||
        data.cutomerAddress === ""
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${params.idhoaDon}`,
          data
        );
        sethoaDon(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyHoaDon`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Update Hóa Đơn
        </h2>
        <Link to="/Admin/QuanLyHoaDon" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID Hóa Đơn</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="id"
                placeholder={hoaDon?.id}
                value={hoaDon?.id}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên khách hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="customerName"
                placeholder={hoaDon?.customerName}
                value={customerName}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Số điện thoại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="customerPhoneNumber"
                value={customerPhoneNumber}
                placeholder={hoaDon?.customerPhoneNumber}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Địa chỉ giao hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cutomerAddress"
                value={cutomerAddress}
                placeholder={hoaDon?.cutomerAddress}
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
          Update
        </button>
      </div>
    </div>
  );
}
