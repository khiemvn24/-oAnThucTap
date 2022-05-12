import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listRestaurant : [],
    RestaurantDetail:null
}
export const getAllRestaurant= createAsyncThunk('/AllRestaurant',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/restaurant/");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const getChiTietRestaurant= createAsyncThunk('/AllRestaurantID',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`http://localhost:5000/vnkfood/api/get/restaurant/${payload}`); 
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

export const CreateRestaurant= createAsyncThunk('/CreateRestaurant',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/restaurant/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

export const deleteRestaurant= createAsyncThunk('/deleteRestaurant',
  // Declare the type your function argument here:

  async (payload) => {
    //   console.log(payload,'--------------');
      try {
          const res = await axios.delete(`http://localhost:5000/vnkfood/api/delete/restaurant/${payload}`);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

  export const AllRestaurant = createSlice(
    {
        name:"Restaurant",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllRestaurant.pending,(state,action)=>{
                state.listRestaurant = [];
            })
            .addCase(getAllRestaurant.fulfilled,(state,action)=>{
                state.listRestaurant = action.payload;
            })
            .addCase(getAllRestaurant.rejected,(state,action)=>{
                state.listRestaurant = []
            })
            // // get chi tiet hoa don
            .addCase(getChiTietRestaurant.pending,(state,action)=>{
                
            })
            .addCase(getChiTietRestaurant.fulfilled,(state,action)=>{
                state.RestaurantDetail = action.payload;
            })
            .addCase(getChiTietRestaurant.rejected,(state,action)=>{
              
            })
            // create account
            .addCase(CreateRestaurant.pending,(state,action)=>{
                
            })
            .addCase(CreateRestaurant.fulfilled,(state,action)=>{
                state.listRestaurant.listRestaurant.push(action.payload);
               
            })
            .addCase(CreateRestaurant.rejected,(state,action)=>{
              
            })

            // delete account
            .addCase(deleteRestaurant.pending,(state,action)=>{
                
            })
            .addCase(deleteRestaurant.fulfilled,(state,action)=>{
                for (let i = 0; i < state.listRestaurant.length; i++) {
                    if (state.listRestaurant[i]._ID_Restaurant === action.payload) {
                      state.listRestaurant.splice(action.payload, 1);
                    }
                  }
               
            })
            .addCase(deleteRestaurant.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllRestaurant.reducer;