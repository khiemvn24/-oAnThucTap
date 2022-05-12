import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    useRecoilValue,
    useSetRecoilState
} from 'recoil';
import axios from 'axios';
import { billInfoState, cartProductState, totalPriceState } from '../../Recoil/Recoil';

function Payment() {

    const totalPrice = useRecoilValue(totalPriceState);
    const billInfo = useRecoilValue(billInfoState);
    const setCartProductList = useSetRecoilState(cartProductState);
    useEffect(() => {
        console.log(billInfo)
    }, [])

    const postBill = () => {
        axios.post('https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon', { 
            subId: billInfo.id,
            customerName: billInfo.customerName,
            customerPhoneNumber: billInfo.customerPhoneNumber,
            customerEmail: billInfo.customerEmail,
            cutomerAddress: billInfo.cutomerAddress,
            date: billInfo.date,
            totalPrice: billInfo.totalPrice,
            uid: billInfo.uid,
            productList: billInfo.productLists,
         })
            .then(res => {
                console.log(res);
            })
        localStorage.removeItem('data');

        setCartProductList([]);

    }
    const formatPrice = (price) => {
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
	}

    return (
        <div className="sm:w-5/6 md:w-7/12 lg:w-1/2 xl:w-5/12 mx-auto mt-16">
            <div className="text-center">
                <h3 className="text-lg font-bold text-red-600">Thanh toán</h3>
            </div>
            <div>
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
            </div>
            <div className="px-2 border border-solid shadow-lg rounded-xl">
                <div className="mx-1 my-3 px-3 pb-5 text-lg grid grid-flow-row grid-cols-1 gap-y-3 border border-solid shadow-lg rounded-xl">
                    <h2 className="text-center font-bold">THÔNG TIN ĐẶT HÀNG</h2>
                    <p>Mã Đơn Hàng: <b>{billInfo.id}</b></p>
                    <p>Người Nhận: <b>{billInfo.customerName}</b></p>
                    <p>Số Điện Thoại: <b>{billInfo.customerPhoneNumber}</b></p>
                    <p>Email: <b>{billInfo.customerEmail}</b></p>
                    <p>Nhận Sản Phẩm Tại: <b>{billInfo.cutomerAddress}</b></p>
                    <p>Tổng Tiền: <b>{formatPrice(totalPrice)}</b></p>
                </div>
                <div className="mb-3">
                    <h3 className="text-lg font-semibold pl-2 m-3">Chọn hình thức thanh toán</h3>
                    <div className="grid grid-flow-col grid-cols-2 gap-x-3">
                        <div className="border border-solid shadow-lg rounded-xl text-center py-3 cursor-pointer">
                            <p className="text-sm font-semibold">Thanh toán tại cửa hàng</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
                        <div className="border border-solid shadow-lg rounded-xl text-center py-3 cursor-pointer">
                            <p className="text-sm font-semibold">Thanh toán khi nhận hàng</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-solid rounded-xl p-2 mt-3 shadow-lg">
                <div className="grid grid-flow-row grid-cols-2 pb-2">
                    <p className="text-md font-bold">Tổng tiền tạm tính:</p>
                    <p className="text-md text-red-600 font-semibold text-right">{formatPrice(totalPrice)}</p>
                </div>
                <Link to="/completePayment">
                    <div onClick={postBill} className="text-center bg-red-600 text-white font-bold py-4 rounded-md mb-2 cursor-pointer">
                        <p>TIẾP TỤC</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Payment;