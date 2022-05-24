import React,{useState,useEffect} from 'react'
import {IoIosArrowDropupCircle} from 'react-icons/io'

const BackToTop = () => {
    const [showButton, setshowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=300){
                setshowButton(true)
            }
            else{
                setshowButton(false)
            }
        })
    }, [])

    const backToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
  return (
    <div>
        {showButton && <span onClick={backToTop} className="fixed bottom-5 right-1 cursor-pointer z-50 text-6xl rounded-full text-green-500"><IoIosArrowDropupCircle /></span>}
    </div>
  )
}

export default BackToTop