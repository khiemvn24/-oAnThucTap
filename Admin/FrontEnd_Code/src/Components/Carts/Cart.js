import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartProductState, totalPriceState } from "../../Recoil/Recoil";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

export default function Cart() {
  const [total, setTotal]= useRecoilState(totalPriceState);
  const [ListCart, setListCart] =
    useRecoilState(cartProductState);

  const getListCart = () => {
    const cartProduct = [];
    let price = 0;
    if (JSON.parse(localStorage.getItem("data") + "") !== null) {
      JSON.parse(localStorage.getItem("data") + "").map((value) => {
        const product = {
          id: value.id,
          image: value.avatar,
          name: value.name,
          price: convertPrice(value.cost),
          oldPrice: convertPrice(value.oldCost),
          promotion: value.promotion,
          endow: value.endow,
          count: 1,
        };
        price += product.price * product.count;
        cartProduct.push(product);
      });
      setListCart(cartProduct);
      setTotal(price);
    }
  };
  const convertPrice = (price) => {
    const prices = price.split(".");
    return (
      parseInt(prices[0]) * 1000000 +
      parseInt(prices[1]) * 1000 +
      parseInt(prices[2])
    );
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  
	const deleteProductInCart = (index) => {
		const listProduct = [...ListCart];
		listProduct.splice(index, 1);
		setListCart(listProduct);

		const localProductList = JSON.parse(localStorage.getItem('data') + "");
		localProductList.splice(index, 1)
		localStorage.setItem('data', JSON.stringify(localProductList));
	}

  useEffect(() => {
    getListCart();
  }, []);

  return (
    <div className="sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 mx-auto mt-16">
      <div className="grid grid-flow-row grid-cols-2 place-content-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-semibold text-red-600 cursor-pointer hover:underline">
            <Link to="/">Trở về</Link>
          </span>
        </div>
        <h3 className="text-lg font-bold text-red-600">Giỏ hàng</h3>
      </div>
      {(ListCart.length === 0 && <CartEmpty />) || (
        <div>
          {ListCart.map((value, key) => {
            return (
              <CartItem
                value={value}
                index={key}
                key={key}
                deleteProductInCart={(index) => deleteProductInCart(index)}
              />
            );
          })}
          <div className="border border-solid rounded-xl p-2 mt-3 shadow-lg">
            <div className="grid grid-flow-row grid-cols-2 pb-2">
              <p className="text-md font-bold">Tổng tiền tạm tính:</p>
              <p className="text-md text-red-600 font-semibold text-right">
                {formatPrice(total)}
              </p>
            </div>
            <Link to="/payment-infor">
              <div className="text-center bg-red-600 text-white font-bold py-4 rounded-md mb-2 cursor-pointer">
                <p>TIẾN HÀNH ĐẶT HÀNG</p>
              </div>
            </Link>
            <Link to="/">
              <div
                className="border border-solid border-red-600 py-4 text-center text-red-600  
              font-bold rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-all"
              >
                <p>CHỌN THÊM SẢN PHẨM KHÁC</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
