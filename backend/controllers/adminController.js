import validator from "validator"
import bycrpt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import organizerModel from "../models/organizerModel"
import jwt from "jsonwebtoken"


//API for adding organizer
const addOrganizer = async (req,res) =>{

    try{
        const { name, email, password, category, experience, about, address} = req.body
        const imageFile = req.file

        // console.log({ name, email, password,category, experience, about, address},imageFile);

        //checking for all data to add organizer
        if (!name || !email || !password || !category || !experience || !about || !address){
            return res.json({success:false,message:"Missing Details"})
        }

        //validate email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter a valid email"})
        }

           //validate strong passsword
           if(password.length < 5){
            return res.json({success:false,message:"Enter a strong password"})
        }

        //Hashing doctor password
        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bycrpt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imgeURL = imageUpload.secure_url

        const organizerData = {
            name,
            email,
            image:imgeURL,
            password:hashedPassword,
            category,
            experience,
            about,
            address
        }

        const newOrganizer = new organizerModel(organizerData)
        await newOrganizer.save()

        res.json({success:true, message: "New organizer added"})
        
    }catch(error){
        console.log(error);
        res.json({success:true, message: error.message})
    }
}

//API for admin
const loginAdmin = async (req, res) =>{
    try{
        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true, token})
        }
        else{
        res.json({success:false, message: "Invalid credentials"})
        }
    }
    catch(error){ 
        console.log(error);
        res.json({success:true, message: error.message})   
    }
}

export {addOrganizer,loginAdmin}