/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { getAllDanhMuc } from "../../Features/MenuSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const [thums, setThums] = useState();
  const dispatch = useDispatch();
  const listCatas = useSelector((state) => state.listDanhMuc);
  const list = listCatas.listCata.catas;
  useEffect(() => {
    dispatch(getAllDanhMuc());
  }, []);

  if (list) {
    var showListCata = list.map((item, index) => {
      return (
        <li
          className="w-full h-full hover:bg-[#d6d3d3] p-[4px] lg:p-[6px] first:rounded-t-2xl last:rounded-b-2xl 
        pl-[10px] flex flex-row justify-between items-center group transition-transform-[0,25s]"
          key={index}
        >
          <Link
            className="w-full pl-[8px] lg:pl-[15px]"
            to={`/DanhMucSP/${item.id}`}
          >
            {item.name}
          </Link>
          <i className="fa-solid fa-angle-right pr-[15px]"></i>
        </li>
      );
    });
  }

  let [open, setOpen] = useState(false);
  //// render
  return (
    <div className="w-full mt-[30px] lg:mt-[25px] xl:mt-[10px] sm:mt-[40px] mb-[20px] font-Roboto text-[14px] h-[300px] lg:h-[376px]">
      <div className="relative flex md:flex-row flex-col justify-between w-full h-full">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="absolute text-xl top-[2px] cursor-pointer block md:hidden font-Roboto"
        >
          <i
            className={
              open
                ? "fa-solid fa-xmark ml-[10px] mr-[10px]"
                : "fa-solid fa-bars ml-[10px] mr-[10px]"
            }
          ></i>
          Danh Mục
        </div>
        <div
          className={`absolute md:static bg-[#e02323] text-[#fff] md:text-inherit md:bg-inherit  transition-all duration-700 
        md:w-[20%] lg:w-[15%] h-full rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]
        ${
          open
            ? "top-[35px] left-[0px] z-20 opacity-100"
            : "left-[-500px] top-[35px] z-20"
        }
         w-[30%] h-full opacity-100
         `}
        >
          <ul className="w-full h-full flex flex-col justify-between font-[500]">
            {list ? showListCata : "khong co data"}
          </ul>
        </div>
        <div
          className="md:mt-[0px] mt-[40px] rounded-2xl shadow-[#9e9c9c] 
        w-[98%] md:w-[56%] h-full lg:w-[68%] 
        shadow-[0_0px_5px_2px_#9b9a9a] sm:mx-[0px] mx-[10px]"
        >
          <Swiper
            className="w-full h-full lg:h-[304px]"
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thums }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            <SwiperSlide>
              <img
                src={require(`./Images/Slide1.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide2.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide3.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide4.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide5.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            className="w-full lg:flex flex-row justify-between 
            lg:h-[72px] hidden text-[11px] lg:text-[12px] text-[#340a40]"
            onSwiper={setThums}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[1px] lg:p-[2px] hover:bg-[#f3f4f6] hover:rounded-b-2xl active:border-b-2 active:border-b-black">
              <Link to="" className="text-[11px] lg:text-[12px]">
                GALAXY A53
              </Link>
              <p>Ưu đãi siêu khủng</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[1px] lg:p-[2px] hover:bg-[#f3f4f6] ">
              <Link to="" className="text-[11px] lg:text-[12px]">
                XIAOMI 12 SERTIES
              </Link>
              <p>Quà cực xịn</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[1px] lg:p-[2px] hover:bg-[#f3f4f6] ">
              <Link to="" className="text-[11px] lg:text-[12px]">
                OPPO ZENO7 SERIES
              </Link>
              <p>Đặt trước nhiều quà</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[1px] lg:p-[2px] hover:bg-[#f3f4f6] ">
              <Link to="" className="text-[11px] lg:text-[12px]">
                VIVOBOOK 13 OLED
              </Link>
              <p>Mở bán quà ngon</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[1px] lg:p-[2px] hover:bg-[#f3f4f6]  hover:rounded-b-2xl ">
              <Link to="" className="text-[11px] lg:text-[12px]">
                IPAD 12.2 2021
              </Link>
              <p>Giá cực sốc</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sm:w-[20%] md:h-full lg:w-[15%] md:flex md:flex-col md:justify-around md:items-start hidden">
          <Link to="" className="w-full h-[80%]">
            <img
              src={require(`./Images/banner1.png`)}
              alt=""
              className="w-full h-[90%] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]"
            />
          </Link>
          <Link to="" className="w-full h-[80%] flex flex-col justify-center">
            <img
              src={require(`./Images/banner2.png`)}
              alt=""
              className="w-full h-[90%] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]"
            />
          </Link>
          <Link to="" className="w-full h-[80%] flex flex-col justify-end">
            <img
              src={require(`./Images/Right_banner_AW.png`)}
              alt="hinh anh"
              className="w-full h-[90%] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
