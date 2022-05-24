import connectDB from "../../../middleware/db";
import Products from "../../../modals/Products";

const handler=async(req,res)=>{
    if(req.method=='POST'){
        for (let index = 0; index < req.body.length; index++) {
            let newProduct=new Products({
                productName:req.body[index].productName,
                productImage:req.body[index].productImage,
                productCategory:req.body[index].productCategory,
                productPrice:req.body[index].productPrice,
                productDescription:req.body[index].productDescription,
                productBrochure:req.body[index].productBrochure
            })
            await newProduct.save()
        }
        res.status(200).json("Added Successfully")
    }
    else{
        res.status(400).json("Not Allowed")
    }
}

export default connectDB(handler)