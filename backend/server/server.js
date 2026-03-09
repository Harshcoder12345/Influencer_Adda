const express = require('express')
require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db_config')
const errorHandler = require('./middleware/errorHandler')




const PORT = process.env.PORT || 5000

const app = express();

connectDB();

// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res)=> {
    res.json({
        msg: 'Welcome to API 1.0'
    })
})

app.listen(PORT , ()=> {
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`.bgBlue);
})


// Auth Router

app.use('/api/auth', require('./routes/authRoutes'))


// Admin Router

app.use('/api/admin', require('./routes/adminRoutes'))


// User-Booking Router

app.use('/api/user/bookings', require('./routes/BookingRoutes'))


// Influencer

app.use('/api/influencer', require('./routes/influencerRoutes'))


// Comment
app.use('/api/user/bookings/', require('./routes/BookingRoutes'))


// Erro Handler for all
app.use(errorHandler)

// http://localhost:8080