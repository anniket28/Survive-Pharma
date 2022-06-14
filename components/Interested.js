import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import {BsCheckCircle} from 'react-icons/bs'
import {IoCallSharp} from 'react-icons/io5'
import config from '../config.json'

const Interested = (props) => {
  const router=useRouter()

  const [countryCode, setcountryCode] = useState('+91')
  const [contactNumber, setcontactNumber] = useState('')

  const handleChange=(event)=>{
      if(event.target.name=='countryCode'){
        setcountryCode(event.target.value)
      }
      else if(event.target.name=='contactNumber'){
        setcontactNumber(event.target.value)
      }
  }

  const handleContactSubmit=async(event)=>{
      event.preventDefault()
      const userData={countryCode,contactNumber}
      
      fetch(`${config.host}/api/postReqs/postUserContact?productName=${props.modalProductName}&productId=${props.modalProductId}`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userData)
      })
      .then(contactSubmit=>contactSubmit.text())
      .then(result=>{
        Swal.fire({
          title: 'Success',
          text: 'Thank you for showing interest in our product, we will contact you soon!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setcountryCode('+91')
        setcontactNumber('')
      })
    }

    const handleReadMore=()=>{
      document.getElementById('contactModal').style.display='none'
      document.body.style.overflow='visible'
      const elements = document.getElementsByClassName('modal-backdrop');
      while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
      }
    }

  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="relative w-full h-full md:p-4 max-w-7xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow border-t-[1px]">
                <div className="flex items-center justify-between p-2 xl:p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white flex items-center">
                      <BsCheckCircle /> <span className='ml-[2px]'>Yes,I am interested</span>
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="contactModal" data-bs-dismiss="modal" aria-label="Close">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                    </button>
                </div>
                <div className='flex flex-col md:flex-row'>
                  {/*  */}
                  <div className='border-r-[1px] md:w-1/2 px-3 py-2'>
                    <div className='text-center'>
                      <Image width={200} height={200} src={`/ProductImages/${props.modalProductImage}`} alt={props.modalProductName}></Image>
                    </div>
                    <div>
                      <h4 className='pb-[5px] font-semibold text-base lg:text-lg'>
                        {props.modalProductName}
                      </h4>
                      <p className='pt-[5px] border-t-[1px] text-slate-800 text-sm lg:text-base'>
                        {props.modalProductDesc} <Link href={`/know-more/${props.modalProductId}`} passHref><button onClick={handleReadMore} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Read More...</button></Link>
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='px-3 py-2'>
                    <h4 className='font-semibold text-center lg:text-lg'>Connect with <span className='text-sky-500 font-bold'>SURVIVE</span> <span className='text-green-500 font-bold'>PHARMA</span></h4>
                    <div className='text-slate-700 text-center text-sm lg:text-base my-1'>Leave your contact number and we will call you</div>
                      <form onSubmit={handleContactSubmit} className='mt-3'>
                          <div className='flex mx-auto mb-1 w-3/4'>
                            <select className='bg-green-500 mx-1 text-white outline-sky-500 rounded-md bordeer-[1px] space-x-1' onChange={handleChange} name="countryCode" id="ccode">
                                <option value="+91">India +91</option>
                                <option value="+1">USA +1</option>
                                <option value="+971">UAE +971</option>
                                <option value="+44">UK +44</option>
                                <option value="+61">Aus +61</option>
                            </select>
                            <input type="number" onChange={handleChange} name='contactNumber' className='rounded-md px-2 py-1 w-full border-2 outline-sky-500' placeholder='Contact Number' />
                          </div>
                          <div className='text-center mt-3'>
                            <button className='bg-sky-500 px-2 py-1 text-white rounded-md' type='submit'>Submit</button>
                          </div>
                      </form>
                      <div className='text-center'>
                        <hr className='mt-4 mb-2'/>
                        <h5 className='text-[15px] md:text-base lg:text-lg font-semibold mb-3'>Call Us</h5>
                        <div>
                          <h6 className='flex justify-center my-1'>
                            <a className='flex items-center text-sm lg:text-base text-slate-800 hover:text-black' href="tel:+91 9811328846"><IoCallSharp /><span className='ml-1'>+91 9811328846</span></a>
                          </h6>
                          <h6 className='flex justify-center my-2'>
                            <a className='flex items-center text-sm lg:text-base text-slate-800 hover:text-black' href="tel:+91 8860217140"><IoCallSharp /><span className='ml-1'>+91 8860217140</span></a>
                          </h6>
                          <h6 className='flex justify-center my-1'>
                            <a className='flex items-center text-sm lg:text-base text-slate-800 hover:text-black' href="tel:+91 8700908304"><IoCallSharp /><span className='ml-1'>+91 8700908304</span></a>
                          </h6>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interested