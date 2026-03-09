import { configureStore } from "@reduxjs/toolkit";
import auth from './features/auth/authSlice'
import admin from './features/admin/adminSlice'
import Influ from './features/Influ/InfluencerSlice'
import booking from './features/booking/BookingSlice.js'
import comment from './features/comment/CommentSlice.js'

const store = configureStore({
    reducer : {auth, admin, Influ, booking, comment}

})

export default store