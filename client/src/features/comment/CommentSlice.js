import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CommentService from "./CommentService";

const CommentSlice = createSlice({

    name : 'comment',
    initialState : {
        commentLoading : false,
        commentSuccess : false,
        commentError : false,
        comments : []

    },

    reducers : {
              resetcomment : (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
            state.comments = []
        }
    },

    extraReducers : (builder) => {

        builder
        .addCase(GetCommentByUser.pending, (state, action)=> {
          state.commentLoading = true,
          state.commentSuccess = false,
          state.commentError = false
        })
        .addCase(GetCommentByUser.fulfilled, (state, action)=> {
          state.commentLoading = false,
          state.commentSuccess = true,
          state.commentError = false
          state.comments = action.payload
        })
        .addCase(GetCommentByUser.rejected, (state, action)=> {
          state.commentLoading = true,
          state.commentSuccess = false,
          state.commentError = false
          state.message = action.payload
        })

        .addCase(AddNewCommentByUser.pending, (state, action)=> {
          state.commentLoading = true,
          state.commentSuccess = false,
          state.commentError = false
        })
        .addCase(AddNewCommentByUser.fulfilled, (state, action)=> {
          state.commentLoading = false,
          state.commentSuccess = true,
          state.commentError = false
          state.comments = [...state.comments, action.payload]
        })
        .addCase(AddNewCommentByUser.rejected, (state, action)=> {
          state.commentLoading = true,
          state.commentSuccess = false,
          state.commentError = false
          state.message = action.payload
        })

    }


})

export default CommentSlice.reducer

export const {resetcomment} = CommentSlice.actions

export const GetCommentByUser = createAsyncThunk('Comment/User', async(id, thunkAPI) => {

// console.log(id);
    let token = thunkAPI.getState().auth.user.token
    try {
        return await CommentService.fetchCommentByUser(id, token)
    } catch (error) {
        console.log(message);
        
    }


})
export const AddNewCommentByUser = createAsyncThunk('NewComment/User', async(commentData, thunkAPI) => {

// console.log(id);
    let token = thunkAPI.getState().auth.user.token
    try {
        return await CommentService.AddCommentByUser(commentData, token)
    } catch (error) {
        console.log(message);
        
    }


})

