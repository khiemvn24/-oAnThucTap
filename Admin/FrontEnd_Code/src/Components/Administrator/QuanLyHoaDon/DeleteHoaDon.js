import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteHoaDon() {
  const params = useParams();
  const [hoaDon, sethoaDon] = useState();
  const navigate = useNavigate();
  const gethoaDon = async ()=>{
    try{
      const res= await axios.get(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${params.idhoaDon}`
      );
      sethoaDon(res.data);
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    gethoaDon();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${hoaDon?.id}`
      );
      sethoaDon(res.data);
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyHoaDon`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Delete Hóa Đơn
        </h2>
        <Link to="/Admin/QuanLyHoaDon" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">Mã ID</label>
          <input
            type="text"
            name="id"
            placeholder={hoaDon?.id}
            value={hoaDon?.id}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <label htmlFor="">Tên hóa đơn</label>
          <input
            type="text"
            name="name"
            placeholder={hoaDon?.customerName}
            value={hoaDon?.customerName}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
