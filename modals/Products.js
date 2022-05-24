const mongoose=require('mongoose')

const productsSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    productCategory:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    productBrochure:{
        type:String
    }
})

mongoose.models={}
export default mongoose.model('Product',productsSchema)