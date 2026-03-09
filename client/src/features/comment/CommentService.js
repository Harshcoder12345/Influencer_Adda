import axios from "axios";3


const fetchCommentByUser = async(id, token) => {
 
    // console.log('Fetch Comment is working');
    // console.log(id);
    

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    

const response = await axios.get(`/api/user/bookings/${id}/comment`, options)
// console.log(response.data);
return response.data

}
const AddCommentByUser = async(commentData, token) => {

    console.log(commentData.id,commentData.text,commentData, 'comment add' );
    

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
   
        const response = await axios.post(`/api/user/bookings/${commentData.id}/comment/`, commentData, options)
// console.log(response.data); 
  


return response.data

}


const CommentService = {fetchCommentByUser, AddCommentByUser}

export default CommentService