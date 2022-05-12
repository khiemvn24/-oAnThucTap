import React from "react";
import { Link } from "react-router-dom";

export default function CartEmpty() {
  return (
    <div className="mx-auto mt-10 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 mx-auto"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
          clipRule="evenodd"
        />
      </svg>
      <h3 className="mt-10 text-xs sm:text-sm xl:text-xl text-[#444]">
        Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại
      </h3>
      <Link to="/">
        <div className="text-xs sm:text-sm xl:text-md mx-auto mt-10 w-1/3  sm:w-1/4 bg-red-600 rounded-lg cursor-pointer">
          <p className="text-white py-[10px] hover:underline">
            Quay lại trang chủ
          </p>
        </div>
      </Link>
    </div>
  );
}
