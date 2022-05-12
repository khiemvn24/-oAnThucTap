import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateCategory() {
  const [Category, setCategory] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const getCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/categorys/${params.ID_Category}`
      );
      setCategory(res.data);
      const initState = {
        ID_Category:res.data[0]?.ID_Category,
        categoryName: res.data[0]?.categoryName,
        Image_Cate: res.data[0]?.Image_Cate,
        Status:res.data[0]?.Status,
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  
  const {categoryName, Image_Cate, Status } = data;

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
        data.categoryName === "" ||
        data.Image_Cate === "" ||
        data.Status === ""
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `http://localhost:5000/vnkfood/api/put/category/${params.ID_Category}`,
          data
        );
        setCategory(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyCategory`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          CẬP NHẬT DANH MỤC
        </h2>
        <Link to="/Admin/QuanLyCategory" className="">
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
                name="ID_Category"
                placeholder={Category?.ID_Category}
                value={Category?.ID_Category}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              /> */}
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Category}</label>
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="categoryName"
                value={categoryName}
                placeholder={Category?.categoryName}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Hình ảnh</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Image_Cate"
                value={Image_Cate}
                placeholder={Category?.Image_Cate}
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
                placeholder={Category?.Status}
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
