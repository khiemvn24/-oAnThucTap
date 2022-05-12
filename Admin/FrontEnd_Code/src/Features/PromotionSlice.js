import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listPromotion : [],
    PromotionDetail:null
}
export const getAllPromotion= createAsyncThunk('/AllPromotion',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/promotion/");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const getChiTietPromotion= createAsyncThunk('/AllPromotionID',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`http://localhost:5000/vnkfood/api/get/Promotions/${payload}`); 
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

export const CreatePromotion= createAsyncThunk('/CreatePromotion',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/promotion/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

export const deletePromotion= createAsyncThunk('/deletePromotion',
  // Declare the type your function argument here:

  async (payload) => {
    //   console.log(payload,'--------------');
      try {
          const res = await axios.delete(`http://localhost:5000/vnkfood/api/delete/Promotion/${payload}`);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

  export const AllPromotion = createSlice(
    {
        name:"Promotion",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllPromotion.pending,(state,action)=>{
                state.listPromotion = [];
            })
            .addCase(getAllPromotion.fulfilled,(state,action)=>{
                state.listPromotion = action.payload;
            })
            .addCase(getAllPromotion.rejected,(state,action)=>{
                state.listPromotion = []
            })
            // // get chi tiet hoa don
            .addCase(getChiTietPromotion.pending,(state,action)=>{
                
            })
            .addCase(getChiTietPromotion.fulfilled,(state,action)=>{
                state.PromotionDetail = action.payload;
            })
            .addCase(getChiTietPromotion.rejected,(state,action)=>{
              
            })
            // create account
            .addCase(CreatePromotion.pending,(state,action)=>{
                
            })
            .addCase(CreatePromotion.fulfilled,(state,action)=>{
                state.listPromotion.listPromotion.push(action.payload);
               
            })
            .addCase(CreatePromotion.rejected,(state,action)=>{
              
            })

            // delete account
            .addCase(deletePromotion.pending,(state,action)=>{
                
            })
            .addCase(deletePromotion.fulfilled,(state,action)=>{
                for (let i = 0; i < state.listPromotion.length; i++) {
                    if (state.listPromotion[i]._ID_Promotion === action.payload) {
                      state.listPromotion.splice(action.payload, 1);
                    }
                  }
               
            })
            .addCase(deletePromotion.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllPromotion.reducer;