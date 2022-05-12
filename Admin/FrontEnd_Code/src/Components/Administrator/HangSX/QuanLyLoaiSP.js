import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageProd from "../Pagination/PageProd";
import { getAllDanhMuc } from "../../../Features/MenuSlice";
import { useDispatch, useSelector } from "react-redux";

export default function QuanLyLoaiSP() {
  const dispatch = useDispatch()
  const listLoai = useSelector(state => state.listDanhMuc)
  useEffect(() => {
    dispatch(getAllDanhMuc())
  }, []);
  const loaiSP = listLoai.listCata
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

  const [searchName, setSearchName] = useState("");
  // Tìm kiếm
  const findName = function (list) {
    let res= [...list];
    if (searchName) {
      res = res.filter((el) =>
        el.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (sortId !== SORT.down) {
      res.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));
    } else {
      res.sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? 1 : -1));
    }
    return res;
  };
  // get ccurrent Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = loaiSP.slice(indexOfFirstPost, indexOfLastPost);
  // function paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const getListLoaiSP = findName(currentPosts).map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-400 text-center">{item.id}</td>
        <td className="border border-slate-400">{item.name}</td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`/Admin/QuanLyHangSX/Update/${item.id}`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </Link>
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
          <Link to={`/Admin/QuanLyHangSX/Delete/${item.id}`}>
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
        QUẢN LÝ HÃNG SẢN XUẤT
      </h1>
      <Link to={`/Admin/QuanLyHangSX/AddNewLoaiSP`}>

        <button className="btn btn-outline-success mx-[20px] my-4">Thêm mới Hãng Sản Xuất</button>

      </Link>
      <div className="flex flex-row justify-start items-center px-[20px] mb-[20px]">
        <label className="mr-[30px] w-32">Tên tìm kiếm</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Tên cần tìm"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-[15px] border outline-none form-control"
          />
        </div>
      </div>
      <table className="table table-hover leading-[40px]">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-400">
              <button className="btn btn-outline-success" onClick={handleSort}>
                Mã ID {getSortAge()}
              </button>
            </th>
            <th className="border border-slate-400">Tên Loại SP</th>
            <th className="border border-slate-400">Sửa</th>
            <th className="border border-slate-400">Xóa</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">{getListLoaiSP}</tbody>
      </table>
      <PageProd
        postsPerPage={postsPerPage}
        totalPosts={loaiSP.length}
        paginate={paginate}
      />
    </div>
  );
}

