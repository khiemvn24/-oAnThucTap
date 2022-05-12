import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FindProduct from "../HomeTrangChu/FindProduct";


export default function DanhMucSPByName() {
  const params = useParams();
 
  return (
    <div className="w-full flex flex-row justify-center">
      <div className="2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full sm:px-0 px-3
      flex flex-row justify-center items-start mt-[70px] lg:mt-[80px] xl:mt-[100px]">
        <div className="w-full flex flex-col justify-center">
          <div className="w-full flex md:flex-row md:justify-between 
          md:items-start flex-col justify-center items-start">
            <Swiper
              className="md:w-[48%] w-[80%] md:mb-[0px] mb-[10px] 
              2xl:h-[100px] xl:h-[100px] lg:h-[80px] md:h-[60px] h-[50px]
            2xl:rounded-xl xl:rounded-xl lg:rounded-lg md:rounded-md rounded-sm shadow-[0_0px_5px_2px_#9b9a9a]"
              loop={true}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            >
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple_1.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Mi_12_Sliding_cate.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Redmi_10c-cate.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/iPhone-11---sale.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/reno_7.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/redmi-note-11-4g-64gb-hcm.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/13_series.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              className="md:w-[48%] w-[80%] 2xl:h-[100px] xl:h-[100px] lg:h-[80px] md:h-[60px] h-[50px] 
             2xl:rounded-xl xl:rounded-xl lg:rounded-lg md:rounded-md rounded-sm shadow-[0_0px_5px_2px_#9b9a9a]"
              loop={true}
              spaceBetween={10}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            >
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/xiaomi-595-100-max.png"
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Redmi_10c-cate.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Redmi_10c-cate.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Mi_12_Sliding_cate.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/pk_mua_nhieu_giam_nhieu.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/11-lite-5g-ne-hcm-cate.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/595-100-9_pro_plus.png"
                  alt=""
                  className="w-full h-full rounded-t-2xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full lg:mt-[15px] mt-[5px]">
            <FindProduct name={params.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
