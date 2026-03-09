import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InfluencerService from "./InfluencerService";

const InfluencerSlice = createSlice({

    name : 'Influencer',
    initialState : {
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : '',
        SingleInfluencer : []
    },

    reducers : {},

    extraReducers :(builder)=> {
        builder
        .addCase(fetchSingleInfluencer.pending,(state, action)=>{
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        })
        .addCase(fetchSingleInfluencer.fulfilled,(state, action)=>{
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.message = ''
            state.SingleInfluencer = action.payload 
        })
        .addCase(fetchSingleInfluencer.rejected,(state, action)=>{
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.message = action.payload
        })
    }
})

export default InfluencerSlice.reducer


export const fetchSingleInfluencer = createAsyncThunk('Fetch/Single', async(id, thunkAPI)=> {
    try {
        return await InfluencerService.getSingleInfluencer(id)
    } catch (error) {
        console.log(error);
        const message = error.response.data.message
       return thunkAPI.rejectWithValue(message)
        
    }
})


