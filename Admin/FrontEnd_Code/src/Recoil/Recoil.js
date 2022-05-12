import {
    atom
} from 'recoil';


export const userInfoState = atom({
	key: "userInfo",
	default: {}
})
export const isSignedInState = atom({
	key: "isSignedIn",
	default : false
})
export const cartProductState = atom({
    key: "cartProductList",
	default : []
})
export const totalPriceState = atom({
	key: "totalPrice",
	default : 0
})
export const billInfoState = atom({
    key: "billInfo",
    default: {}
})