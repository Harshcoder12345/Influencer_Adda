import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BookingService from "./BookingService";

const BookingSlice = createSlice({

    name : 'Booking',
    initialState : {
        
        isBookingLoading : false,
        isBookingSuccess : false,
        isBookingError : false,
        userbooking: [],
        singlebooking : [],
    },

     reducers : {},

     extraReducers : (builder) => {

builder.
addCase(userFetchBookings.pending, (state, action)=> {
    state.isBookingLoading = true,
    state.isBookingError = false,
    state.isBookingSuccess = false
})
.addCase(userFetchBookings.fulfilled, (state, action)=> {
    state.isBookingLoading = false,
    state.isBookingError = false,
    state.isBookingSuccess = true,
    state.userbooking = action.payload
})
.addCase(userFetchBookings.rejected, (state, action)=> {
    state.isBookingLoading = false,
    state.isBookingError = true,
    state.isBookingSuccess = false,
    state.message = action.payload
})
.addCase(userSliceAddBooking.pending, (state, action)=> {
    state.isBookingLoading = true,
    state.isBookingError = false,
    state.isBookingSuccess = false
})
.addCase(userSliceAddBooking.fulfilled, (state, action)=> {
    state.isBookingLoading = false,
    state.isBookingError = false,
    state.isBookingSuccess = true,
    state.userbooking = [...state.userbooking ,action.payload]
})
.addCase(userSliceAddBooking.rejected, (state, action)=> {
    state.isBookingLoading = false,
    state.isBookingError = true,
    state.isBookingSuccess = false,
    state.message = action.payload
})

.addCase(userFetchSingleBooking.pending, (state, action)=> {
    state.isBookingLoading = true,
    state.isBookingError = false,
    state.isBookingSuccess = false
})
.addCase(userFetchSingleBooking.fulfilled, (state, action)=> {
    state.isBookingLoading = false,
    state.isBookingError = false,
    state.isBookingSuccess = true,
    state.singlebooking = action.payload
})
.addCase(userFetchSingleBooking.rejected, (state, action)=> {
    state.isBookingLoading = false,
    state.isBookingError = true,
    state.isBookingSuccess = false,
    state.message = action.payload
})


     }



})


export default BookingSlice.reducer


export const userFetchBookings = createAsyncThunk('User/Booking', async(_, thunkAPI)=> {

    let token = thunkAPI.getState().auth.user.token    
try {
  return await BookingService.userGetAllBookings(token)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
}

})

export const userFetchSingleBooking = createAsyncThunk('User/SingleBooking', async(id, thunkAPI)=> {

    let token = thunkAPI.getState().auth.user.token    
try {
  return await BookingService.userSingleBooking(id, token)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
}

})

export const userSliceAddBooking = createAsyncThunk('UserAdd/Booking', async(id, thunkAPI)=> {

let token = thunkAPI.getState().auth.user.token    

try {
  return await BookingService.userAddBooking( id, token)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
}
})