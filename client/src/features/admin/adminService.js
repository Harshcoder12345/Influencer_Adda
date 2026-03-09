import axios from 'axios'


const adminGetAllInfluencers = async() => {
    const resposne =await axios.get('/api/influencer')
    // console.log(resposne.data);
    return resposne.data
    
}
const adminGetAllBookings = async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const resposne =await axios.get('/api/admin/bookings', options)
    // console.log(resposne.data);
    return resposne.data
    
}
const adminGetAllUsers= async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const resposne =await axios.get('/api/admin/users', options)
    // console.log(resposne.data);
    return resposne.data
    
}

const adminGetAllComments= async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const resposne =await axios.get('/api/admin/comments', options)
    // console.log(resposne.data);
    return resposne.data
    
}

const adminAddInfluencer= async(token, Influencer) => {

    console.log(Influencer, `At AdmimAdd Influencer`);
    
    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const resposne =await axios.post("/api/admin/influencer", Influencer, options)
    console.log(resposne);
    
    return resposne.data
    
}
const adminUpdateInfluencer= async(token, Influencer) => {

    // console.log(Influencer, `Update Influencer`);
    
    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const resposne =await axios.put(`/api/admin/influencer/${Influencer._id}` ,Influencer, options)
    return resposne.data
    
}

const adminRemoveInfluencer = async(token, Influencer)=> {
    // console.log(Influencer._id, 'Influencer Id');
    
 
const options = {
    headers : {
        authorization : `Bearer ${token}`
    }
}

const response = await axios.delete(`/api/admin/influencer/${Influencer._id}`, options)
return response.data

}

const adminUpdateBooking = async(token, selectedBooking)=> {
    // console.log(selectedBooking, 'Booking Data');
    
 
const options = {
    headers : {
        authorization : `Bearer ${token}`
    }
}

const response = await axios.put(`/api/admin/bookings/${selectedBooking._id}`, {status : selectedBooking.status}, options)
console.log(response.data);
return response.data


}


const adminUpdateComment = async(token,formData )=> {
    // console.log(formData, 'Admin Update Comment');
    
 
const options = {
    headers : {
        authorization : `Bearer ${token}`
    }
}


const response = await axios.post(`/api/user/bookings/${formData.bid}/comment/`, {text:formData.activeReplytext}, options)
return response.data
console.log(response.data);

}


const adminServie = {adminGetAllInfluencers, adminGetAllBookings, adminGetAllUsers, adminGetAllComments, adminAddInfluencer, adminUpdateInfluencer, adminRemoveInfluencer, adminUpdateBooking, adminUpdateComment}

export default adminServie