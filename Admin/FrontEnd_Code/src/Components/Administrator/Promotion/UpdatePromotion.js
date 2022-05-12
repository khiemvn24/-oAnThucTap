import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdatePromotion() {
  const [Promotion, setPromotion] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const getPromotion = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/promotion/${params.ID_Promotion}`
      );
      setPromotion(res.data);
      const initState = {
        ID_Promotion:res.data[0]?.ID_Promotion,
        Content:res.data[0]?.Content,
        createDate:res.data[0]?.createDate,
        modifyDate:res.data[0]?.modifyDate,
        // Status: res.data[0]?.Status,
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPromotion();
    console.log(Promotion);
  }, []);
  
  const {Content, createDate, modifyDate, Status } = data;

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
        data.Content === "" ||
        data.createDate === "" ||
        data.modifyDate === ""||
        data.Status === ""
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `http://localhost:5000/vnkfood/api/put/promotion/${params.ID_Promotion}`,
          data
        );
        setPromotion(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyPromotion`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          CẬP NHẬT KHUYẾN MẠI
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
              {/* <input
                type="text"
                name="id"
                placeholder={Promotion?.ID_Promotion}
                value={Promotion?.ID_Promotion}
                className="border p-[10px] mr-[20px] outline-none w-full"
                // onChange={onChangeText}
              /> */}
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Promotion}</label>
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
                placeholder={Promotion?.Content}
                value={Content}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Ngày bắt đầu</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="createDate"
                value={createDate}
                placeholder={createDate}
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
                placeholder={modifyDate}
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
