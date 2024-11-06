import express from 'express'
import { addOrganizer,loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-organizer',upload.single('image'),addOrganizer)
adminRouter.post('/login',loginAdmin)

export default adminRouter