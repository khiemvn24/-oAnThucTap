import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateBill() {
  const [Bill, setBill] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const getBill = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/bill/${params.ID_Bill}`
      );
      setBill(res.data);
      const initState = {
        ID_Bill:res.data[0]?.ID_Bill,
        ReceiverName: res.data[0]?.ReceiverName,
        ReceiverAddress: res.data[0]?.ReceiverAddress,
        ReceiverEmail:res.data[0]?.ReceiverEmail,
        ReceiverPhone:res.data[0]?.ReceiverPhone,
        PayType: res.data[0]?.PayType,
        Status: res.data[0]?.Status,
        // CreatedDate:res.data[0]?.CreatedDate,
        ID_Account:res.data[0]?.ID_Account
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBill();
    console.log(Bill);
  }, []);
  
  const { ID_Bill, ReceiverName, ReceiverAddress, ReceiverPhone, ReceiverEmail, 
    PayType, Status, CreatedDate, ID_Account } = data;

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
        data.ReceiverName === "" ||
        data.ReceiverAddress === "" ||
        data.ReceiverPhone === "" ||
        data.PayType === "" 
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `http://localhost:5000/vnkfood/api/put/bill/${params.ID_Bill}`,
          data
        );
        setBill(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyBill`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          CẬP NHẬT HÓA ĐƠN
        </h2>
        <Link to="/Admin/QuanLyBill" className="">
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
              {/* <input
                type="text"
                name="ID_Bill"
                placeholder={Bill?.ID_Bill}
                value={Bill?.ID_Bill}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              /> */}
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Bill}</label>
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Người nhận</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ReceiverName"
                placeholder={Bill?.ReceiverName}
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
                placeholder={Bill?.ReceiverAddress}
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
                placeholder={Bill?.ReceiverEmail}
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
                placeholder={Bill?.ReceiverPhone}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
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
                placeholder={Bill?.PayType}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
              {/* <label>{PayType}</label> */}
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Trạng thái</label>
            </th>
            <td className="w-5/6 border border-slate-300">
            <select
									className='w-[200px] h-full'
									name='Status'
									value={Status}
									onChange={onChangeText}>
                  <option value=''>*** Vui long chon ***</option>
									<option value='Cho xac nhan'>Chờ xác nhận</option>
									<option value='Xac nhan'>Xác nhận</option>
              </select>
            </td>
          </tr>
          
          {/* <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã Người nhận</label>
            </th>
            <td>
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Account}</label>
            </td>
          </tr> */}
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
