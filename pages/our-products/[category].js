import React,{useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProductRange from '../../components/ProductRange'
import {MdOutlineDescription} from 'react-icons/md'
import {BsCheckCircle} from 'react-icons/bs'
import Sidebar from '../../components/Sidebar'
import config from '../../config.json'
import Products from '../../modals/Products'
import mongoose from 'mongoose'
import Interested from '../../components/Interested'

// import {FaRupeeSign} from 'react-icons/fa'

const Category = (props) => {
    // Router
    const router=useRouter()
    
    const [products, setproducts] = useState(props.products)
    const [modalProdId, setmodalProdId] = useState('')
    const [modalProdName, setmodalProdName] = useState('')
    const [modalProdImage, setmodalProdImage] = useState('')
    const [modalProdDesc, setmodalProdDesc] = useState('')

    let prodCategory=""
    const updateProductCategory=()=>{
      let prodCat=router.query.category.split(/(?=[A-Z])/)
      for (let index = 0; index < prodCat.length; index++) {
        prodCategory+=prodCat[index]+" "
      }
    }

    updateProductCategory()

    const handleCategoryClick=async(productsRangeCategory)=>{
      let data=await fetch(`${config.host}/api/getReqs/getCategoryProducts?category=${productsRangeCategory}`)
      let parsedData=await data.json()
      let allProducts=parsedData.products
      setproducts(allProducts)
      router.push(`/our-products/${productsRangeCategory}`)
      updateProductCategory()
    }

    const handleContactModal=(prodId,prodName,prodImage,prodDesc)=>{
      prodDesc=prodDesc.substr(0,115)
      setmodalProdId(prodId)
      setmodalProdName(prodName)
      setmodalProdImage(prodImage)
      setmodalProdDesc(prodDesc)
    }

  return (
    <div>
        {/* Head */}
        <Head>
            <title>Our Products - {prodCategory} | Survive Pharma</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Survive Pharma Products Page" />
        </Head>

        <ProductRange handleCategoryClick={handleCategoryClick} />

        <Sidebar products={products} />

        <div className='my-5'>
          <h2 className='text-center font-semibold text-[22px] md:text-[25px] lg:text-[28px]'>{prodCategory}</h2>
          {/*  */}
          <div className='flex flex-wrap flex-col px-3 md:flex-row md:justify-around lg:justify-between lg:flex-row md:px-16 lg:px-20 xl:px-[108px]'>
            {/*  */}
            {products.map((prod)=>{
              return <div id={prod._id} key={prod._id} className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
                <Interested modalProductId={modalProdId} modalProductName={modalProdName} modalProductImage={modalProdImage} modalProductDesc={modalProdDesc} />
                <div className='shadow px-3 rounded-t-md text-center'>
                  <Image width={200} height={200} src={`/ProductImages/${prod.productImage}`} alt={prod.productName}></Image>
                </div>
                <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[100px] lg:h-[90px] xl:h-[80px]'>
                  <Link href={`/know-more/${prod._id}?product=${prod.productName}`} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>{prod.productName}</a></Link>
                  {/* <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> {prod.productPrice} /Piece</h4> */}
                </div>
                <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                  <button onClick={()=>handleContactModal(prod._id,prod.productName,prod.productImage,prod.productDescription)} data-bs-toggle="modal" data-bs-target="#contactModal" className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                  <Link href={`/know-more/${prod._id}?product=${prod.productName}`} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
                </div>
              </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default Category

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(config.Mongo_URI)
  }
  let products=await Products.find({productCategory:context.query.category})

  return{
    props:{products:JSON.parse(JSON.stringify(products))}
  }
} 