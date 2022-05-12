// import axios from "axios";
// import React, { Component, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { CreateBillDetail } from "../../../Features/BillDetailSlice";



// export default function AddBillDetail() {

//   const initState = {
//     ID_BillDetail : "",
//     BillDetailName: "",
//     Image_Cate: "",
//     Status: "",
//   };
//   const navigate = useNavigate();
//   const dispatch = useDispatch()

//   const [data, setData] = useState(initState);
//   const {
//     ID_BillDetail,
//     BillDetailName,
//     Image_Cate,
//     Status
//   } = data;
//   const onChangeText = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (data.ID_BillDetail === "" || data.BillDetailName === "" || data.Image_Cate === "" ||
//       data.Status === "" ) {
//         alert("Vui lòng nhập đầy đủ thông tin");
//       } else {
//         dispatch(CreateBillDetail({data}))
//         setData({
//           ID_BillDetail : "",
//           BillDetailName: "",
//           Image_Cate: "",
//           Status: "",
//         });
//         alert("Thêm mới thành công");
//         navigate(
//           `/Admin/QuanLyBillDetail`
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="">
//       <div className="text-center">
//         <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
//           Thêm BillDetail Mới
//         </h2>
//         <Link to="/Admin/QuanLyBillDetail" className="">
//           <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
//             <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
//           </button>
//         </Link>
//         <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
//           <tr>
//             <th className="border border-slate-300">
//               <label htmlFor="">ID BillDetail</label>
//             </th>
//             <td className="w-5/6 border border-slate-300">
//               <input
//                 type="text"
//                 name="ID_BillDetail"
              
//                 value={ID_BillDetail}
//                 className="border p-[10px] mr-[20px] outline-none w-full"
//                 onChange={onChangeText}
//               />
//             </td>
//           </tr>
//           <tr>
//             <th className="border border-slate-300">
//               <label htmlFor="">Tên danh mục</label>
//             </th>
//             <td className="w-5/6 border border-slate-300">
//               <input
//                 type="text"
//                 name="BillDetailName"
//                 value={BillDetailName}
//                 className="border p-[10px] mr-[20px] outline-none w-full"
//                 onChange={onChangeText}
//               />
//             </td>
//           </tr>
//           <tr>
//             <th className="border border-slate-300">
//               <label htmlFor="">Hình ảnh</label>
//             </th>
//             <td className="w-5/6 border border-slate-300">
//               <input
//                 type="text"
//                 name="Image_Cate"
//                 value={Image_Cate}
              
//                 className="border p-[10px] mr-[20px] outline-none w-full"
//                 onChange={onChangeText}
//               />
//             </td>
//           </tr>
//           <tr>
//             <th className="border border-slate-300">
//               <label htmlFor="">Trạng thái</label>
//             </th>
//             <td className="w-5/6 border border-slate-300">
//               <input
//                 type="text"
//                 name="Status"
//                 value={Status}
            
//                 className="border p-[10px] mr-[20px] outline-none w-full"
//                 onChange={onChangeText}
//               />
//             </td>
//           </tr>

//         </table>
//         <button
//           type="button"
//           className="btn btn-outline-info text-center m-[10px] align-middle"
//           onClick={onSubmit}
//         >
//           Thêm
//         </button>
//       </div>
//     </div>
//   );
// }

