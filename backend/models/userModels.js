import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    image:{type:String, default:""},
    address:{type:Object, required:true},
    gender: {type:String, default:"Not Selected"},
    dob: {type:String, default:"Not Selected"},
    gender: {type:String, default:"000-0000-0000"}
    
})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel