import connectDB from "../../../middleware/db";
import Products from "../../../modals/Products";

const handler=async(req,res)=>{
    let products=await Products.find({productCategory:req.query.category})
    res.json({products})
}

export default connectDB(handler)