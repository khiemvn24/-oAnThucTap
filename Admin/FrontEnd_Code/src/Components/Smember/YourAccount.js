import React from "react";

export default function YourAccount() {
  return (
    <div className="col-start-2 col-span-3 border-[1px] border-gray-300 rounded-xl text-center md:mt-[0px] mt-[15px]">
      <p className="text-[25px] mx-auto text-red-600">Xin chào</p>
      <h2 className="font-semibold text-red-600 text-3xl">Name</h2>
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-row justify-around items-center">
          <div className="">
            <p className="text-sm lg:text-lg md:text-md">Email</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="font-semibold text-[12px] lg:text-lg md:text-[14px] sm:text-[13px] break-words">
              Email User
            </p>
          </div>
          <div className="">
            <p className="text-sm lg:text-lg md:text-md">Số điện thoại</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="font-semibold text-[12px] lg:text-lg md:text-[14px] sm:text-[13px]">
              {"userInfo.phoneNumber" || "Chưa cập nhật"}
            </p>
          </div>
        </div>
        <div className="h-[50px]"></div>
        <form className="form w-full flex flex-row justify-around items-center mb-[50px]">
          <div className="flex flex-col justify-around items-center">
            <label
              for="inputPassword"
              className="text-sm lg:text-lg md:text-md"
            >
              Password
            </label>
            <i className="fa-solid fa-key text-[50px] h-12 w-12 my-[5px] text-red-600"></i>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password Old"
              required
            />
          </div>
          <div className="flex flex-col justify-around items-center">
            <label
              for="inputPassword"
              className="text-sm lg:text-lg md:text-md"
            >
              Password Moi
            </label>
            <i className="fa-brands fa-keycdn  text-[50px] h-12 w-12 my-[5px] text-red-600"></i>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password new"
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary text-[#f53939]"
            value="Đổi mật khẩu"
          />
        </form>
      </div>
    </div>
  );
}
