import React,{useState} from 'react'
import Head from 'next/head'
import Swal from 'sweetalert2'
import config from '../config.json'

const GetInTouch = () => {
    // Use States
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [contact, setcontact] = useState('')
    const [enquiry, setenquiry] = useState('')

    // On Change
    const handleChange=(event)=>{
        if(event.target.name==='name'){
            setname(event.target.value)
        }
        else if(event.target.name==='email'){
            setemail(event.target.value)
        }
        else if(event.target.name==='contact'){
            setcontact(event.target.value)
        }
        else if(event.target.name==='enquiry'){
            setenquiry(event.target.value)
        }
    }

    // Handle Submit
    const handleSubmit=(event)=>{
        event.preventDefault()
        const userData={name,email,contact,enquiry}

        fetch(`${config.host}/api/postReqs/postUserEnquiry`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        }).then(response=>response.text())
        .then(result=>{
            Swal.fire({
                title: 'Success',
                text: 'Thank you for getting in touch with us! We will get back to you soon.',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            setname('')
            setemail('')
            setcontact('')
            setenquiry('')
        })
    }

    // Handle Reset
    const handleReset=()=>{
        setname('')
        setemail('')
        setcontact('')
        setenquiry('')
    }
  return (
    <div>
        {/* Head */}
        <Head>
            <title>Get in touch | Survive Pharma</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Survive Pharma Get in touch Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/*  */}
        <div className='my-10 px-5 sm:px-20 md:px-40 lg:px-12 xl:px-[123px]'>
            <h2 className='text-2xl text-center font-semibold sm:text-3xl md:text-3xl lg:text-3xl mb-5'>Get in touch with us</h2>
            <form className='w-11/12 mx-auto lg:w-1/2'>
                {/*  */}
                <div className='mb-3'>
                    <label htmlFor="nam" className='sm:text-lg md:text-lg lg:text-lg'>Name<sup className='text-red-500'>*</sup> :</label>
                    <input type="text" className='text-sm sm:text-base outline-sky-500 w-full border-[1px] border-gray-300 rounded px-2 py-[6px] mt-1' name="name" id="nam" onChange={handleChange} value={name} placeholder='Enter your name here' />
                </div>
                {/*  */}
                <div className='mb-3'>
                    <label htmlFor="mail" className='sm:text-lg md:text-lg lg:text-lg'>Email<sup className='text-red-500'>*</sup> :</label>
                    <input type="text" className='text-sm sm:text-base outline-sky-500 w-full border-[1px] border-gray-300 rounded px-2 py-[6px] mt-1' name="email" id="mail" onChange={handleChange} value={email} placeholder='Enter your email here' />
                </div>
                {/*  */}
                <div className='mb-3'>
                    <label htmlFor="cont" className='sm:text-lg md:text-lg lg:text-lg'>Contact Number<sup className='text-red-500'>*</sup> :</label>
                    <input type="number" className='text-sm sm:text-base outline-sky-500 w-full border-[1px] border-gray-300 rounded px-2 py-[6px] mt-1' name="contact" id="cont" onChange={handleChange} value={contact} placeholder='Enter your contact here' />
                </div>
                {/*  */}
                <div className='mb-3'>
                    <label htmlFor="enq" className='sm:text-lg md:text-lg lg:text-lg'>Enquiry / Message<sup className='text-red-500'>*</sup> :</label>
                    <textarea className='text-sm sm:text-base outline-sky-500 w-full border-[1px] border-gray-300 rounded px-2 py-[6px] mt-1' name="enquiry" id="enq" cols="30" rows="5" onChange={handleChange} value={enquiry} placeholder='Write your enquiry or message here'></textarea>
                </div>
                {/*  */}
                <div className='space-x-2'>
                    <button onClick={handleSubmit} className='px-3 py-1 bg-sky-500 text-white hover:bg-green-500 rounded cursor-pointer' type='submit'>Submit</button>
                    <button className='px-3 py-1 bg-sky-500 text-white hover:bg-green-500 rounded cursor-pointer' onClick={handleReset} type='reset'>Reset</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default GetInTouch