import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const [Product, setProduct] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/product/${params.ID_Product}`
      );
      setProduct(res.data);
      const initState = {
        ID_Product:res.data[0]?.ID_Product,
        productName: res.data[0]?.productName,
        price: res.data[0]?.price,
        details:res.data[0]?.details,
        Image_Pro:res.data[0]?.Image_Pro,
        Status: res.data[0]?.Status,
        ID_Category:res.data[0]?.ID_Category,
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  
  const {productName, price, details, Image_Pro, Status, ID_Category } = data;

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
        data.productName === "" ||
        data.price === "" ||
        data.Image_Pro === "" ||
        data.details === "" ||
        data.ID_Category === "" ||
        data.Status === "" 
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `http://localhost:5000/vnkfood/api/put/product/${params.ID_Product}`,
          data
        );
        setProduct(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyProduct`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          CẬP NHẬT SẢN PHẨM
        </h2>
        <Link to="/Admin/QuanLyProduct" className="">
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
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Product}</label>
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="productName"
                placeholder={Product?.productName}
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
                placeholder={Product?.price}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Chi tiết sản phẩm</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="details"
                value={details}
                placeholder={Product?.details}
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
                placeholder={Product?.Image_Pro}
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
                placeholder={Product?.Status}
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
                placeholder={Product?.ID_Category}
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
