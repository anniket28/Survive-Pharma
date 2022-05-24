import connectDB from "../../../middleware/db";
import Products from "../../../modals/Products";

const handler=async(req,res)=>{
    let product=await Products.findById(req.query.id)
    res.json({product})
}

export default connectDB(handler)