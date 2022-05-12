import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllHoaDon } from "../../../Features/HoaDonSlice";
import { useDispatch, useSelector } from 'react-redux'
import PageProd from "../Pagination/PageProd";

export default function QuanLyHoaDon() {
  const dispatch = useDispatch()
  const listHoaDons = useSelector(state => state.listHoaDon)
  useEffect(() => {
    dispatch(getAllHoaDon())
  }, []);
    
  // page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // Giá trị sắp xếp
  const SORT = {
    up: "2",
    down: "3",
  };
  const [sortId, setSortId] = useState(SORT.up);
  // Hiển thị giá trị trên màn hình
  const getSortAge = () => {
    if (sortId === SORT.down) {
      return `^`;
    }
    if (sortId === SORT.up) {
      return "^";
    }
  };
  // Chuyển đổi giá trị sắp xếp
  const handleSort = () => {
    if (sortId === SORT.down) {
      setSortId(SORT.up);
    } else {
      if (sortId === SORT.up) {
        setSortId(SORT.down);
      }
    }
  };

  const [searchSubID, setsearchSubID] = useState("");
  // Tìm kiếm
  const findSDT = function (list) {
    let res= [...list];
    if (searchSubID) {
      res = res.filter((el) =>
      el.subId.toLowerCase().includes(searchSubID.toLowerCase()),
    );
    }
    if (sortId !== SORT.down) {
      res.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));
    } else {
      res.sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? 1 : -1));
    }
    return res;
  };
  //get ccurrent Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = findSDT(listHoaDons.listHoaDon);
  //function paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render map data
  const getlistHoaDon = findSDT(currentPosts.slice(indexOfFirstPost, indexOfLastPost)).map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-400 text-center">{item.id}</td>
        <td className="border border-slate-400 text-center">{item.subId}</td>
        <td className="border border-slate-400">{item.customerName}</td>
        <td className="border border-slate-400">{item.customerPhoneNumber}</td>
        <td className="border border-slate-400">{item.totalPrice}</td>
        <td className="border border-slate-400">{item.date}</td>
        <td className="border border-slate-400">{item.cutomerAddress}</td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`/Admin/UpdateHoaDon/${item.id}`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </Link>
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
          <Link to={`/Admin/DeleteHoaDon/${item.id}`}>
            <button type="button" className="btn btn-warning">
              Delete
            </button>
          </Link>
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
          <Link to={`/Admin/ChiTietHoaDon/${item.id}`}>
            <button type="button" className="btn btn-warning">
              Chi tiết
            </button>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        QUẢN LÝ HÓA ĐƠN
      </h1>
      <div className="mt-[10px] flex flex-row justify-start items-center px-[20px] mb-[20px]">
        <label className="mr-[30px] w-32">ID Tìm kiếm</label>
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Sub ID cần tìm"
            value={searchSubID}
            onChange={(e) => setsearchSubID(e.target.value)}
            className="p-[15px] border outline-none form-control"
          />
        </div>
      </div>
      <table className="table table-hover leading-[40px]">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-400">
              <button className="btn btn-outline-success" onClick={handleSort}>
                STT {getSortAge()}
              </button>
            </th>
            <th className="border border-slate-400">ID HD</th>
            <th className="border border-slate-400">Khách hàng</th>
            <th className="border border-slate-400">Số điện thoại</th>
            <th className="border border-slate-400">Tổng tiền</th>
            <th className="border border-slate-400">Ngày đặt hàng</th>
            <th className="border border-slate-400">Địa chỉ</th>
            <th className="border border-slate-400">Sửa</th>
            <th className="border border-slate-400">Xóa</th>
            <th className="border border-slate-400">Chi tiết</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">
          {getlistHoaDon}
          </tbody>
      </table>
      <PageProd
        postsPerPage={postsPerPage}
        totalPosts={listHoaDons.listHoaDon.length}
        paginate={paginate}
      />
    </div>
  );
}

