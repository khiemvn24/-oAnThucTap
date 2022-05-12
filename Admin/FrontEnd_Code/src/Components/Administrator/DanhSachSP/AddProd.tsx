/** @format */

import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { AddNewSP, detailSP } from "../../../Features/SanPhamSlice";
import { DanhMucType } from "../../../TypeState/DanhMucType";
import { SanPhamType } from "../../../TypeState/SanPhamType";

const initState = {
  id: "",
  name: "",
  avatar: "",
  cost: "",
  capacity: "",
  description: "",
  color: "",
  promotion: "",
  oldCost: "",
  endow: "",
  kichThuoc: "",
  doPhangiai: "",
  congNghemanhinh: "",
  chatLieu: "",
  thoiLuongpin: "",
  thoiGiansac: "",
  loaiCpu: "",
  tinhNangnoibat: "",
  cameraSau: "",
  cameraTruoc: "",
  RAM: "",
  ROM: "",
  SIM: "",
  heDieuHanh: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  img5: "",
  LoaiId: "",
};

export default function AddProd() {
  const [ListLoai, setLoai] = useState<DanhMucType[]>([]);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch()
  const dataSP = useAppSelector(state => state.listSanPham)
  const sanPham:any = dataSP.detailSP

  const getLoai = async () => {
    try {
      const res = await axios.get(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai`
      );
      setLoai(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(detailSP(params.idSanPham))
    getLoai();
  }, []);

  const [data, setData] = useState(initState);
  const {
    id,
    name,
    avatar,
    cost,
    capacity,
    description,
    color,
    promotion,
    oldCost,
    endow,
    kichThuoc,
    doPhangiai,
    congNghemanhinh,
    chatLieu,
    thoiLuongpin,
    thoiGiansac,
    loaiCpu,
    tinhNangnoibat,
    cameraSau,
    cameraTruoc,
    RAM,
    ROM,
    SIM,
    heDieuHanh,
    img1,
    img2,
    img3,
    img4,
    img5,
    LoaiId,
  } = data;
  const onChangeText = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (data.name === "" || data.avatar === "" || data.cost === "" || data.capacity === "" || data.description === "" || data.color === "" || data.promotion === ""
      || data.oldCost === "" || data.endow === "" || data.kichThuoc === "" || data.doPhangiai === "" || data.congNghemanhinh === "" || data.chatLieu === "" ||
data.thoiLuongpin === "" || data.thoiGiansac === "" || data.loaiCpu === "" || data.tinhNangnoibat === "" || data.cameraSau === "" 
|| data.cameraTruoc === "" || data.RAM === "" || data.ROM === "" ||  data.SIM === "" ||  data.heDieuHanh === "" || data.img1 === "" ||
data.img2 === "" || data.img3 === "" || data.img4 === "" || data.img5 === "" || data.LoaiId === "" 
      ) 
      {
        alert("Vui lòng nhập đủ thông tin")
      }

       else {
        dispatch(AddNewSP({data}))
        alert("Thêm mới thành công");
        navigate(`/Admin/QuanLySanPham`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Add Sản Phẩm Mới
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
		<div className="w-full p-[20px]">
			<table className="p-[20px] mt-[20px] w-full">
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="name"
                placeholder={sanPham?.name}
                value={name}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Avatar</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="avatar"
                placeholder={sanPham?.avatar}
                value={avatar}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">cost</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cost"
                value={cost}
                placeholder={sanPham?.cost}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Capacity</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="capacity"
                value={capacity}
                placeholder={sanPham?.capacity}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">description</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="description"
                value={description}
                placeholder={sanPham?.description}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              {" "}
              <label htmlFor="">Color</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="color"
                value={color}
                placeholder={sanPham?.color}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              {" "}
              <label htmlFor="">Promotion</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="promotion"
                value={promotion}
                placeholder={sanPham?.promotion}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Old Cost</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="oldCost"
                placeholder={sanPham?.oldCost}
                value={oldCost}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Endow</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="endow"
                placeholder={sanPham?.endow}
                value={endow}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Kích thước</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="kichThuoc"
                placeholder={sanPham?.kichThuoc}
                value={kichThuoc}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Độ phân giải</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="doPhangiai"
                placeholder={sanPham?.doPhangiai}
                value={doPhangiai}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Công nghệ màn hình</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="congNghemanhinh"
                placeholder={sanPham?.congNghemanhinh}
                value={congNghemanhinh}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Chất liệu</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="chatLieu"
                placeholder={sanPham?.chatLieu}
                value={chatLieu}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Thời lượng pin</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="thoiLuongpin"
                placeholder={sanPham?.thoiLuongpin}
                value={thoiLuongpin}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Thời lượng sạc</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="thoiGiansac"
                placeholder={sanPham?.thoiGiansac}
                value={thoiGiansac}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Loại CPU</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="loaiCpu"
                placeholder={sanPham?.loaiCpu}
                value={loaiCpu}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Tính năng nổi bật</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="tinhNangnoibat"
                placeholder={sanPham?.tinhNangnoibat}
                value={tinhNangnoibat}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camera sau</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cameraSau"
                placeholder={sanPham?.cameraSau}
                value={cameraSau}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camara trước</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cameraTruoc"
                placeholder={sanPham?.cameraTruoc}
                value={cameraTruoc}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">RAM</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="RAM"
                placeholder={sanPham?.RAM}
                value={RAM}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ROM</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ROM"
                placeholder={sanPham?.ROM}
                value={ROM}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">SIM</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="SIM"
                placeholder={sanPham?.SIM}
                value={SIM}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Hệ điều hành</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="heDieuHanh"
                placeholder={sanPham?.heDieuHanh}
                value={heDieuHanh}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 1</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img1"
                placeholder={sanPham?.img1}
                value={img1}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 2</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img2"
                placeholder={sanPham?.img2}
                value={img2}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 3</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img3"
                placeholder={sanPham?.img3}
                value={img3}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 4</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img4"
                placeholder={sanPham?.img4}
                value={img4}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 5</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img5"
                placeholder={sanPham?.img5}
                value={img5}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID Loại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <select
                name="LoaiId"
                value={LoaiId}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              >
                {ListLoai.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
        </table>
		</div>
        
        <button
          type="button"
          className="btn btn-outline-info text-center m-[10px] align-middle"
          onClick={onSubmit}
        >
          Thêm mới
        </button>
      </div>
    </div>
  );
}
