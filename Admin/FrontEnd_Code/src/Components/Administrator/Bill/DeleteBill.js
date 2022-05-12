import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteBill, getChiTietBill } from '../../../Features/BillSlice';

export default function DeleteBill() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Bill, setBill] = useState();
  const [data, setData] = useState({});
  const getBill = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/bill/${params.ID_Bill}`
      );
      setBill(res.data);
      const initState = {
        ID_Bill:res.data[0]?.ID_Bill,
        ReceiverName: res.data[0]?.ReceiverName,
        ReceiverAddress: res.data[0]?.ReceiverAddress,
        ReceiverEmail:res.data[0]?.ReceiverEmail,
        ReceiverPhone:res.data[0]?.ReceiverPhone,
        PayType: res.data[0]?.PayType,
        Status: res.data[0]?.Status,
        // CreatedDate:res.data[0]?.CreatedDate,
        ID_Account:res.data[0]?.ID_Account
        }
      setData(initState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBill();
    // console.log(Bill);
  }, []);
  // console.log(Cate);
  const onSubmit = async () => {
    // e.preventDefault();
    
    try {
      dispatch(deleteBill(params.ID_Bill))
      
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyBill`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          XÓA HÓA ĐƠN
        </h2>
        <Link to="/Admin/QuanLyBill" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Delete
          </button>
        <form className="flex flex-row justify-between items-center p-[50px]">
        <div>
          <label htmlFor="">Mã :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.ID_Bill}</label>
          </div>
          <div>
          <label htmlFor="">Số điện thoại :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.ReceiverPhone}</label>
          </div>
          <div>
          <label htmlFor="">Thanh toán :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.PayType}</label>
          </div>
          <div>
          <label htmlFor="">Tên :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.ReceiverName}</label>
          </div>
          <div>
          <label htmlFor="">Email :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.ReceiverEmail}</label>
          </div>
          <div>
          <label htmlFor="">Địa chỉ :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.ReceiverAddress}</label>
          </div>
          {/* <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Delete
          </button> */}
        </form>
      </div>
    </div>
  );
}
