import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        access_token: "",
        isLoggedIn: false
    },
    reducers:{
        login:(state,action) => {
            console.log(action.payload);
            return {
                ...state,
                   access_token : action.payload.access_token,
                   isLoggedIn : action.payload.isLoggedIn
            }
                
        },
        logout: (state) =>{
            state.user = null;
        }
    }
})


export const {login, logout} = userSlice.actions;
export const selectUser = (state) => state;
export default userSlice.reducer;