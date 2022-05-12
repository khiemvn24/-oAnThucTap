import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { detailSP } from "../../../Features/SanPhamSlice";
import { SanPhamType } from "../../../TypeState/SanPhamType";

export default function ChiTietSanPham() {
  const params = useParams();
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.listSanPham)
  const sanPham:any = data.detailSP


  useEffect(() => {
   dispatch(detailSP(params.idSanPham))
  }, []);

  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Chi tiết Sản phẩm
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <div className="p-[20px] w-full">

        <table className="px-[20px] mt-[20px] w-full">
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.id}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.name}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Avatar</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.avatar} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">cost</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.cost}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Capacity</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.capacity}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">description</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.description}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              {" "}
              <label htmlFor="">Color</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.color}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              {" "}
              <label htmlFor="">Promotion</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.promotion}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Old Cost</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.oldCost}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Endow</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.endow}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Kích thước</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.kichThuoc}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Độ phân giải</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.doPhangiai}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Công nghệ màn hình</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.congNghemanhinh}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Chất liệu</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.chatLieu}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Thời lượng pin</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.thoiLuongpin}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Thời lượng sạc</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.thoiGiansac}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Loại CPU</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.loaiCpu}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Tính năng nổi bật</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.tinhNangnoibat}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camera sau</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.cameraSau}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camara trước</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.cameraTruoc}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">RAM</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.RAM}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ROM</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.ROM}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">SIM</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.SIM}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Hệ điều hành</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.heDieuHanh}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Anh 1</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.img1} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Anh 2</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.img2} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Anh 3</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.img3} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Anh 4</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.img4} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Anh 5</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.img5} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID Loại</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {sanPham?.LoaiId}
            </td>
          </tr>
        </table>
        </div>
      </div>
    </div>
  );
}
