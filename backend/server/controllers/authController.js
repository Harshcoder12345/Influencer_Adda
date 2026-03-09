const asyncHandler = require('express-async-handler')
const  User = require('../models/userModel')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');






const registeruser = asyncHandler(async(req, res)=> {

    const {name, email, password, phone} = req.body


console.log(name, email, password, 'testingtestg' ) 

    if(!name || !email || !password || !phone ){
      res.status(400)
      throw new Error("Please fill the complete details")
    }


    const EmailExist =await  User.findOne({email : email})
    const PhoneExits = await User.findOne({phone : phone})

    if(EmailExist && PhoneExits){
        res.status(400)
        throw new Error('User is Already Exist')
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    const user = await User.create({name, email, password:hashPassword, phone})
     
    if(!user){
        res.status(400)
        throw new Error(`User is Not Found`)
    }else{
        res.status(200)
        res.json({
            id: user._id,
            name : user.name,
            email : user.email,
            phone : user.phone,
            isAdmin : user.isAdmin,
            since : user.createdAt,
            token : generateToken(user._id)
        })
    }
 
    
    
})


const loginuser = asyncHandler(async(req, res)=> {

    const {email , password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please fill all the details found')
    }

    const user = await User.findOne({email : email})

    if(user && bcrypt.compareSync(password, user.password)){
res.status(200).json({
    id : user._id,
    name : user.name,
    phone : user.phone,
    since : user.createdAt,
    email : user.email,
    isAdmin : user.isAdmin,
    token : generateToken(user._id)
})
}else{
    res.status(401)
    throw new Error('Invalid Credentials ')
}

    
}
)

const generateToken = (id) => {
   return (
    token = jwt.sign({id}, process.env.JWT_TOKEN, {expiresIn: "30d"})
   ) 

}


const privateController = (req, res) => {
    res.json({
        id : req.user._id,
        name : req.user.name,
        email : req.user.email,
        isAdmin : req.user.isAdmin,
        phone : req.user.phone,
        since : req.user.createdAt,
       
    })
}




 module.exports = {registeruser, loginuser,privateController}


