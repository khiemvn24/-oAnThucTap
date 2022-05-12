/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchOrder() {

    const [listBill, setListBill] = useState([]);
    const [searchBill, setSearchBill] = useState([]);
    const [billId, setBillId] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getListBill();
    }, [])

    const getListBill = async () => {
        await axios.get(`https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon`)
            .then(res => {
                setListBill(res.data);
            })
            .catch(error => {
                console.log(error)
            });
    }
    const setId = (e ) => {
        setBillId(e.target.value);
    }
    const setPhone = (e) => {
        setPhoneNumber(e.target.value);
    }
    const getSearchOrder = () => {
        let flag = false;
        listBill?.map(bill => {
            if (billId === bill.subId && phoneNumber === bill.customerPhoneNumber) {
                setSearchBill(bill);
                setShow(true);
                flag = true;
            }
        })
        if (!flag) {
            setShow(false);
            alert('Không tìm thấy đơn hàng');
        }
    }
    const formatPrice = (price) => {
        if (price)
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
    }

    return (
        <div className="
            2xl:w-[1180px] 2xl:h-[200px]
            xl:w-[1180px] xl:h-[200px]
            lg:w-[700px] lg:h-[200px]
            md:w-[500px] md:h-[200px]
            sm:w-[300px] sm:h-[200px]
        w-[1180px] h-[200px] pt-[80px] mx-auto mb-[700px]">
            <div className="
            2xl:w-[1180px] 2xl:h-[144px]
            xl:w-[1180px] xl:h-[144px]
            lg:w-[700px] lg:h-[190px]
            md:w-[450px] md:h-[270px]
            sm:w-[300px] sm:h-[420px]
        bg-[#eeeeee] text-[#444444] h-36 pt-[10px]">
                <div>
                    <h3 className="text-[22px] font-[700] leading-[26.4px] p-[10px 0] text-center">
                        KIỂM TRA THÔNG TIN ĐƠN HÀNG & TÌNH TRẠNG VẬN CHUYỂN
                    </h3>
                </div>
                <div className="
                lg:flex-wrap
                md:flex-wrap md:flex-col
                sm:flex-wrap sm:flex-col
            box-border flex flex-row justify-center">
                    <label
                        className="mt-[30px] px-[10px] font-bold" id="madonhang">
                        Mã đơn hàng:  </label>
                    <input placeholder="(Bắt buộc)"
                        value={billId}
                        onChange={setId}
                        className="w-[225px] h-[40px] border-[#dedede] rounded border-solid border mt-[25px] p-[8px] text-center leading-[18px]"
                    />
                    <label
                        className="mt-[30px] px-[10px] font-bold">
                        Số điện thoại: </label>
                    <input placeholder="(Bắt buộc)"
                        value={phoneNumber}
                        onChange={setPhone}
                        className="w-[225px] h-[40px] border-[#dedede] rounded border-solid border mt-[25px] p-[8px] text-center leading-[18px]"
                    />
                    <Link to="">
                        <button
                            className="w-[150px] h-[39px] bg-[#e11b1e] border-[#e11b1e] rounded border-solid border-[1px] text-[#ffffff] font-bold ml-4 mt-6"
                            onClick={() => {
                                getSearchOrder();
                            }}
                        >
                            Kiểm tra
                        </button>
                    </Link>
                </div>
            </div>

            {/* {show && <div className="px-2 border border-solid">
                <div className="text-lg text-black font-bold grid grid-flow-row grid-cols-1 gap-y-3 border border-solid rounded-xl mx-1 my-3 px-3 pb-5 ">
                    <h2 className="text-center font-bold">Tình trạng đơn hàng</h2>
                    <p>Mã Đơn Hàng : <span className="text-[#fc3939] text-[20px]">{searchBill?.subId}</span> </p>
                    <p>Người Nhận : <span className="text-[#fc3939] text-[20px]">{searchBill?.customerName}</span></p>
                    <p>Số Điện Thoại : <span className="text-[#fc3939] text-[20px]">{searchBill?.customerPhoneNumber}</span></p>
                    <p>Ngày Đặt : <span className="text-[#fc3939] text-[20px]">{searchBill?.date}</span> </p>
                    <p>Nhận Sản Phẩm Tại : <span className="text-[#fc3939] text-[20px]"> {searchBill?.cutomerAddress}</span></p>
                    <p>Tổng Tiền : <span className="text-[#fc3939] text-[20px]"> {formatPrice(parseInt(searchBill?.totalPrice + ""))}</span></p>
                </div>
            </div>} */}
        </div>

    );

}

export default SearchOrder;
