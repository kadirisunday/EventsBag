import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRouter.js'

// app config
const app = express()
const port = process.env.PORT  || 4000
connectDB()
connectCloudinary()

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// api endpoint
app.use('api/admin',adminRouter)
// localhost/api/admin/add-organizer
app.get('/', (req,res)=>{
    res.send('API WORKING!! GREAT')
})

app.listen(port, ()=> console.log("Server started", port))