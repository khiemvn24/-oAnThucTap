import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { getDanhMucByID, updateDanhMucByID } from "../../../Features/MenuSlice";

export default function UpdateLoaiSP() {
  const params = useParams();
  const DetailLoaiSP = useSelector((state) => state.listDanhMuc);
  const editLoaiSP = DetailLoaiSP.detaildele;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhMucByID(params.idLoai));
  }, []);
  const initState = {
    id: "",
    name: "",
  };
  const [data, setData] = useState(initState);
  const { id, name } = data;
  const onChangeText = (e) => {
    setData({
      id: editLoaiSP?.id,
      name: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (data.name === "") {
        alert("Vui lòng nhập tên cần thay đổi");
      } else {
        dispatch(updateDanhMucByID(data));
        setData({
          id: "",
          name: "",
        });
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLyHangSX`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Update Hãng Sản Xuất
        </h2>
        <Link to="/Admin/QuanLyHangSX" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <form className="flex justify-between items-center p-[50px]">
          <label htmlFor="">ID Hãng</label>
          <input
            type="text"
            name="danhMucId"
            placeholder={editLoaiSP?.id}
            value={editLoaiSP?.id}
            disabled
            className="border p-[10px] mr-[20px] outline-none"
          />

          <label htmlFor="">Tên Hãng</label>
          <input
            type="text"
            name="name"
            placeholder={editLoaiSP?.name}
            value={name}
            className="border p-[10px] mr-[20px] outline-none"
            onChange={onChangeText}
          />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
