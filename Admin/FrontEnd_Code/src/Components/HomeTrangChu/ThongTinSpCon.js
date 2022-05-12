/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ThongTinSpCon(props) {
  useEffect(() => {
    getLoaiSp();
  }, []);
  const [listTTSp, setListTTSp] = useState([]);
  const getLoaiSp = async () => {
    try {
      const res = await axios.get(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham`
      );
      setListTTSp(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Giá trị sắp xếp
  const SORT = {
    upPrice: "1",
    downPrice: "2",
    upname: "3",
    downName: "4",
  };
  const [sortId, setSortId] = useState(SORT.upPrice);
  // Chuyển đổi giá trị sắp xếp
  const handleSort = (value) => {
    setSortId(value);
  };

  // sắp xếp
  const funcSort = function (list) {
    let res = [...list];
    if (sortId === "1") {
      res.sort((a, b) => (parseInt(a.cost) > parseInt(b.cost) ? 1 : -1));
    } else {
      if (sortId === "2") {
        res.sort((a, b) => (parseInt(a.cost) < parseInt(b.cost) ? 1 : -1));
      } else {
        if (sortId === "3") {
          res.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else {
          if (sortId === "4") {
            res.sort((a, b) => (a.name < b.name ? 1 : -1));
          }
        }
      }
    }
    return res;
  };
  const ShowLoaiSP = funcSort(listTTSp).map((itemSP, indexSP) => {
    if (itemSP.LoaiId === props.idLoai) {
      return (
        <div
        key={indexSP}
        className="text-left bg-white mt-3 
                              2xl:w-[230px] xl:w-[210px] lg:w-[210px] md:w-[180px] sm:w-[150px] w-[150px]
                               2xl:h-[370px] xl:h-[340px] lg:h-[320px] md:h-[300px] sm:h-[250px] h-[220px]
                               p-[5px]
                              mr-[10px] rounded-lg re cursor-pointer duration-500 
                              shadow-[0_0px_4px_4px_#b6b5b5] hover:shadow-[0_0px_8px_8px_#868585]"
      >
        <Link className="w-full h-full flex flex-col justify-start items-start" to={`/product-detail/${itemSP.id}`}>
          <p
            className="bg-red-600 
                                   2xl:h-[30px] 2xl:w-[100px] 2xl:leading-[30px] 2xl:text-[17px]
                                   xl:h-[30px] xl:w-[100px] xl:leading-[30px] xl:text-[15px]
                                   lg:h-[30px] lg:w-[100px] lg:leading-[30px] lg:text-[15px]
                                   md:h-[30px] md:w-[100px] md:leading-[30px] md:text-[14px]
                                   sm:h-[25px] sm:w-[70px] sm:leading-[25px] sm:text-[12px]
                                   mb-2 text-center rounded-lg  text-white font-bold right-2 bottom-1 text-[10px] 
                                   w-[60px] mt-[5px]  "
          >
            Giảm <span>{itemSP.promotion}%</span>
          </p>
          <img
            alt=""
            src={itemSP.avatar}
            className="2xl:w-[160px] 2xl:h-[160px] 2xl:mt-[15px]
                                      xl:w-[150px] xl:h-[150px] xl:mt-[14px]
                                      lg:w-[140px] lg:h-[140px] lg:mt-[14px]
                                      md:w-[130px] md:h-[130px] md:mt-[12px]
                                      sm:w-[110px] sm:h-[110px] sm:mt-[10px]
                                      text-center m-auto w-[95px] h-[95px] mt-[5px]
                                      "
          ></img>
          <h4
            className="font-bold m-[5px] text-gray-800 text-[9px]
                                  2xl:text-[16px]
                                  xl:text-[15px]
                                  lg:text-[14px]
                                  md:text-[12px]
                                  sm:text-[10px]
                                  "
          >
            {itemSP.name}
          </h4>
          <div
            className="flex text-[9px]
                                  2xl:text-[17px]
                                  xl:text-[15px]
                                  md:text-[13px]
                                  sm:text-11px]"
          >
            <p className="text-red-600 font-bold  m-1 ">
              {itemSP.cost}
              <span>đ</span>
            </p>
            <p className="mt-1 ml-2 line-through text-gray-500">
              {itemSP.oldCost}
              <span>đ</span>
            </p>
          </div>
          <div
            className="text-black my-1 flex flex-row justify-center w-full bg-gray-200 rounded-md pt-auto
                      "
          >
            <span
              className="p-[8px] text-[7px] w-full md:h-[40px] lg:h-[50px] sm:h-[35px] h-[30px]
                        2xl:text-[12px]
                        xl:text-[11px]
                        lg:text-[10px]
                        md:text-[9px]
                        sm:text-[8px]
                        endow
                        "
            >
              {itemSP.endow}
            </span>
          </div>
        </Link>
      </div>
      );
    }
  });
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full mt-[10px]">
        <h2 className="mb-[20px] md:text-[30px] text-[20px] font-Roboto font-[400]">
          Sắp xếp theo
        </h2>
        <div className="lg:w-[50%] md:w-[70%] w-[80%] flex 2xl:flex-row xl:flex-row sm:justify-between justify-start flex-wrap items-start">
          <button
            type="button"
            className="btn btn-primary btn-sm text-[#fc3737] sm:mb-[0px] mb-[5px] rounded-xl mr-[5px] md:mr-[0px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px]"
            onClick={() => {
              handleSort(SORT.upPrice);
            }}
          >
            <i className="fa-solid fa-arrow-up-wide-short mr-[5px] text-black"></i>
            Giá tăng dần
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm text-[#fc3737] sm:mb-[0px] mb-[5px] rounded-xl mr-[5px] md:mr-[0px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px]"
            onClick={() => {
              handleSort(SORT.downPrice);
            }}
          >
            <i className="fa-solid fa-arrow-down-short-wide mr-[5px] text-black"></i>
            Giá thấp dần
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm text-[#fc3737] sm:mb-[0px] mb-[5px] rounded-xl mr-[5px] md:mr-[0px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px]"
            onClick={() => {
              handleSort(SORT.upname);
            }}
          >
            <i className="fa-solid fa-arrow-down-a-z  mr-[5px] text-black"></i>
            Tên A - Z
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm  text-[#fc3737] sm:mb-[0px] mb-[5px] rounded-xl mr-[5px] md:mr-[0px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px]"
            onClick={() => {
              handleSort(SORT.downName);
            }}
          >
            <i className="fa-solid fa-arrow-down-z-a mr-[5px] text-black"></i>
            Tên Z - A
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <span className="flex flex-row justify-start items-center flex-wrap w-full">
          {ShowLoaiSP}
        </span>
      </div>
    </div>
  );
}