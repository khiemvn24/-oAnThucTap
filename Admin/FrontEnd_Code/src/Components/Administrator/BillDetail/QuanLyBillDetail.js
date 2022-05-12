// import axios from "axios";
// import React, { Component, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllBillDetail, getAllBillDetails } from "../../../Features/BillDetailSlice";
// import { useDispatch, useSelector } from 'react-redux'
// import PageProd from "../Pagination/PageProd";
// import { useParams } from "react-router-dom";

// export default function QuanLyBillDetail() {
//   const [BillDetail, setBillDetail] = useState();
//   const dispatch = useDispatch()
//   const params = useParams();
//   // const listBillDetails = useSelector(state => state.listBillDetail)
//   // console.log(listBillDetails,'dsiguashjkldsa');
//   const getBillDetail = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/vnkfood/api/get/billdetail/${params.ID_Bill}`
//       );
//       setBillDetail(res.data); 
//       console.log(BillDetail,'dýiaghjs');
//       console.log(BillDetail[0].ID_Product,'sgghjkjjhbkll');
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   useEffect(() => {
//     getBillDetail()

//   }, []);
  
  
//   // page
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(6);
//   // Giá trị sắp xếp
//   const SORT = {
//     up: "2",
//     down: "3",
//   };
//   const [sortId, setSortId] = useState(SORT.up);
//   // Hiển thị giá trị trên màn hình
//   const getSortAge = () => {
//     if (sortId === SORT.down) {
//       return `^`;
//     }
//     if (sortId === SORT.up) {
//       return "v";
//     }
//   };
//   // Chuyển đổi giá trị sắp xếp
//   const handleSort = () => {
//     if (sortId === SORT.down) {
//       setSortId(SORT.up);
//     } else {
//       if (sortId === SORT.up) {
//         setSortId(SORT.down);
//       }
//     }
//   };

//   const [searchSubID, setsearchSubID] = useState("");
//   // Tìm kiếm
//   const findSDT = function () {
//     let res= [];
//     if (searchSubID) {
//       res = res.filter((el) =>
//       el.BillDetailName.toLowerCase().includes(searchSubID.toLowerCase()),
//     );
//     }
//     if (sortId !== SORT.down) {
//       res.sort((a, b) => (parseInt(a) > parseInt(b) ? 1 : -1));
//     } else {
//       res.sort((a, b) => (parseInt(a) < parseInt(b) ? 1 : -1));
//     }
//     return res;
//   };
//   // get ccurrent Page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = findSDT(BillDetail);
//   //function paginate
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Render map data
//   const getlistBillDetail = findSDT(currentPosts.slice(indexOfFirstPost, indexOfLastPost)).map((item, index) =>{
//     return (
//       <tr key={index}>
     
//         <td className="border border-slate-400 text-center">{item?.ID_Product}</td>
//         <td className="border border-slate-400 text-center">{item.productName}</td>
//         <td className="border border-slate-400 text-center">{item.Amount}</td>
//         <td className="border border-slate-400 w-[200px] h-[150px]">
//           <img className="w-full h-full " src={item.Image_Pro}/>
//         </td>
//         <td className="border border-slate-400 text-center">{item.price}</td>
//         <td className="border border-slate-400 text-center">{item.details}</td>
//       </tr>
//     );
//   });
//   return (
//     <div className="w-full">
//       <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
//         QUẢN LÝ BILLDETAIL
//       </h1>
//       <Link to={`/Admin/ThemBillDetail`}>
//         <button type="button" className="btn btn-warning">
//           Thêm
//         </button>
//       </Link>
//       {/* <div className="mt-[10px] flex flex-row justify-start items-center px-[20px] mb-[20px]">
//         <label className="mr-[30px] w-32"> Tìm kiếm</label>
//         <div className="input-group mb-3 ">
//           <span className="input-group-text" ID_Bill="basic-addon1">
//             <i className="fa-solid fa-magnifying-glass"></i>
//           </span>
//           <input
//             type="text"
//             name=""
//             placeholder="Sub UserName cần tìm"
//             value={searchSubID}
//             onChange={(e) => setsearchSubID(e.target.value)}
//             className="p-[15px] border outline-none form-control"
//           />
//         </div>
//       </div> */}
//       <table className="table table-hover leading-[40px]">
//         <thead>
//           <tr className="text-center">
//             {/* <th className="border border-slate-400">
//               <button className="btn btn-outline-success" onClick={handleSort}>
//                 STT{getSortAge()}
//               </button>
//             </th>
//          */}
//             <th className="border border-slate-400">Mã</th>
//             <th className="border border-slate-400">Tên</th>
//             <th className="border border-slate-400">Số lượng</th>
//             <th className="border border-slate-400">Hình ảnh</th>
//             <th className="border border-slate-400">Giá</th>
//             <th className="border border-slate-400">Chi tiết</th>
//           </tr>
//         </thead>
//         <tbody className="font-Roboto font-[500px]">{getlistBillDetail}</tbody>
//       </table>
//       {/* <PageProd
//         postsPerPage={postsPerPage}
//         totalPosts={listBillDetails.listBillDetail.length}
//         paginate={paginate}
//       /> */}
//     </div>
//   );
// }

