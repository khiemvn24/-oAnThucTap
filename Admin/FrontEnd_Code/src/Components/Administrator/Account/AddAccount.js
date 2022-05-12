import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CreateAccount } from "../../../Features/AcountSlice";



export default function AddAcount() {

  const initState = {
    ID_Account : "",
    UserName: "",
    FullName: "",
    Email: "",
    Password: "",
    Phone:"",
    Address:"",
    Status:"",
    role:"",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [data, setData] = useState(initState);
  const {
    ID_Account,
    UserName,
    FullName,
    Email,
    Password,
    Phone,
    Address,
    role,
    Status
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
      if (data.UserName === "" || data.Email === "" || data.Password === "" ||
      data.date === "" ) {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
          dispatch(CreateAccount({data}))
          setData({
            ID_Account: "",
            UserName: "",
            FullName: "",
            Email: "",
            Password: "",
            Phone: "",
            Address: "",
            role:"",
            Status: "",
          });
          alert("Thêm mới thành công");
          navigate(
            `/Admin/QuanLyAccount`
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
          THÊM TÀI KHOẢN MỚI
        </h2>
        <Link to="/Admin/QuanLyAccount" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <form onSubmit={onSubmit}>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          {/* <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID Account</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name=" ID_Account"
              
                value={ID_Account}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr> */}
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên khách hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="UserName"
          
                value={UserName}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Họ và tên</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="FullName"
                value={FullName}
              
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
                name="Email"
                value={Email}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Password</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Password"
                value={Password}
                placeholder="Mật khẩu bao gồm 6 ký tự"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
                required
                pattern="[0-9a-zA-Z]{6}"
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Phone</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Phone"
                value={Phone}
                placeholder='Số điện thoại bao gồm 10 ký tự'
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
                pattern='[0][0-9]{9}'
              />
            </td>
          </tr>

          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Address</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Address"
                value={Address}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Role</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <select
									className='w-[200px] h-full'
									name='role'
									value={role}
									onChange={onChangeText}>
									<option value=''>*** Vui long chon ***</option>
									<option value='Khach Hang'>Khách Hàng</option>
									<option value='Chu Cua Hang'>Chủ Cửa Hàng</option>
									<option value='Admin'>Admin</option>
              </select>
            </td>
          </tr>

          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Status</label>
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
          type="submit"
          className="btn btn-outline-info text-center m-[10px] align-middle"
          
        >
          Thêm
        </button>
        </form>
      </div>
    </div>
  );
}

