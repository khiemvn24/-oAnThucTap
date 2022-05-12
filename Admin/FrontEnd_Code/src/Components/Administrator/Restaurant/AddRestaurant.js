import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CreateRestaurant } from "../../../Features/RestaurantSlice";



export default function AddRestaurant() {

  const initState = {
    ID_Restaurant: "",
    RestaurantName: "",
    Address: "",
    Phone: "",
    averageReview: "",
    numberOfReview: "",
    farAway: "",
    discount: "",
    deliveryTime: "",
    collectTime: "",
    footType: "",
    Image_Res: "",
    Status: "",
    ID_Promotion: "",
    ID_Category: ""
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [data, setData] = useState(initState);
  const {
    RestaurantName,
    Address,
    Phone,
    averageReview,
    numberOfReview,
    farAway,
    discount,
    deliveryTime,
    collectTime,
    footType,
    Image_Res,
    Status,
    ID_Promotion,
    ID_Category
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
      if (data.RestaurantName === "" || data.Address === "" ||data.Phone === "" ||
          data.averageReview === "" || data.numberOfReview === "" ||data.farAway === "" ||
          data.discount === "" || data.deliveryTime === "" ||data.collectTime === "" ||
          data.footType === "" || data.Image_Res === ""
          || data.Status === "" || data.ID_Promotion || data.ID_Category === "" ) {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        dispatch(CreateRestaurant({data}))
        setData({
          ID_Restaurant: "",
          RestaurantName: "",
          Address: "",
          Phone: "",
          averageReview: "",
          numberOfReview: "",
          farAway: "",
          discount: "",
          deliveryTime: "",
          collectTime: "",
          footType: "",
          Image_Res: "",
          Status: "",
          ID_Promotion: "",
          ID_Category: ""
        });
        alert("Thêm mới thành công");
        navigate(
          `/Admin/QuanLyRestaurant`
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
          THÊM CỬA HÀNG MỚI
        </h2>
        <Link to="/Admin/QuanLyRestaurant" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          {/* <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID Restaurant</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ID_Restaurant"
                value={ID_Restaurant}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr> */}
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên cửa hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="RestaurantName"
                value={RestaurantName}
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
                name="Address"
                value={Address}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">SỐ điện thoại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Phone"
                value={Phone}
            
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Đánh giá</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="averageReview"
                value={averageReview}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Số đánh giá</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="numberOfReview"
                value={numberOfReview}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">farAway</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="farAway"
                value={farAway}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">discount</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="discount"
                value={discount}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">deliveryTime</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="deliveryTime"
                value={deliveryTime}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">collectTime</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="collectTime"
                value={collectTime}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">footType</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="footType"
                value={footType}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Image_Res</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="Image_Res"
                value={Image_Res}
              
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
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
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mã giảm giá</label>
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

