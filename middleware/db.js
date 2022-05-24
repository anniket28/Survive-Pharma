import mongoose from "mongoose";
import config from '../config.json'

const connectDB=handler=>async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect(config.Mongo_URI)
    return handler(req,res)
}

export default connectDB