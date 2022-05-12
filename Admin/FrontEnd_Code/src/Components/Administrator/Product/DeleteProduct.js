import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, getChiTietProduct } from '../../../Features/ProductSlice';

export default function DeleteProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Product, setProduct] = useState();
  const [data, setData] = useState({});
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/vnkfood/api/get/Product/${params.ID_Product}`
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
    getProduct()
    // console.log('Product :',Product);
  }, []);

  const onSubmit = async () => {
    
    try {
      dispatch(deleteProduct(params.ID_Product))
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyProduct`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
         XÓA SẢN PHẨM
        </h2>
        <Link to="/Admin/QuanLyProduct" className="">
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
            <label className=" p-[10px] mr-[20px] outline-none">{data.ID_Product}</label>
          </div>
          <div>
          <label htmlFor="">Tên :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.productName}</label>
          </div>
          <div>
            <label htmlFor="">Gía :</label>
            <label className=" p-[10px] mr-[20px] outline-none">{data.price}</label>
          </div>
          <div>
            <label htmlFor="">Mô tả :</label>
            <label className=" p-[10px] mr-[20px] outline-none">{data.details}</label>
          </div>
          <div>
          <label htmlFor="">Mã danh mục :</label>
          <label className=" p-[10px] mr-[20px] outline-none">{data.ID_Category}</label>
          </div>
          
        </form>
      </div>
    </div>
  );
}
