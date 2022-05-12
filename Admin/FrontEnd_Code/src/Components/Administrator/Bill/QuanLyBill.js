import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBill } from "../../../Features/BillSlice";
import { useDispatch, useSelector } from 'react-redux'
import PageProd from "../Pagination/PageProd";

export default function QuanLyBill() {
  const dispatch = useDispatch()
  const listBills = useSelector(state => state.listBill)
  console.log(listBills);
  useEffect(() => {
    dispatch(getAllBill())
  }, []);
    
  // page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
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
      return "v";
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
      el.ReceiverName.toLowerCase().includes(searchSubID.toLowerCase()),
    );
    }
    if (sortId !== SORT.down) {
      res.sort((a, b) => (parseInt(a) > parseInt(b) ? 1 : -1));
    } else {
      res.sort((a, b) => (parseInt(a) < parseInt(b) ? 1 : -1));
    }
    return res;
  };
  // get ccurrent Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = findSDT(listBills.listBill);
  //function paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render map data
  const getlistBill = findSDT(currentPosts.slice(indexOfFirstPost, indexOfLastPost)).map((item, index) => {
    return (
      <tr key={index}>
     
        <td className="border border-slate-400 text-center">{item.ID_Bill}</td>
        <td className="border border-slate-400 text-center">{item.ReceiverName}</td>
        <td className="border border-slate-400 text-center">{item.ReceiverAddress}</td>
        <td className="border border-slate-400 text-center">{item.ReceiverEmail}</td>
        <td className="border border-slate-400 text-center">{item.ReceiverPhone}</td>
        <td className="border border-slate-400 text-center">{item.PayType}</td>
        <td className="border border-slate-400 text-center">{item.Status}</td>
        <td className="border border-slate-400 text-center">{item.CreatedDate}</td>
        <td className="border border-slate-400 text-center">{item.ID_Account}</td>
        <td className="border border-slate-400  w-[120px] text-center">
          <Link to={`/Admin/UpdateBill/${item.ID_Bill}`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </Link>
        </td>
        {/* <td className="border border-slate-400  w-[120px] text-center">
          <Link to={`/Admin/QuanLyBillDetail/${item.ID_Bill}`}>
            <button type="button" className="btn btn-info">
              Chi tiết
            </button>
          </Link>
        </td> */}
        <td className="border border-slate-400 w-[120px] text-center">
          <Link to={`/Admin/DeleteBill/${item.ID_Bill}`}>
            <button type="button" className="btn btn-warning">
              Delete
            </button>
          </Link>
        </td>
        
      </tr>
    );
  });
  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        QUẢN LÝ HÓA ĐƠN
      </h1>
      {/* <Link to={`/Admin/ThemBill`}>
        <button type="button" className="btn btn-warning">
          Thêm
        </button>
      </Link> */}
      <div className="mt-[10px] flex flex-row justify-start items-center px-[20px] mb-[20px]">
        {/* <label className="mr-[30px] w-32"> Tìm kiếm</label> */}
        <div className="input-group mb-3 ">
          <span className="input-group-text" ID_Bill="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name=""
            placeholder="Sub UserName cần tìm"
            value={searchSubID}
            onChange={(e) => setsearchSubID(e.target.value)}
            className="p-[15px] border outline-none form-control"
          />
        </div>
      </div>
      <table className="table table-hover leading-[40px]">
        <thead>
          <tr className="text-center">
            {/* <th className="border border-slate-400">
              <button className="btn btn-outline-success" onClick={handleSort}>
                STT{getSortAge()}
              </button>
            </th>
         */}
            <th className="border border-slate-400">Mã</th>
            <th className="border border-slate-400">Người nhận</th>
            <th className="border border-slate-400">Địa chỉ</th>
            <th className="border border-slate-400">Email</th>
            <th className="border border-slate-400">Số điện thoại</th>
            <th className="border border-slate-400">Loại thanh toán</th>
            <th className="border border-slate-400">Trạng thái</th>
            <th className="border border-slate-400">Ngày tạo</th>
            <th className="border border-slate-400">Mã người nhận</th>
            <th className="border border-slate-400">Update</th>
            {/* <th className="border border-slate-400">Chi tiết</th> */}
            <th className="border border-slate-400">Xóa</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">{getlistBill}</tbody>
      </table>
      <PageProd
        postsPerPage={postsPerPage}
        totalPosts={listBills.listBill.length}
        paginate={paginate}
      />
    </div>
  );
}

