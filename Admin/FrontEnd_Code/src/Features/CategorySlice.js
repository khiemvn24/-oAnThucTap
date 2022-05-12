import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listCategory : [],
    CategoryDetail:null
}
export const getAllCategory= createAsyncThunk('/AllCategory',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/category/");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const getChiTietCategory= createAsyncThunk('/AllCategoryID',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`http://localhost:5000/vnkfood/api/get/categorys/${payload}`); 
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

export const CreateCategory= createAsyncThunk('/CreateCategory',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/category/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

export const deleteCategory= createAsyncThunk('/deleteCategory',
  // Declare the type your function argument here:

  async (payload) => {
    //   console.log(payload,'--------------');
      try {
          const res = await axios.delete(`http://localhost:5000/vnkfood/api/delete/category/${payload}`);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

  export const AllCategory = createSlice(
    {
        name:"Category",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllCategory.pending,(state,action)=>{
                state.listCategory = [];
            })
            .addCase(getAllCategory.fulfilled,(state,action)=>{
                state.listCategory = action.payload;
            })
            .addCase(getAllCategory.rejected,(state,action)=>{
                state.listCategory = []
            })
            // // get chi tiet hoa don
            .addCase(getChiTietCategory.pending,(state,action)=>{
                
            })
            .addCase(getChiTietCategory.fulfilled,(state,action)=>{
                state.CategoryDetail = action.payload;
            })
            .addCase(getChiTietCategory.rejected,(state,action)=>{
              
            })
            // create account
            .addCase(CreateCategory.pending,(state,action)=>{
                
            })
            .addCase(CreateCategory.fulfilled,(state,action)=>{
                state.listCategory.listCategory.push(action.payload);
               
            })
            .addCase(CreateCategory.rejected,(state,action)=>{
              
            })

            // delete account
            .addCase(deleteCategory.pending,(state,action)=>{
                
            })
            .addCase(deleteCategory.fulfilled,(state,action)=>{
                for (let i = 0; i < state.listCategory.length; i++) {
                    if (state.listCategory[i]._ID_Category === action.payload) {
                      state.listCategory.splice(action.payload, 1);
                    }
                  }
               
            })
            .addCase(deleteCategory.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllCategory.reducer;