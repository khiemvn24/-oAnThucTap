import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listBillDetail : [],
    BillDetail:null
}
export const getAllBillDetail= createAsyncThunk('/AllBillDetail',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`http://localhost:5000/vnkfood/api/get/billdetail/${payload}`);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

  export const getAllBillDetails= createAsyncThunk('/AllBillDetails',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/billdetail");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )


export const CreateBillDetail= createAsyncThunk('/CreateBillDetail',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/billdetail/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)


  export const AllBillDetail = createSlice(
    {
        name:"BillDetail",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all
            .addCase(getAllBillDetail.pending,(state,action)=>{
                state.listBillDetail = [];
            })
            .addCase(getAllBillDetail.fulfilled,(state,action)=>{
                state.listBillDetail = action.payload;
            })
            .addCase(getAllBillDetail.rejected,(state,action)=>{
                state.listBillDetail = []
            })
            // // get chi tiet 
            .addCase(getAllBillDetails.pending,(state,action)=>{
                
            })
            .addCase(getAllBillDetails.fulfilled,(state,action)=>{
                state.BillDetail = action.payload;
            })
            .addCase(getAllBillDetails.rejected,(state,action)=>{
              
            })
            // create 
            .addCase(CreateBillDetail.pending,(state,action)=>{
                
            })
            .addCase(CreateBillDetail.fulfilled,(state,action)=>{
                state.listBillDetail.listBillDetail.push(action.payload);
               
            })
            .addCase(CreateBillDetail.rejected,(state,action)=>{
              
            })

            

        }
    }
)
export default AllBillDetail.reducer;