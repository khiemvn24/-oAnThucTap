import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { billInfoState, cartProductState, totalPriceState, userInfoState } from '../../Recoil/Recoil';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form";


export default function PayInfor() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const userInfo = useRecoilValue(userInfoState);
    const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
    const billInfo = useSetRecoilState(billInfoState);
    const listProduct = useRecoilValue(cartProductState    );
    const nav = useNavigate();

    const onSubmit= data => {
        const uid = userInfo ? userInfo.uid : "null";
        const d = new Date();
        const productList= [];
        listProduct.map(value => {
            const product= {
                id: value.id,
                count: value.count
            }
            productList.push(product);
        })
        const bill = {
            id: d.getDate() + "" + (d.getMonth() + 1) + d.getFullYear() + d.getHours() + d.getMinutes() + d.getSeconds(),
            productLists: productList,
            customerName: data.name,
            customerPhoneNumber: data.phoneNumber,
            customerEmail: data.email,
            cutomerAddress: data.detailAddress + "" + data.commune + " " +  data.district + " " + data.city,
            uid: uid,
            date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
            totalPrice: totalPrice
        }
        billInfo(bill);
        nav('/payment')
    }

    const formatPrice = (price) => {
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
	}
  return (
    <div className="sm:5/6 md:w-7/12 lg:w-1/2 xl:w-5/12 mx-auto mt-16">
    <div className="grid grid-flow-row grid-cols-2 place-content-center">
        <Link to="/cart">
            <div onClick={() => setTotalPrice(0)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-semibold text-red-600 cursor-pointer hover:underline">Trở về</span>
            </div>
        </Link>
        <h3 className="text-lg font-bold text-red-600">Thông tin đặt hàng</h3>
    </div>
    <div className="grid grid-flow-row grid-cols-4 bg-[#f6f6f6] px-4 py-4 text-red-600 text-center">
        <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            </div>
            <p className="text-sm">Chọn sản phẩm</p>
        </div>
        <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            </div>
            <p className="text-sm">Thông tin đặt hàng</p>
        </div>
        <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-sm">Thanh toán</p>
        </div>
        <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-sm">Hoàn tất đặt hàng</p>
        </div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-2 border border-solid shadow-lg rounded-xl">
            <div className="pt-2">
                <h3 className="text-md font-bold mb-2">Thông tin khách hàng</h3>
                <div className="grid grid-flow-row grid-cols-1 gap-y-2">
                    <input {...register("name", { required: true })} type="text" placeholder="Họ và tên (bắt buộc)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    {errors.name && <span className='text-red-600 text-xs'>This field is not valid</span>}
                    <input {...register("phoneNumber", { required: true, pattern: /(\+84|0)\d{9,10}/i })} placeholder="Số điện thoại (bắt buộc)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    {errors.phoneNumber && <span className='text-red-600 text-xs'>This field is not valid</span>}
                    <input {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i })} placeholder="Email (Vui long nhập email để nhận hóa đơn)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    {errors.email && <span className='text-red-600 text-xs'>This field is not valid</span>}
                </div>
            </div>
            <div className="pt-2">
                <h3 className="text-md font-bold mb-2">Địa chỉ nhận hàng</h3>
                <div className="grid grid-flow-row grid-cols-2 gap-x-2 gap-y-2 p-3 bg-[#f0ebeb] rounded-lg">
                    <input {...register("city", { required: true })} placeholder="Thành phố" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    <input {...register("district", { required: true })} placeholder="Quận/Huyện" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    {errors.city && <span className='text-red-600 text-xs'>This field is not valid</span>}
                    {errors.district && <span className='text-red-600 text-xs'>This field is not valid</span>}
                    <input {...register("commune", { required: true })} placeholder="Xã/Phường" className="border border-gray-400 py-1 pl-2 rounded-lg col-start-1 col-span-2" />
                    {errors.commune && <span className='text-red-600 text-xs'>This field is not valid</span>}
                    <input {...register("detailAddress", { required: true })} placeholder="Địa chỉ chi tiết" className="border border-gray-400 py-1 pl-2 rounded-lg col-start-1 col-span-2" />
                    {errors.detailAddress && <span className='text-red-600 text-xs'>This field is not valid</span>}
                </div>
                <div className="my-3">
                    <input placeholder="Yêu cầu khác" className="w-full border border-gray-400 py-1 pl-2 rounded-lg" />
                </div>
            </div>
        </div>
        <div className="border border-solid rounded-xl p-2 mt-3 shadow-lg">
            <div className="grid grid-flow-row grid-cols-2 pb-2">
                <p className="text-md font-bold">Tổng tiền tạm tính:</p>

                <p className="text-md text-red-600 font-semibold text-right">{formatPrice(totalPrice)}</p>

            </div>
            {/* <Link to="/payment"> */}
                <button type='submit' className="text-center bg-red-600 text-white font-bold py-4 rounded-md mb-2 cursor-pointer w-full">
                    <p>Tiếp tục</p>
                </button>
            {/* </Link> */}
            <Link to="/">
                <div className="border border-solid border-red-600 py-4 text-center text-red-600 font-bold rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-all">
                    <p>CHỌN THÊM SẢN PHẨM KHÁC</p>
                </div>
            </Link>
        </div>
    </form>
</div>
  )
}
