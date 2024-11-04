import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI || `mongodb://localhost/${DB_NAME}`);
        console.log("connected to db",DB_NAME);
        console.log("listening on port ", process.env.PORT || 5000);
    } catch (error) {
        console.log("error in db connection",error);
        throw error
        
    }
}




















export default connectDB