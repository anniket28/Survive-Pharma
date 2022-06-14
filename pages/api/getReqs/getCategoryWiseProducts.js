import connectDB from "../../../middleware/db";
import Products from "../../../modals/Products";

const handler=async(req,res)=>{
    let categoryWiseProds=await Products.find({productCategory:req.query.category})

    let itemIndexToRemove=categoryWiseProds.findIndex(e=>e._id==req.query.id)
    categoryWiseProds.splice(itemIndexToRemove,1)

    let myArray=[]
    while(myArray.length!=6){
        let myRandomVal=Math.floor(Math.random()*(categoryWiseProds.length-1))
        if(!myArray.includes(myRandomVal)){
            myArray.push(myRandomVal)
        }
    }

    let categoryWiseProducts=[]
    for (let index = 0; index < myArray.length; index++) {
        categoryWiseProducts.push(categoryWiseProds[myArray[index]])
    }

    res.json({categoryWiseProducts})
}

export default connectDB(handler)