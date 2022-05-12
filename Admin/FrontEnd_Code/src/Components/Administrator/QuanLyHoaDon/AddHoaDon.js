import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function AddHoaDon() {
  const params = useParams();
  const initState = {
    id: "",
    customerName: "",
    customerPhoneNumber: "",
    cutomerAddress: "",
    date: "",
    totalPrice:"",
  };
  const [hoaDon, sethoaDon] = useState();
  const navigate = useNavigate();


  const gethoaDon = async () => {
    try {
      const res = await axios.get(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${params.idhoaDon}`
      );
      sethoaDon(res.data);
      console.log(hoaDon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gethoaDon();
  }, []);
  const [data, setData] = useState(initState);
  const {
    id,
    customerName,
    customerPhoneNumber,
    cutomerAddress,
    date,
    totalPrice,
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
      if (data.customerName === "" || data.customerPhoneNumber === "" || data.cutomerAddress === "" ||
      data.date === "" ) {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        const res = await axios.post(
          `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon`,
          data
        );
        sethoaDon(res.data);
        setData({
          id: "",
          customerName: "",
          customerPhoneNumber: "",
          cutomerAddress: "",
          date: "",
          totalPrice:"",
        });
        alert("Thêm mới thành công");
        navigate(
          `/Admin/QuanLyHoaDon`
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
          Thêm Hóa Đơn Mới
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
                value={id}
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
              <label htmlFor="">Tổng tiền</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="totalPrice"
                value={totalPrice}
               placeholder={hoaDon?.totalPrice}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Ngày giao hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="date"
                value={date}
               placeholder={hoaDon?.date}
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
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">List Product</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <table className="table table-hover leading-[40px] w-full">
                <thead>
                  <tr className="text-center">
                    <th className="border border-slate-400">ID SP
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
                    </th>
                    <th className="border border-slate-400">Name
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
                    </th>
                    <th className="border border-slate-400">IMG
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
                    </th>
                    <th className="border border-slate-400">Price
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
                    </th>
                    <th className="border border-slate-400">count
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
                    </th>
                  </tr>
                </thead>
                {hoaDon?.productList.map((item, index) => {
                  return (
                    <tbody>
                      <tr className="text-center">
                        <th className="border border-slate-400">{item.id}</th>
                        <th className="border border-slate-400">{item.name}</th>
                        <th className="border border-slate-400">
                          <img src={item.image} alt="" />
                        </th>
                        <th className="border border-slate-400">
                          {item.price}
                        </th>
                        <th className="border border-slate-400">
                          {item.count}
                        </th>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </td>
          </tr>
          {/* <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="id"
                placeholder={hoaDon?.id}
                value={id}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr> */}
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

