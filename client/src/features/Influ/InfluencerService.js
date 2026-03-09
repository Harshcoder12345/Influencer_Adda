import axios from "axios";


const getSingleInfluencer = async(id)=> {
    // console.log(id, 'Influncer Id');
    
    const response = await axios.get(`/api/influencer/single/${id}`)
    // console.log(response.data);
    return response.data
    
}

const InfluencerService = {getSingleInfluencer}

export default InfluencerService

