import React from 'react'
import Link from 'next/link'
import {HiLocationMarker} from 'react-icons/hi'
import {FaUserCircle} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {IoCallSharp} from 'react-icons/io5'

const Footer = () => {
  // Open Brochure
  const openBrochure=()=>{
    window.open("/Brochures/Survive-Pharma-Brochure.pdf","_blank")
  }

  return (
    <div>
        <footer className='bg-slate-100 py-5 shadow-inner'>
            {/*  */}
            <div className='flex justify-center flex-col items-center space-y-5 md:flex-row md:space-x-20 md:space-y-0 lg:flex-row lg:space-y-0 lg:space-x-20'>
                {/*  */}
                <div className='flex flex-col'>
                    {/*  */}
                    <h3 className='text-xl font-semibold'>Main Menu</h3>
                    <div className='flex flex-col items-center'>
                        <Link href={'/'} passHref><a className='text-slate-600 hover:text-black mt-1'>Home</a></Link>
                        <Link href={'/our-products/NewItems'} passHref><a className='text-slate-600 hover:text-black'>Our Products</a></Link>
                        <Link href={'/our-profile'} passHref><a className='text-slate-600 hover:text-black'>Our Profile</a></Link>
                        <Link href={'/get-in-touch'} passHref><a className='text-slate-600 hover:text-black'>Get in touch</a></Link>
                    </div>
                </div>
                {/*  */}
                <div className='flex flex-col'>
                    {/*  */}
                    <h3 className='text-xl font-semibold'>Quick Links</h3>
                    <div className='flex flex-col items-center'>
                        <a href="tel:+91 8860217140" className='text-slate-600 hover:text-black mt-1'>Call Us</a>
                        <a href="mailto:survivepharma08@gmail.com" className='text-slate-600 hover:text-black cursor-pointer'>Email Us</a>
                        <button onClick={openBrochure} className='text-slate-600 hover:text-black cursor-pointer'>Our Brochure</button>
                        <a href='' className='text-slate-600 hover:text-black'>Reach Us</a>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='flex flex-col justify-between px-7 xl:px-8 my-10 space-y-7 lg:space-y-0 lg:flex-row'>
                {/*  */}
                <div>
                    <h3 className='flex items-center font-semibold justify-center lg:justify-start'><span className='text-3xl'><HiLocationMarker /></span><span className='text-xl'>Location</span></h3>
                    <div className='text-slate-600 ml-[30px] text-center lg:text-left'>
                        No. 138, Janta Flats Madipur,<br />
                        Rohtak Road, Near Madipur Metro Station,<br />
                        Punjabi Bagh, New Delhi-110063, Delhi, India
                    </div>
                </div>
                {/*  */}
                <div>
                    <h3 className='flex items-center font-semibold justify-center lg:justify-start'><span className='text-3xl'><FaUserCircle /></span><span className='text-xl ml-[2px]'>Proprietor</span></h3>
                    <div className='text-slate-600 ml-[30px] text-center lg:text-left'>
                        Gopal Verma
                    </div>
                </div>
                {/*  */}
                <div>
                    <h3 className='flex items-center font-semibold justify-center lg:justify-start'><span className='text-3xl'><MdEmail /></span><span className='text-xl ml-[2px]'>Email</span></h3>
                    <div className='text-slate-600 ml-[30px] text-center lg:text-left'>
                        survivepharma08@gmail.com
                    </div>
                </div>
                {/*  */}
                <div>
                    <h3 className='flex items-center font-semibold justify-center lg:justify-start'><span className='text-3xl'><IoCallSharp /></span><span className='text-xl ml-[2px]'>Contact</span></h3>
                    <div className='text-slate-600 ml-[30px] text-center lg:text-left'>
                    +91 9811328846 <br />
                    +91 8860217140 <br />
                    +91 8700908304
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='text-center'>
                <span className='text-xl font-semibold'>
                    &copy; 2022 &nbsp;|&nbsp; 
                    <span className='text-sky-500 font-bold'>SURVIVE</span> <span className='text-green-500 font-bold'>PHARMA</span> &nbsp;|&nbsp; 
                    All rights reserved
                </span>
            </div>
        </footer>
    </div>
  )
}

export default Footer