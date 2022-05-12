import { configureStore } from '@reduxjs/toolkit'
import allDanhMuc from '../Features/MenuSlice'
import allSanPham from '../Features/SanPhamSlice'
import allHoaDon from '../Features/HoaDonSlice'
import AllAccount from '../Features/AcountSlice'
import AllCategory from '../Features/CategorySlice'
import AllPromotion from '../Features/PromotionSlice'
import AllProduct from '../Features/ProductSlice'
import AllRestaurant from '../Features/RestaurantSlice'
import AllBill from '../Features/BillSlice'
import AllBillDetail from '../Features/BillDetailSlice'

export const store = configureStore({
  reducer: {
      listDanhMuc:allDanhMuc,
      listSanPham:allSanPham,
      listHoaDon: allHoaDon,
      listAccount: AllAccount,
      listCategory: AllCategory,
      listPromotion: AllPromotion,
      listProduct: AllProduct,
      listRestaurant: AllRestaurant,
      listBill: AllBill,
      listBillDetail: AllBillDetail,
      }
})
