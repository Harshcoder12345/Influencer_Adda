import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authSerice from "./authService";


const userExist = JSON.parse(localStorage.getItem('user'))
const authSlice = createSlice({

    name : "auth",
    initialState : {
        user :userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "",
    },
    reducers : {
        resetauth : (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
            state.user = null
        }
    },
    extraReducers : (builder) => {
       
        builder
        .addCase(RegisterUser.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(RegisterUser.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.user = action.payload
        })
        .addCase(RegisterUser.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload

        })

        .addCase(loginUser.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(loginUser.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.user = action.payload
        })
        .addCase(loginUser.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload

        })
        .addCase(logOut.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = false,
            state.user = null

        })
       
     

    },
})

export const {resetauth} = authSlice.actions

export default authSlice.reducer;

export const RegisterUser = createAsyncThunk("Register/User",async(formData, thunkAPI)=> {
try { 
   return await authSerice.register(formData)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)  
}

})



export const loginUser = createAsyncThunk("login/User",async(formData, thunkAPI)=> {
   
try {     
    return await authSerice.login(formData)
    
} catch (error) {  
    const message = error.response.data.message
    thunkAPI.rejectWithValue(message)
    
}

})

export const logOut = createAsyncThunk("logOut/User",async()=> {
   
localStorage.removeItem('user')

})