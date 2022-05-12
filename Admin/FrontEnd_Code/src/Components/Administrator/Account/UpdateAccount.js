import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateAccount() {
  const [Account, setAccount] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const getAccount = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/account/${params.ID_Account}`
      );
      console.log(res.data[0],'res');
      setAccount(res.data);
      const initState = {
        ID_Account:res.data[0]?.ID_Account,
        UserName:res.data[0]?.UserName,
        Email:res.data[0]?.Email,
        Password:res.data[0]?.Password,
        FullName: res.data[0]?.FullName,
        Phone: res.data[0]?.Phone,
        Address: res.data[0]?.Address,
        role: res.data[0]?.role,
        // date: res.data.billInfo?.date,
        // totalPrice: res.data.billInfo?.totalPrice,
        // uid: res.data.billInfo?.uid,
        // productLists:res.data.billInfo?.productLists
        }
        console.log(initState,'init');
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccount();
    // console.log(data,'gbhnjmk');
  }, []);
  
  const {FullName, Phone, Address, role } = data;

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
        data.FullName === "" ||
        data.Phone === "" ||
        data.Address === ""||
        data.role === "" 
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        if(data.Phone.length > 0){
          const res = await axios.put(
            `http://localhost:5000/vnkfood/api/put/account/${params.ID_Account}`,
            data
          );
          setAccount(res.data);
          alert("Thay đổi thành công");
          navigate(`/Admin/QuanLyAccount`);
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
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          CẬP NHẬT TÀI KHOẢN
        </h2>
        <Link to="/Admin/QuanLyAccount" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <form onSubmit={onSubmit}>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              {/* <input
                type="text"
                name="id"
                placeholder={Account?.ID_Account}
                value={Account?.ID_Account}
                className="border p-[10px] mr-[20px] outline-none w-full"
                // onChange={onChangeText}
              /> */}
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Account}</label>
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="FullName"
                placeholder={Account?.FullName}
                value={FullName}
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
                name="Phone"
                value={Phone}
                placeholder={Account?.Phone}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
                pattern='[0][0-9]{9}'
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Địa chỉ</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Address"
                value={Address}
                placeholder={Account?.Address}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Phân quyền</label>
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
        </table>
        <button
          type="submit"
          className="btn btn-outline-info text-center m-[10px] align-middle"
          // onClick={onSubmit}
        >
          Update
        </button>
        </form>
        
       
      </div>
    </div>
  );
}
