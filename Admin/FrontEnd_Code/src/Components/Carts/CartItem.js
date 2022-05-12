import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartProductState, totalPriceState } from '../../Recoil/Recoil';
import {toast} from 'react-toastify'

export default function CartItem({value, index, deleteProductInCart}) {
    const setTotalPrice = useSetRecoilState(totalPriceState);
    const dispatch = useDispatch()
    const  [cartProductList, setCartProductList] =
      useRecoilState(cartProductState)

    const increaseProductCount = () => {
        const cartProducts = [...cartProductList];
        cartProducts.map((value, key) => {
            if(key === index){
                cartProducts[index] ={...cartProducts[index], count: value.count + 1}
            }
        })
        setCartProductList(cartProducts);
        setTotalPrice(prev => prev + value.price);
    }
    const decreaseProductCount = () => {
        if(value.count > 1){
            const cartProducts = [...cartProductList];
            cartProducts.map((value, key) => {
                if(key === index){
                    cartProducts[index] ={...cartProducts[index], count: value.count -1}
                }
            })
            setCartProductList(cartProducts);
            setTotalPrice(prev => prev - value.price);
        }
    }
    const decreaseTotalPrice = () => {
        setTotalPrice(prev => prev - value.price * value.count)
        toast.success("Sản phẩm đã được xóa")
    }

    const formatPrice = (price) => {
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
	}

  return (
    <div className='mt-3 px-2 py-3 grid grid-flow-row grid-cols-3 border border-solid rounded-xl  relative shadow-lg'>
    <div className=''>
        <img
            src={value.image}
            alt='product in cart'
        />
    </div>
    <div className='col-start-2 col-span-2'>
        <p className='font-bold'>{value.name}</p>
        <div className='grid grid-flow-row grid-cols-4'>
            <p className='text-sm text-red-600 font-semibold pt-1'>
                {formatPrice(value.price)}
            </p>
            <p className='text-sm text-[#777] line-through font-light pt-1'>
                {formatPrice(value.oldPrice)}

            </p>
            <div className='bg-red-600 w-10/12 p-1 rounded-lg'>
                <p className='text-xs text-white font-semibold'>
                    Giảm {value.promotion} %
                </p>
            </div>
        </div>
        <div className="inline-flex">
            <span>Chọn số lượng:</span>
            <div className="inline-flex border-[1px] border-[#777] rounded-md ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={decreaseProductCount} className="h-5 w-5 my-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
                <input className="w-8 text-center" value={value.count} type="text" readOnly={true} />
                <svg xmlns="http://www.w3.org/2000/svg"  onClick={increaseProductCount} className="h-5 w-5 my-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
        </div>
        <div className='bg-[#f6f6f6] mt-2 pt-2 pb-4 pl-2 rounded-lg'>
            <p className=''>- Chương trình khuyến mại:</p>
            <ul className='pl-4 text-red-500'>
                <li className='list-disc text-[15px] text-black'>
                    {value.endow}
                </li>
            </ul>
        </div>
    </div>
    <div onClick={() => {deleteProductInCart(index); decreaseTotalPrice()}}  className='absolute h-5 w-5 top-1 right-1'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 font-bold cursor-pointer'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
            />
        </svg>
    </div>
</div>
  )
}
