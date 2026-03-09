import axios from "axios"

const userGetAllBookings = async(token) => {
    // console.log('UserBooking is working');
    

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const resposne =await axios.get('/api/user/bookings/', options)
    // console.log(resposne.data);
    return resposne.data
    
}
const userAddBooking = async(id, token) => {
    console.log('UserAddBooking is working ' , id);
    

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const resposne =await axios.post(`/api/user/bookings/${id}` ,{}, options)
    // console.log(resposne.data);
    return resposne.data
    
}
const userSingleBooking = async(id, token) => {
    console.log('Usersingle is working ' , id);
    

  const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const resposne =await axios.get(`/api/user/bookings/${id}`, options)
    // console.log(resposne.data);
    return resposne.data
    
}


 const BookingService = {userGetAllBookings, userAddBooking, userSingleBooking}

 export default BookingService