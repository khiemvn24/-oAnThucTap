import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center shadow-inner shadow-[#e4e0e0] mt-[100px]">
      <div className="lg:px-4 xl:px-0 2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full sm:px-0 px-4">
        <div className="font-Roboto text-[#444444] flex flex-row justify-between items-start w-full py-[15px] md:text-[10px] lg:text-[12px] text-[10px]">
          <div className="mr-[8px] md:mr-[15px] ">
            <ul>
              <li className="mb-[8px]">
                <p className=" text-[15px] lg:text-[18px] font-bold">
                  Tìm cửa hàng
                </p>
              </li>
              <li className="mb-[5px]">
                <Link to="">Tìm cửa hàng gần nhất</Link>
              </li>
              <li className="mb-[5px]">
                <Link to="">Tìm cửa hàng gần nhất</Link>
              </li>
              <li className="mb-[5px]">
                <Link to="" className="text-[#ec2121]">
                  Gặp trực tiếp cửa hàng gần nhất (zalo hoặc gọi điện)
                </Link>
              </li>
            </ul>
            <div className="mr-[15px]">
              <p className="mt-[8px] mb-[8px] text-[15px] lg:text-[18px] font-bold">
                Phương thức thanh toán
              </p>
              <ul className=" w-[150px] md:w-[200px] lg:w-[250px] flex flex-row justify-start items-center flex-wrap">
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/Footer1.webp`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/Footer2.png`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/ATM.webp`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/alsepay.png`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/zalopay.png`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/vnpay.png`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/mocagrab.jpg`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
                <li className="w-[30px] md:w-[35px] lg:w-[50px] h-[25px] lg:h-[30px] p-[5px] border mr-[4px] mb-[4px]">
                  <img
                    src={require(`./Images/mpos.png`)}
                    alt=""
                    className="w-full h-full"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-[8px] md:mr-[15px]">
            <ul>
              <li className="leading-[18px] md:leading-[22px]">
                <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
              </li>
              <li className="leading-[18px] md:leading-[22px]">
                <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
              </li>
              <li className="leading-[18px] md:leading-[22px]">
                <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
              </li>
            </ul>
            <div>
              <p className="mt-[15px] mb-[5px] text-[15px] lg:text-[18px] font-bold">
                Đối tác dịch vụ bảo hành
              </p>
              <p className="mb-[10px]">Điện thoại - Máy tính</p>
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-[80px] md:w-[100px] lg:w-[128px] h-[30px] lg:h-[40px]"
              />
            </div>
            <div>
              <p className="mt-[15px] mb-[5px] text-[15px] lg:text-[18px] font-bold">
                Trung tâm bảo hành ủy quyền Apple
              </p>
              <img
                src="https://dienthoaivui.com.vn/asp/wp-content/uploads/2022/01/logo-DTV-ASP-01.jpg"
                alt=""
                className="w-[150px] md:w-[200px] lg:w-[216px] h-[30px] lg:h-[40px]"
              />
            </div>
          </div>
          <div className="mr-[8px] md:mr-[15px] hidden sm:block">
            <ul>
              <li className="leading-[22px]">
                <Link to="">Mua hàng và thanh toán online</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Mua hàng trả góp online</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Tra thông tin đơn hàng</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Tra điểm Smember</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Tra thông tin bảo hành</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Tra cứu hóa đơn điện tử</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Trung tâm bảo hành chính hãng</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Quyết định về việc sao lưu dữ liệu</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Dịch vụ bảo hành điện thoại</Link>
              </li>
            </ul>
          </div>
          <div className="mr-[8px] md:mr-[15px] hidden sm:block">
            <ul>
              <li className="leading-[22px]">
                <Link to="">Quy chế hoạt động</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Chính sách Bảo hành</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Liên hợp tác kinh doanh</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Đơn Doanh nghiệp</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Ưu đãi từ đối tác</Link>
              </li>
              <li className="leading-[22px]">
                <Link to="">Tuyển dụng</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f8f8f8] flex flex-row justify-center ">
        <div
          className="2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full sm:px-0 px-4
        flex flex-col justify-center items-center"
        >
          <div className="lg:px-4 w-full font-Roboto text-[#444444] py-[15px] text-[10px] lg:text-[10px]">
            <div>
              <div className="flex flex-row justify-between items-start ">
                <ul className="mr-[7px]">
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Máy tính giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      SamSung Galaxy S22 Ultra
                    </Link>
                  </li>
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Iphone 13
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Iphone 12
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Iphone 11
                    </Link>
                  </li>
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Iphone 8 Plus
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Iphone 7 Plus
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Iphone 6 Plus
                    </Link>
                  </li>
                </ul>
                <ul className="mr-[7px]">
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại iPhone
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Samsung
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Xiaomi
                    </Link>
                  </li>
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại OPPO
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Vivo
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại Nokia
                    </Link>
                  </li>
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Samsung Galaxy Tab S8 Ultra
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Xiaomi Redmi Note 11 Pro
                    </Link>
                  </li>
                </ul>
                <ul className="mr-[7px]">
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Máy tính giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      SamSung Galaxy S22 Ultra
                    </Link>
                  </li>
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Máy tính giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      SamSung Galaxy S22 Ultra
                    </Link>
                  </li>
                  <li className="mb-[8px]">
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Điện thoại giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      Máy tính giá rẻ
                    </Link>{" "}
                    -{" "}
                    <Link
                      to=""
                      className="hover:underline hover:text-[#eb2020]"
                    >
                      SamSung Galaxy S22 Ultra
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="w-full text-center mt-[15px]">
                Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
                0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ:
                350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí
                Minh, Việt Nam. Điện thoại: 028.7108.9666.
              </p>
              <div className="flex flex-row justify-center items-center w=full mt-[5px]">
                <img
                  src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                  alt=""
                  className="w-[80px] h-[38px] mr-[15px]"
                />
                <img
                  src="https://www.dmca.com/PP2020/images/status/logo-b.png"
                  alt=""
                  className="w-[96px] h-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
