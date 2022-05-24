import React,{useRef} from 'react'
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi'
import { createRef } from 'react/cjs/react.production.min'

const Sidebar = (props) => {
    const myRef=createRef()
    // Open Sidebar
    const openSidebar=()=>{
        myRef.current.classList.remove('w-0')
        myRef.current.classList.add('lg:w-[13%]')
        myRef.current.classList.add('md:w-[16%]')
        myRef.current.classList.add('sm:w-[18%]')
        myRef.current.classList.add('w-[110px]')
    }

    // Open Sidebar
    const closeSidebar=()=>{
        myRef.current.classList.remove('lg:w-[13%]')
        myRef.current.classList.remove('md:w-[16%]')
        myRef.current.classList.remove('sm:w-[18%]')
        myRef.current.classList.remove('w-[110px]')
        myRef.current.classList.add('w-0')
    }
  return (
    <div>
        <button onClick={openSidebar} className='fixed top-0 left-0 text-white bg-green-500 px-1 lg:px-2 text-[22px] sm:text-2xl lg:text-[27px]'><BiChevronRight /></button>
        <div ref={myRef} className='bg-slate-100 fixed top-0 left-0 shadow w-0 overflow-scroll h-full z-50' style={{transition:'0.3s'}}>
            <div className='flex justify-end'>
                <button onClick={closeSidebar} className='fixed text-white bg-sky-500 px-1 lg:px-2 text-[22px] sm:text-2xl lg:text-[27px]'><BiChevronLeft /></button>
            </div>
            <div className='px-2 py-8'>
                <h2 className='text-lg md:text-xl lg:text-2xl xl:text-2xl'>New Items</h2>
                <div className='mt-5'>
                    {props.products.map((prod)=>{
                        return <div className='my-4' key={prod._id}>
                            <a className='text-slate-500 hover:text-slate-900 text-sm lg:text-base' href={`#${prod._id}`}>{prod.productName}</a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar