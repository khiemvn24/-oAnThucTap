/** @format */

import { ImGift } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import ImgProduct from "./ImgProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React from "react";
import SimilarProduct from "./SimilarProduct";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify'

function ProductDetail() {
	const params = useParams();
	useEffect(() => {
		getData();
	}, [params]);
	const [detailProduct, setDetailProduct] = useState();
	const keyLocal = "data";
	if (localStorage.getItem(keyLocal) === null) {
		localStorage.setItem(keyLocal, JSON.stringify([]));
	}
	var dataString = JSON.parse(localStorage.getItem(keyLocal) || "[]");

	const getData = async () => {
		const resDetail = await axios.get(
			`https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham/${params.idSP}`
		);
		setDetailProduct(resDetail.data);
	}
	const storage = () => {
		if (dataString.length === 0) {
			dataString.push(detailProduct);
			localStorage.setItem(keyLocal, JSON.stringify(dataString));
			toast.success('👋 Sản phẩm được thêm vào giỏ hàng!');
		} else {
			let dem = 0;
			for (let i = 0; i < dataString.length; i++) {
				if (dataString[i].id === detailProduct?.id) {
					dem += 1;
				}
			}
			if (dem === 0) {
				dataString.push(detailProduct);
				localStorage.setItem(keyLocal, JSON.stringify(dataString));
				toast.success('👋 Sản phẩm được thêm vào giỏ hàng!');
			}
			else{
				toast.warn('🦄 Sản phẩm đã tồn tại!');
			}
		}
		// dataString.push(detailProduct)
		// localStorage.setItem(keyLocal, JSON.stringify(dataString))
	};
	return (
		<div className="w-full">
			<div className="flex justify-center items-center text-center">
				<div key={detailProduct?.id} className='font-sans 2xl:w-[1300px] relative xl:w-[1200px] 
				lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[350px]'>
					<div className='py-[10px] border-solid ml-2 mt-[65px] 
					flex lg:flex-row flex-col justify-start lg:justify-between lg:items-center items-start w-full'>
						<h3 className='font-bold text-[14px] lg:text-[18px] md:text-[17px] '>
							{detailProduct?.name}
						</h3>
					</div>
					<div className='border-y-[1px] border-gray-200 pb-[30px] shadow-xl'>
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 text-center items-center '>
							<div className='mt-3'>
								<div className='flex justify-center '>
									<ImgProduct/>
								</div>
								<div className='flex justify-center m-[5px] lg:ml-[10px]'>
									<img
										className='mt-5 rounded-[40px] w-[100%] '
										src='https://cdn.cellphones.com.vn/media/wysiwyg/Banner/400-100-product.png'
										alt=''
									/>
								</div>
							</div>
							<div className=' '>
								<div className='lg:w-[90px] lg:h-6 lg:text-[14px] lg:ml-0 w-[80px] h-[25px] ml-5 text-center text-[14px] text-red-600 bg-red-100 border-[1px] border-red-500 rounded-lg '>
									<p className=''>Trả góp 0%</p>
								</div>
								<div className='flex my-4 text-center text-[14px] lg:ml-0 ml-5'>
									<p className='lg:text-[18px] font-bold text-red-500'>
										{detailProduct?.cost}
										<span className='text-[14px]'>₫</span>
									</p>
									<p className='lg:text-[14px] text-gray-400 ml-4 mt-[2px] line-through'>
										{detailProduct?.oldCost}
										<span className='text-[14px]'>₫</span>
									</p>
								</div>
								<div></div>
								<div className='mt-7 border-[1px] rounded-xl ml-3 mr-3 lg:ml-0 lg:mr-0'>
									<div className='flex  text-red-600 bg-red-200 py-[5px] px-3 rounded-t-xl'>
										<div className='mt-1 lg:text-[18px] text-[14px]'>
											<ImGift />
										</div>
										<p className=' lg:text-[18px] text-[14px] font-bold'>
											Khuyến mại
										</p>
									</div>
									<div className='hover:text-red-500 lg:text-[16px] text-[14px] px-3 py-2'>
										<a href='/'>
											Thu cũ lên đời - Trợ giá 1 triệu{' '}
											<span className='text-red-500'>(xem chi tiết)</span>
										</a>
									</div>
								</div>
								<div className='mt-5 '>
									<div>
										<div
											className='text-center bg-red-600 rounded-[50px] lg:py-2 text-white cursor-pointer ml-3 mr-3 lg:ml-0 lg:mr-0 md:p-2 sm:p-2 p-2'
											onClick={storage}>
											<h1 className='font-bold lg:text-[18px] text-[16px] md:text-[17px]'>Thêm vào giỏ hàng</h1>
											<p className='lg:text-[18px] text-[14px]'>(Giao tận nơi hoặc lấy tại cửa hàng)</p>
										</div>
									</div>
									<div>
										<div className='grid grid-cols-2 gap-1 lg:gap-3 text-center text-white mt-3 ml-3 mr-3 lg:ml-0 lg:mr-0'>
											<div className='bg-blue-500 rounded-[50px] py-2 cursor-pointer md:p-2 sm:p-2 p-2'>
												<h1 className='font-bold lg:text-[16px] text-[14px] '>
													TRẢ GÓP 0%
												</h1>
												<p className='lg:text-[15px] text-[14px]'>
													(Xét duyệt qua điện thoại)
												</p>
											</div>
											<div className='bg-blue-500 rounded-[50px] py-2 cursor-pointer ml-1 lg:ml-0 lg:mr-0 md:p-2 sm:p-2 p-2' >
												<h1 className='font-bold lg:text-[16px] text-[14px] '>
													TRẢ GÓP QUA THẺ
												</h1>
												<p className='lg:text-[15px] text-[14px]'>
													(Visa, Master Card, JCB))
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='mt-3 border-[1px] rounded-xl border-gray-300 ml-3 mr-3 lg:ml-0 lg:mr-0'>
									<div className='bg-gray-300 px-2 py-1 font-bold text-gray-700 rounded-t-xl '>
										<p className='lg:text-[16px] text-[14px]'>ƯU ĐÃI THÊM</p>
									</div>
									<div className='my-3 mx-2'>
										<div className='flex'>
											<BsCheckCircle className='text-green-600 mt-1 lg:text-[17px] text-[20px] ' />
											<p className='lg:text-[14px] text-[14px] ml-2'>
												Giảm thêm tới 1% cho thành viên Smember (áp dụng
												tùy sản phẩm)
											</p>
										</div>
										<div className='flex'>
											<BsCheckCircle className='text-green-600 mt-1 lg:text-[17px] text-[20px]' />
											<p className='lg:text-[14px] text-[14px] ml-2'>
												Mở thẻ tín dụng Shinhanbank, nhận voucher đến
												2.000.000đ
											</p>
										</div>
										<div className='flex'>
											<BsCheckCircle className='text-green-600 mt-1 lg:text-[17px] text-[20px]' />
											<p className='lg:text-[14px] text-[14px] ml-2'>
												Giảm thêm 5% (tối đa 500k) khi thanh toán qua ví
												Moca trên ứng dụng Grab
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='rounded-xl border-[1px] h-fit'>
								<p className='font-bold py-1 px-1 text-gray-600 lg:text-[18px] text-[14px]'>
									Thông số kỹ thuật
								</p>
								<div className='lg:text-[16px] text-[14px] m-3 border-[1px] border-gray-300 rounded-xl'>
									<div className='grid grid-cols-3 py-2 px-2 bg-gray-200 rounded-t-xl'>
										<div>
											Kích thước
											<br /> màn hình
										</div>
										<div className='col-span-2 '>
											{detailProduct?.kichThuoc}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 '>
										<div>
											Công nghệ
											<br /> màn hình
										</div>
										<div className='col-span-2 '>
											{detailProduct?.congNghemanhinh}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 bg-gray-200'>
										<div>Camera sau</div>
										<div className='col-span-2 '>
											{detailProduct?.cameraSau}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 '>
										<div>Camera trước</div>
										<div className='col-span-2 '>
											{' '}
											{detailProduct?.cameraTruoc}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 bg-gray-200'>
										<div>Chipset</div>
										<div className='col-span-2 '>
											{detailProduct?.loaiCpu}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 '>
										<div>Dung lượng RAM</div>
										<div className='col-span-2 '>{detailProduct?.RAM}</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 bg-gray-200'>
										<div>Bộ nhớ trong</div>
										<div className='col-span-2 '>{detailProduct?.ROM}</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 '>
										<div>Pin</div>
										<div className='col-span-2 '>
											{detailProduct?.thoiLuongpin}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 bg-gray-200'>
										<div>Thẻ SIM</div>
										<div className='col-span-2 '>{detailProduct?.SIM}</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 '>
										<div>Hệ điều hành</div>
										<div className='col-span-2 '>
											{detailProduct?.heDieuHanh}
										</div>
									</div>
									<div className='grid grid-cols-3 py-2 px-2 bg-gray-200 rounded-xl'>
										<div>
											Độ phân giải
											<br />
											màn hình
										</div>
										<div className='col-span-2 '>
											{detailProduct?.cameraSau}
										</div>
									</div>
								</div>
								{/* <div className='flex justify-center py-2 border-[1px] border-gray-400 m-3 rounded-lg hover:border-red-500 hover:text-red-600 hover:bg-red-100 cursor-pointer'>
							<p>Xem cấu hình chi tiết </p>
							<MdKeyboardArrowDown className='ml-2 mt-1 font-bold' />
						</div> */}
							</div>
						</div>
					</div>
					<div className='w-full flex flex-col justify-center items-center mt-5'>
						<h1 className=' font-bold text-[20px] m-3'>SẢN PHẨM TƯƠNG TỰ</h1>
						<div className="flex flex-row justify-center items-center flex-wrap w-full">
							<SimilarProduct id={detailProduct?.LoaiId} />
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProductDetail;
