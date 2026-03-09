import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminServie from "./adminService";

const adminSlice = createSlice({
    name : 'admin',
    initialState : {
        totalusers : [],
        totalinfluencers : [],
        totalbookings : [],
        totalcomments : [],
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : "",
        edit : {Influencer : {}, isEdit : false},

    },

    reducers : {
         editfunction : (state, action)=> {
            return {
                ...state,
                edit : {Influencer : action.payload , isEdit : true}
            }
         },

        //  resetEdit : (state, action) => {
        //      return{
        //         ...state,
        //         edit : {Influencer : {}, isEdit : true}
        //      }
        //  }
    },

    extraReducers : (builder) => {

        builder
        .addCase(adminFetchInfluencer.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminFetchInfluencer.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.totalinfluencers = action.payload

        })
        .addCase(adminFetchInfluencer.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
        .addCase(adminFetchBookings.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminFetchBookings.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.totalbookings = action.payload

        })
        .addCase(adminFetchBookings.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
        .addCase(adminFetchAllUsers.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminFetchAllUsers.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.totalusers = action.payload

        })
        .addCase(adminFetchAllUsers.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
        .addCase(adminFetchAllComments.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminFetchAllComments.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.totalcomments = action.payload

        })
        .addCase(adminFetchAllComments.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
        .addCase(adminAddNewInfluencer.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = action.payload
        })
        .addCase(adminAddNewInfluencer.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.totalinfluencers = [...state.totalinfluencers, action.payload]
         
        })
        .addCase(adminAddNewInfluencer.rejected , (state, action)=> {
            console.error('Reject', action.payload)
            
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })

        .addCase(adminUpdate.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminUpdate.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.totalinfluencers = state.totalinfluencers.map((item)=> item._id === action.payload._id ? action.payload : item),
            state.edit = {Influencer : {}, isEdit : false}
        })
        .addCase(adminUpdate.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = ''
        })
        .addCase(adminremove.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminremove.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.totalinfluencers = state.totalinfluencers.filter((item)=> item._id !== action.payload.id)
        })
        .addCase(adminremove.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })

        .addCase(adminbooking.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(adminbooking.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.totalbookings = state.totalbookings.map((item)=>item._id === action.payload._id ? action.payload : item)
        })
        .addCase(adminbooking.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        }) 
        .addCase(admincomment.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
        })
        .addCase(admincomment.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.totalcomments =[...state.totalcomments,  action.payload]
        })
        .addCase(admincomment.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        }) 

    }
    
})


export const {editfunction, resetEdit} = adminSlice.actions

export default adminSlice.reducer


export const adminFetchInfluencer = createAsyncThunk('ADMIN/Influencers', async(_, thunkAPI)=> {

try {
  return await adminServie.adminGetAllInfluencers()
} catch (error) {   
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    
}

})

export const adminFetchBookings = createAsyncThunk('ADMIN/Booking', async(_, thunkAPI)=> {

    let token = thunkAPI.getState().auth.user.token    
try {
  return await adminServie.adminGetAllBookings(token)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    
}

})
export const adminFetchAllUsers = createAsyncThunk('ADMIN/Users', async(_, thunkAPI)=> {

    let token = thunkAPI.getState().auth.user.token    
try {
  return await adminServie.adminGetAllUsers(token)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    
}

})

export const adminFetchAllComments = createAsyncThunk('ADMIN/Comments', async(_, thunkAPI)=> {

    let token = thunkAPI.getState().auth.user.token    
try {
  return  adminServie.adminGetAllComments(token)
} catch (error) {
    // console.log(error);
    
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    
}

})

export const adminAddNewInfluencer = createAsyncThunk('ADMIN/Add_Influencer', async(Influencer, thunkAPI)=> {

    let token = thunkAPI.getState().auth.user.token    
try {
  return  adminServie.adminAddInfluencer(token, Influencer)
} catch (error) {
    // console.log(error);
    console.error('Caught error:', error);
console.error('Error response:', error?.response);
console.error('Error message:', error?.response?.data?.message);
    const message = error?.response?.data?.message || error.message || 'Something went wrong'
    // console.error('error in thunk', error);
    
    return thunkAPI.rejectWithValue('Toast has error')
    
}

})

export const adminUpdate = createAsyncThunk('ADMIN/Update', async(Influencer, thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token
    try {
        return  adminServie.adminUpdateInfluencer(token, Influencer)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
        
    }
})

export const adminremove = createAsyncThunk('ADMIN/REMOVE',async(Influencer, thunkAPI)=> {
    
    // console.log(Influencer._id);
    
    let token = thunkAPI.getState().auth.user.token
    try {
        return adminServie.adminRemoveInfluencer(token, Influencer)
    } catch (error) {
        const message = error.response.data.message
      return   thunkAPI.rejectWithValue(message)
        
    }

} )


export const adminbooking = createAsyncThunk('ADMIN/BOOKING',async(selectedBooking, thunkAPI)=> {
    
    // console.log(selectedBooking, 'booking');

    
    let token = thunkAPI.getState().auth.user.token
    try {
        return adminServie.adminUpdateBooking(token, selectedBooking)
    } catch (error) {
        const message = error.response.data.message
      return   thunkAPI.rejectWithValue(message)
        
    }

} )

export const admincomment = createAsyncThunk('ADMIN/Comment',async(formData, thunkAPI)=> {
    
    // console.log(selectedBooking, 'booking');

    
    let token = thunkAPI.getState().auth.user.token
    try {
        return adminServie.adminUpdateComment(token, formData)
    } catch (error) {
        const message = error.response.data.message
      return   thunkAPI.rejectWithValue(message)
        
    }

} )