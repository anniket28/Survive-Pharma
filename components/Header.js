import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {HiLocationMarker} from 'react-icons/hi'
import {IoCallSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi' 
import {AiFillHome} from 'react-icons/ai'
import {GiCardboardBoxClosed} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {BsPencilSquare} from 'react-icons/bs'

const Header = () => {
  // Router
  const router=useRouter()

  // Send Email
  const sendMail=()=>{
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=survivepharma08@gmail.com","_blank")
  }

  // Open Whatsapp
  const openWhatsapp=()=>{
      const message="Hello I came across your website and I wanted to enquire about something."
      window.open(`https://api.whatsapp.com/send?text=${message}&phone=+91 8860217140","_blank`)
  }

  // Open Nav Links
  const openNavLinks=()=>{
    if(document.getElementById('nav-links').style.height==='0px'){
      document.getElementById('nav-links').style.height='115px'
    }
    else{
      document.getElementById('nav-links').style.height='0px'
    }
  }

  return (
    <div>
        {/* Top Bar */}
        <div className='px-0 flex flex-col items-center py-4 justify-between bg-slate-100 shadow-md md:px-10 lg:px-20 lg:flex-row lg:py-2'>
          {/*  */}
          <div className='mb-3 lg:mb-0'>
            <Link href={'/'} passHref><a className='text-2xl'><span className='text-sky-500 font-bold'>SURVIVE</span> <span className='text-green-500 font-bold'>PHARMA</span></a></Link>
            <a href="" className='flex items-center text-slate-700 hover:text-black hover:underline text-base justify-center lg:text-base lg:justify-start'><span className='text-xl'><HiLocationMarker/></span><span>Madipur, New Delhi</span></a>
          </div>
          {/*  */}
          <div className='flex flex-row md:flex-row lg:flex-row items-center space-x-2 contact-options'>
            <a href="tel:+91 8860217140" className='text-sm flex items-center bg-sky-500 px-2 py-2 rounded-md text-slate-100 hover:bg-green-500 lg:text-[16px]'><span className='text-xl'><IoCallSharp/></span><span className='ml-[1px]'>Call Us</span></a>
            <a onClick={sendMail} className='text-sm flex items-center bg-sky-500 px-2 py-2 rounded-md text-slate-100 hover:bg-green-500 cursor-pointer lg:text-[16px]'><span className='text-xl'><MdEmail/></span><span className='ml-[1px]'>Email Us</span></a>
            <a onClick={openWhatsapp} className='text-sm flex items-center bg-sky-500 px-2 py-2 rounded-md text-slate-100 hover:bg-green-500 cursor-pointer lg:text-[16px]'><span className='text-xl'><RiWhatsappFill/></span><span className='ml-[1px]'>Connect on whatsapp</span></a>
          </div>
        </div>

        {/* Navbar */}
        <nav>
          {/* For Small Devices */}
          <div className='bg-zinc-800 p-3 sm:hidden md:hidden lg:hidden'>
            {/*  */}
            <div className='text-3xl flex justify-center'>
              <span onClick={openNavLinks} className='border-2 border-slate-300 p-1 rounded-md text-slate-100 cursor-pointer'><GiHamburgerMenu/></span>
            </div>
            {/*  */}
            <div id='nav-links' className='flex flex-col justify-center items-center space-y-2 my-2' style={{height:'0px',overflow:'hidden',transition:'0.5s'}}>
              <Link href={'/'} passHref><a className={`cursor-pointer flex items-center ${router.pathname==='/'?'text-white':'text-slate-400'}`}><AiFillHome /><span className='ml-[2px]'>Home</span></a></Link>
              <Link href={'/our-products/NewItems'} passHref><a className={`cursor-pointer flex items-center ${router.pathname.includes('/our-products')?'text-white':'text-slate-400'}`}><span className='text-xl'><GiCardboardBoxClosed /></span><span className='ml-[2px]'>Our Products</span></a></Link>
              <Link href={'/our-profile'} passHref><a className={`cursor-pointer flex items-center ${router.pathname==='/our-profile'?'text-white':'text-slate-400'}`}><span className='ml-1'>Our Profile</span></a></Link>
              <Link href={'/get-in-touch'} passHref><a className={`cursor-pointer flex items-center ${router.pathname==='/get-in-touch'?'text-white':'text-slate-400'}`}><BsPencilSquare /><span className='ml-1'>Get in touch</span></a></Link>
            </div>
            {/*  */}
            <div>
              <form className='flex justify-center mx-auto w-3/4'>
                <input className='rounded py-[6px] px-2 my-1 w-fdivl' type="text" name='query' placeholder='Search Products/Services' />
              </form>
            </div>
          </div>
          {/* For Big Devices */}
          <div className='hidden sm:flex sm:flex-col sm:py-3  md:flex md:flex-col md:py-3 lg:py-0 lg:flex lg:flex-row bg-zinc-800 justify-between items-center lg:px-28'>
            <div className='flex space-x-7'>
              <Link href={'/'}><a className={`flex items-center cursor-pointer hover:text-white ${router.pathname==='/'?'text-white':'text-slate-400'}`}><span className='md:text-xl lg:text-2xl'><AiFillHome /></span><span className='ml-1'>Home</span></a></Link>
              <Link href={'/our-products/NewItems'}><a className={`flex items-center cursor-pointer hover:text-white ${router.pathname.includes('/our-products')?'text-white':'text-slate-400'}`}><span className='sm:text-2xl md:text-2xl lg:text-3xl'><GiCardboardBoxClosed /></span><span className='ml-1'>Our Products</span></a></Link>
              <Link href={'/our-profile'}><a className={`flex items-center cursor-pointer hover:text-white ${router.pathname==='/our-profile'?'text-white':'text-slate-400'}`}><span className='md:text-xl lg:text-2xl'><BsInfoCircleFill /></span><span className='ml-1'>Our Profile</span></a></Link>
              <Link href={'/get-in-touch'}><a className={`flex items-center cursor-pointer hover:text-white ${router.pathname==='/get-in-touch'?'text-white':'text-slate-400'}`}><span className='md:text-xl lg:text-2xl'><BsPencilSquare /></span><span className='ml-1'>Get in touch</span></a></Link>
            </div>
            <form className='sm:w-1/2 sm:mt-3 sm:mb-1 md:w-1/3 md:mt-4 md:mb-1 lg:my-[9px] lg:w-1/4'>
              <input className='rounded py-[6px] px-2 w-fdivl outline-sky-500' type="text" name='query' placeholder='Search Products/Services' />
            </form>
          </div>
        </nav>
    </div>
  )
}

export default Header