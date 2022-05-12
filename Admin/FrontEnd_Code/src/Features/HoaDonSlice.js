import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listHoaDon : [],
    hoaDonDetail:null
}
export const getAllHoaDon= createAsyncThunk('/AllHoaDon',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const getChiTietHoaDon= createAsyncThunk('/AllChiTietHD',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${payload}`);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

  export const AllHoaDon = createSlice(
    {
        name:"Hoadon",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllHoaDon.pending,(state,action)=>{
                state.listHoaDon = [];
            })
            .addCase(getAllHoaDon.fulfilled,(state,action)=>{
                state.listHoaDon = action.payload;
            })
            .addCase(getAllHoaDon.rejected,(state,action)=>{
                state.listHoaDon = []
            })
            // // get chi tiet hoa don
            .addCase(getChiTietHoaDon.pending,(state,action)=>{
                
            })
            .addCase(getChiTietHoaDon.fulfilled,(state,action)=>{
                state.hoaDonDetail = action.payload;
            })
            .addCase(getChiTietHoaDon.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllHoaDon.reducer;