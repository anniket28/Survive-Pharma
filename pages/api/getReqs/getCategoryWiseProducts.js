import connectDB from "../../../middleware/db";
import Products from "../../../modals/Products";

const handler=async(req,res)=>{
    let categoryWiseProds=await Products.find({productCategory:req.query.category})

    let categoryWiseProducts=[]
    for (let index = 0; index < categoryWiseProds.length; index++) {
        if(categoryWiseProds[index].productCategory==req.query.category && categoryWiseProds[index]._id!=req.query.id){
            categoryWiseProducts.push(categoryWiseProds[index])
        }
    }

    res.json({categoryWiseProducts})
}

export default connectDB(handler)