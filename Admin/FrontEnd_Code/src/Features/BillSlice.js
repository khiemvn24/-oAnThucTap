import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listBill : [],
    BillDetail:null
}
export const getAllBill= createAsyncThunk('/AllBill',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/bill/");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
// export const getChiTietBill= createAsyncThunk('/BillID',
//     // Declare the type your function argument here:
//     async (payload) => {
//         try {
//             const res = await axios.get(`http://localhost:5000/vnkfood/api/get/billdetail/${payload}`); 
//             console.log(payload,'ádyjashbx');
//             return res.data
//         } catch (error) {
//             console.log(error);
//         }
//     }
//   )

export const CreateBill= createAsyncThunk('/CreateBill',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/bill/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

export const deleteBill= createAsyncThunk('/deleteBill',
  // Declare the type your function argument here:

  async (payload) => {
    //   console.log(payload,'--------------');
      try {
          const res = await axios.delete(`http://localhost:5000/vnkfood/api/delete/bill/${payload}`);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

  export const AllBill = createSlice(
    {
        name:"Bill",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllBill.pending,(state,action)=>{
                state.listBill = [];
            })
            .addCase(getAllBill.fulfilled,(state,action)=>{
                state.listBill = action.payload;
            })
            .addCase(getAllBill.rejected,(state,action)=>{
                state.listBill = []
            })
            // // get chi tiet hoa don
            // .addCase(getChiTietBill.pending,(state,action)=>{
                
            // })
            // .addCase(getChiTietBill.fulfilled,(state,action)=>{
            //     state.BillDetail = action.payload;
            // })
            // .addCase(getChiTietBill.rejected,(state,action)=>{
              
            // })
            // create account
            .addCase(CreateBill.pending,(state,action)=>{
                
            })
            .addCase(CreateBill.fulfilled,(state,action)=>{
                state.listBill.listBill.push(action.payload);
               
            })
            .addCase(CreateBill.rejected,(state,action)=>{
              
            })

            // delete account
            .addCase(deleteBill.pending,(state,action)=>{
                
            })
            .addCase(deleteBill.fulfilled,(state,action)=>{
                for (let i = 0; i < state.listBill.length; i++) {
                    if (state.listBill[i]._ID_Bill === action.payload) {
                      state.listBill.splice(action.payload, 1);
                    }
                  }
               
            })
            .addCase(deleteBill.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllBill.reducer;