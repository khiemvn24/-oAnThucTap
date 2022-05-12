import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CreateProduct } from "../../../Features/ProductSlice";



export default function AddProduct() {

  const initState = {
    ID_Product : "",
    productName: "",
    price: "",
    details: "",
    Image_Pro : "",
    Status: "",
    ID_Category: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [data, setData] = useState(initState);
  const {
    ID_Product,
    productName,
    price,
    details,
    Image_Pro,
    Status,
    ID_Category,
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
      if (data.ID_Product === "" || data.productName === "" || data.price === "" ||data.details === "" 
      || data.Image_Pro === "" || data.Status === "" || data.ID_Category === "" ) {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        dispatch(CreateProduct({data}))
        setData({
          ID_Product : "",
          productName: "",
          price: "",
          details: "",
          Image_Pro : "",
          Status: "",
          ID_Category: "",
        });
        alert("Thêm mới thành công");
        navigate(
          `/Admin/QuanLyProduct`
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
          THÊM SẢN PHẨM MỚI
        </h2>
        <Link to="/Admin/QuanLyProduct" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID Product</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ID_Product"
                value={ID_Product}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên sản phẩm</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="productName"
                value={productName}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Giá</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="price"
                value={price}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Chí tiết</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="details"
                value={details}
            
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
                name="Image_Pro"
                value={Image_Pro}
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
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã danh mục</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ID_Category"
                value={ID_Category}
              
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

