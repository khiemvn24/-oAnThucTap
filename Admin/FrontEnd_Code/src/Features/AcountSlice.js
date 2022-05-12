import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listAccount : [],
    AccountDetail:null,
    admin: localStorage.getItem('admin'),
  
}
export const getAllAccount= createAsyncThunk('/AllAccount',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("http://localhost:5000/vnkfood/api/get/account/");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const getChiTietAccount= createAsyncThunk('/AllAccountID',
    // Declare the type your function argument here:
    async (payload) => {
        try {
            const res = await axios.get(`http://localhost:5000/vnkfood/api/get/account/${payload}`);
            return res.data
        
        } catch (error) {
            console.log(error);
        }
    }
  )

export const CreateAccount= createAsyncThunk('/CreateAccount',
  // Declare the type your function argument here:
  async (payload) => {
      try {
          const res = await axios.post(`http://localhost:5000/vnkfood/api/post/account/`,payload.data);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)

export const deleteAccount= createAsyncThunk('/deleteAccount',
  // Declare the type your function argument here:

  async (payload) => {
      console.log(payload,'--------------');
      try {
          const res = await axios.delete(`http://localhost:5000/vnkfood/api/delete/account/${payload}`);
          return res.data
      } catch (error) {
          console.log(error);
      }
  }
)
export const loginAdmin = createAsyncThunk(
	'authAdmin/login',
	async (payload) => {
		try {
			const res = await axios.post(
				'http://localhost:5000/account/login',
				payload,
			);
			localStorage.setItem('admin', JSON.stringify(res.data));
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);

  export const AllAccount = createSlice(
    {
        name:"Account",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            // get all hoa don
            .addCase(getAllAccount.pending,(state,action)=>{
                state.listAccount = [];
            })
            .addCase(getAllAccount.fulfilled,(state,action)=>{
                state.listAccount = action.payload;
            })
            .addCase(getAllAccount.rejected,(state,action)=>{
                state.listAccount = []
            })
            // // get chi tiet hoa don
            .addCase(getChiTietAccount.pending,(state,action)=>{
                
            })
            .addCase(getChiTietAccount.fulfilled,(state,action)=>{
                state.AccountDetail = action.payload;
            })
            .addCase(getChiTietAccount.rejected,(state,action)=>{
              
            })
            // create account
            .addCase(CreateAccount.pending,(state,action)=>{
                
            })
            .addCase(CreateAccount.fulfilled,(state,action)=>{
                state.listAccount.listAccount.push(action.payload);
               
            })
            .addCase(CreateAccount.rejected,(state,action)=>{
              
            })

            // delete account
            .addCase(deleteAccount.pending,(state,action)=>{
                
            })
            .addCase(deleteAccount.fulfilled,(state,action)=>{
                for (let i = 0; i < state.listAccount.length; i++) {
                    if (state.listAccount[i]._ID_Account === action.payload) {
                      state.listAccount.splice(action.payload, 1);
                    }
                  }
               
            })
            .addCase(deleteAccount.rejected,(state,action)=>{
              
            })
        }
    }
)
export default AllAccount.reducer;