import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateRestaurant() {
  const [Restaurant, setRestaurant] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const getRestaurant = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/Restaurant/${params.ID_Restaurant}`
      );
      setRestaurant(res.data);
      const initState = {
        ID_Restaurant:res.data[0]?.ID_Restaurant,
        RestaurantName: res.data[0]?.RestaurantName,
        Address: res.data[0]?.Address,
        Phone:res.data[0]?.Phone,
        averageReview:res.data[0]?.averageReview,
        numberOfReview: res.data[0]?.numberOfReview,
        farAway:res.data[0]?.farAway,
        discount: res.data[0]?.discount,
        deliveryTime:res.data[0]?.deliveryTime,
        collectTime:res.data[0]?.collectTime,
        footType: res.data[0]?.footType,
        Image_Res:res.data[0]?.Image_Res,
        Status:res.data[0]?.Status,
        ID_Promotion:res.data[0]?.ID_Promotion,
        ID_Category: res.data[0]?.ID_Category,
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurant();
    // console.log(data,'fghj');
  }, []);
  
  const {ID_Restaurant,
    RestaurantName,  Address, Phone,  averageReview, numberOfReview, farAway, discount,
    deliveryTime,  collectTime,footType,  Image_Res, Status, ID_Promotion,ID_Category,} = data;

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
        data.RestaurantName === "" ||
        data.Address === "" ||
        data.Phone === "" ||
        data.ID_Promotion === "" ||
        data.ID_Category === "" 
      ) {
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `http://localhost:5000/vnkfood/api/put/restaurant/${params.ID_Restaurant}`,
          data
        );
        setRestaurant(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyRestaurant`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          CẬP NHẬT CỬA HÀNG
        </h2>
        <Link to="/Admin/QuanLyRestaurant" className="">
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
              <label className="border p-[10px] mr-[20px] outline-none w-full">{params.ID_Restaurant}</label>
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="RestaurantName"
                placeholder={Restaurant?.RestaurantName}
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
                placeholder={Restaurant?.Address}
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
                name="Phone"
                value={Phone}
                placeholder={Restaurant?.Phone}
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
                placeholder={Restaurant?.averageReview}
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
                placeholder={Restaurant?.numberOfReview}
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
                placeholder={Restaurant?.farAway}
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
                placeholder={Restaurant?.discount}
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
                placeholder={Restaurant?.deliveryTime}
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
                placeholder={Restaurant?.collectTime}
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
                placeholder={Restaurant?.footType}
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
                name="Image_Res"
                value={Image_Res}
                placeholder={Restaurant?.Image_Res}
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
                placeholder={Restaurant?.Status}
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
                placeholder={Restaurant?.ID_Promotion}
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
                placeholder={Restaurant?.ID_Category}
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
