import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listProduct : [],
    ProductDetail:null
}
export const getAllProduct= createAsyncThunk('/AllProduct',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/product/");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const getChiTietProduct= createAsyncThunk('/AllProductID',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`http://localhost:5000/vnkfood/api/get/product/${payload}`); 
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

export const CreateProduct= createAsyncThunk('/CreateProduct',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/product/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

export const deleteProduct= createAsyncThunk('/deleteProduct',
  // Declare the type your function argument here:

  async (payload) => {
    //   console.log(payload,'--------------');
      try {
          const res = await axios.delete(`http://localhost:5000/vnkfood/api/delete/product/${payload}`);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

  export const AllProduct = createSlice(
    {
        name:"Product",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllProduct.pending,(state,action)=>{
                state.listProduct = [];
            })
            .addCase(getAllProduct.fulfilled,(state,action)=>{
                state.listProduct = action.payload;
            })
            .addCase(getAllProduct.rejected,(state,action)=>{
                state.listProduct = []
            })
            // // get chi tiet hoa don
            .addCase(getChiTietProduct.pending,(state,action)=>{
                
            })
            .addCase(getChiTietProduct.fulfilled,(state,action)=>{
                state.ProductDetail = action.payload;
            })
            .addCase(getChiTietProduct.rejected,(state,action)=>{
              
            })
            // create account
            .addCase(CreateProduct.pending,(state,action)=>{
                
            })
            .addCase(CreateProduct.fulfilled,(state,action)=>{
                state.listProduct.listProduct.push(action.payload);
               
            })
            .addCase(CreateProduct.rejected,(state,action)=>{
              
            })

            // delete account
            .addCase(deleteProduct.pending,(state,action)=>{
                
            })
            .addCase(deleteProduct.fulfilled,(state,action)=>{
                for (let i = 0; i < state.listProduct.length; i++) {
                    if (state.listProduct[i]._ID_Product === action.payload) {
                      state.listProduct.splice(action.payload, 1);
                    }
                  }
               
            })
            .addCase(deleteProduct.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllProduct.reducer;