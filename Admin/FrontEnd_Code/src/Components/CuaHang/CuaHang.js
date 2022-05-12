import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CuaHang() {
  return (
    <div className="w-full flex flex-row justify-center">
      <div
      className="mt-[100px] 
        2xl:w-[1300px] 
        xl:w-[1200px] 
        lg:w-[1000px]
        md:w-[700px]
        sm:w-[600px] 
        w-[400px]
        text-center"
    >
      <div
        className="mt-[80px] flex flex-col h-auto m-auto w-full
        md:flex md:flex-row
        "
      >
        <div className="md:w-3/4 w-full rounded-t-lg border-2">
          <div className="image">
            <img
              src="https://cellphones.com.vn/media/wysiwyg/banner_dcch.png"
              className="w-full rounded-t-lg"
              alt=""
            ></img>
            <div
              className="text-center bg-red-500 w-full h-[10px] leading-[10px] text-white text-[10px]
          2xl:h-[60px] 2xl:leading-[60px] 2xl:text-[20px]
          xl:h-[50px] xl:leading-[50px] xl:text-[18px]
          lg:h-[40px] lg:leading-[40px] lg:text-[16px]
          md:h-[30px] md:leading-[30px] md:text-[14px]
          sm:h-[20px] sm:leading-[20px] sm:text-[12px]
          "
            >
              <span
                className="font-bold
            "
              >
                {" "}
                SALISTORE
              </span>
            </div>
          </div>
          <div className="boss m-[5px]">
            <h3 className="text-red-500 text-center font-bold ">
              TIỆN ÍCH TẠI CỬA HÀNG ULTRPHONES
            </h3>
            <p>
              <strong>UltrphoneS</strong> luôn nỗ lực{" "}
              <strong>“Tận tâm với khách hàng“</strong> mang đến dịch vụ và trải
              nghiệm tốt nhất:
            </p>
            <div className="flex flex-row font-[13px] mt-[10px] text-[13px]">
              <div className="left w-1/2 mr-[12px]">
                <p>
                  <strong>
                    CellphoneS là hệ thống bán lẻ uỷ quyền chính hãng của Apple
                    Việt Nam (AAR - Apple Authorized Reseller).
                  </strong>
                </p>
                <strong>
                  Điện Thoại Vui ASP là hệ thống bảo hành chính hãng uỷ quyền
                  của Apple tại Việt Nam
                </strong>
                <ul className="list-disc ml-[50px]">
                  <li>
                    Nhân viên nhiệt tình, thân thiện, gửi xe & Wifi miễn phí
                  </li>
                  <li>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí</li>
                  <li>Giá bán, khuyến mãi luôn tốt nhất thị trường</li>
                  <li>
                    Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng
                  </li>
                  <li>Bảo hành chính hãng, đổi mới miễn phí 1 tháng</li>
                  <li>Thu cũ đổi mới sản phẩm trợ giá tốt nhất</li>
                </ul>
              </div>
              <div className="right w-1/2">
                <p>
                  CellphoneS là hệ thống bán lẻ uỷ quyền chính hãng của Apple
                  Việt Nam (AAR - Apple Authorized Reseller).
                </p>
                <strong>
                  Điện Thoại Vui ASP là hệ thống bảo hành chính hãng uỷ quyền
                  của Apple tại Việt Nam
                </strong>
                <ul className="list-disc ml-[50px]">
                  <li>
                    Nhân viên nhiệt tình, thân thiện, gửi xe & Wifi miễn phí
                  </li>
                  <li>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí</li>
                  <li>Giá bán, khuyến mãi luôn tốt nhất thị trường</li>
                  <li>
                    Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng
                  </li>
                  <li>Bảo hành chính hãng, đổi mới miễn phí 1 tháng</li>
                  <li>Thu cũ đổi mới sản phẩm trợ giá tốt nhất</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:w-1/4 md:p-[5px] md:ml-[15px] 
            md:flex-col md:flex
            w-full p-[15px]
            border-2 rounded-[5px] bg-white
             "
        >
          <div className="h-auto">
            <h2 className="text-center">Liên hệ</h2>
            <i className="fa-solid fa-phone text-[20px] mr-2"></i>{" "}
            <strong className="text-red-500">Tổng đài miễn phí</strong>
            <br />
            <p>
              <strong className="text-[13px]">Khiếu nại: </strong>0848785548
            </p>
            <p>
              <strong className="text-[13px]">Góp ý: </strong>145786645
            </p>
          </div>
          <div className="h-auto">
            <i className="fa-solid fa-handshake text-[20px] mr-2"></i>{" "}
            <strong className="text-red-500">Hợp tác liên doanh</strong>
            <br />
            <p>
              <strong className="text-[13px]">Cho thuê mặt bằng: </strong>
            </p>
            <p>
              <strong className="text-[13px]">Mr.Group1 </strong>
            </p >
            <Link to={""} className="text-blue-500 italic lg:text-[15px] md:text-[13px] text-[15px]">
              sachlinh12345@gmail.com
            </Link>
            <p>
              <strong className="text-[13px]">Bán hàng daonh nghiệp </strong>
            </p>
            <p className="text-[13px]">
              Gọi : 1800.2097 (Miền Nam) hoặc 1800.2044 (Miền Bắc) Email :
              cskh@cellphones.com.vn
            </p>
          </div>
        </div>
      </div>
      <div
        className="m-auto mt-[10px] w-[400px] 
        2xl:w-[1300px] 
        xl:w-[1200px] 
        lg:w-[1000px]
        md:w-[700px]
        sm:w-[600px] "
      >
        <div className="box_diaChi w-full border-2 rounded-lg p-[10px]">
          <h2 className="font-bold lg:text-[25px] md:text-[20px] sm:text-[15px]">Cửa hàng bán lẻ ULTRPHONES</h2>
          <p className="text-[13px] lg:text-[20px] md:text-[17px] mt-[5px]">
            Giờ mở cửa: 8h-22h
          </p>
          <div className="flex flex-col lg:flex-row lg:mt-[10px] lg:justify-around">    
          <div className="lg:w-[500px] w-full ">
          <p className="text-red-600">Địa chỉ: <strong>322 Mỹ Đình, Mỹ Đình 1, Nam Từ Liêm, Hà Nội</strong></p>
            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2019/04/khai-truong-cellphones-quang-trung-hoc-mon-4.jpeg"
            className="" alt=""/>
            
          </div>
          <div className="lg:w-1/2 mt-[20px] lg:mt-[0px] w-full ">
          <p className="text-red-600"><strong>Bản đồ</strong></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.235563796158!2d105.77199741478445!3d21.023258493342272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454aef64d38a5%3A0x146dc6bfe48ea3cf!2zMzIyIMSQLiBN4bu5IMSQw6xuaCwgTeG7uSDEkMOsbmgsIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1649858380193!5m2!1svi!2s"
               style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="" className="lg:w-[500px] lg:h-[375px] w-full h-full lg:pl-[70px]">
                </iframe>
          </div>
          
          </div>
        </div>
      </div>    
    </div>
    </div>
  );
}
