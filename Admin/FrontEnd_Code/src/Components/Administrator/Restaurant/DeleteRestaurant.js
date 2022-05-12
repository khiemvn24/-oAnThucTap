import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRestaurant } from '../../../Features/RestaurantSlice';

export default function DeleteRestaurant() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Restaurant, setRestaurant] = useState();
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
    getRestaurant()
    // console.log('Restaurantt :',Restaurantt);
  }, []);

  const onSubmit = async () => {
    
    try {
      dispatch(deleteRestaurant(params.ID_Restaurant))
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyRestaurant`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          XÓA CỬA HÀNG
        </h2>
        <Link to="/Admin/QuanLyRestaurant" className="">
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
            <label htmlFor="">Mã ID :</label>
            <label className=" p-[10px] mr-[20px] outline-none">{data.ID_Restaurant}</label>
          </div>
          <div>
          <label htmlFor="">Tên :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.RestaurantName}</label>
          </div>
          <div>
            <label htmlFor="">Địa chỉ :</label>
            <label className=" p-[10px] mr-[20px] outline-none">{data.Address}</label>
          </div>
          <div>
            <label htmlFor="">Số điện thoại :</label>
            <label className=" p-[10px] mr-[20px] outline-none">{data.Phone}</label>
          </div>
          <div>
          <label htmlFor="">Loại :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.footType}</label>
          </div>
        </form>
      </div>
    </div>
  );
}
