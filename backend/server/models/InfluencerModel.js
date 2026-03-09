const {mongoose } = require("mongoose");

const InfluencerSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true, "Please Enter the Name"],
    },
    niche : {
        type : String,
        required : [true, "Please Enter the niche"],
        enum : ['lifestyle', 'fashion', 'blog', 'devotional', 'game', 'devotional', 'comic', 'other', 'motivation']
    },
    gender : {
        type : String,
        required : [true, "Please Enter the Gender"],
        enum : ['male', 'female', 'other']
    },
    followers : {
        type :String,
        required : [true, "Please Enter the Followers"],
       

    },
    instagram_handle : {
        type : String,
        required : [true, "Please Enter the Instahandle"],
        unique : true,
    },
    rate : {
        type : String,
        required : [true, "Please Enter the rate"],
    },
    location : {
        type : String,
        required : [true, "Please Enter the location"]
    },
    isActive : {
        type : Boolean,
        default : true,
        required : true,
    },
    profilepic : {
        type : String,
        required : [true, "Please Enter the profile pic"]
    }

},
{
    timestamps : {}
}
)

module.exports = mongoose.model('Influencer', InfluencerSchema)