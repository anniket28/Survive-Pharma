import React,{useState} from 'react'
import Link from 'next/link'
import {IoMdArrowDroprightCircle,IoMdArrowDropleftCircle} from 'react-icons/io'
import Script from 'next/script'

const ProductRange = (props) => {
  return (
    <div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        {/*  */}
        <div id="carouselProductIndicators" className="carousel slide bg-slate-100 shadow-md py-3 px-0 sm:px-20 md:px-40 lg:px-0" data-bs-ride="carousel">
            <h1 className='text-center font-semibold text-[22px] sm:text-[24px] md:text-[27px] lg:text-3xl'>Our Product Range</h1>
            <div className='flex mt-2 items-center'>
                <button data-bs-target="#carouselProductIndicators" data-bs-slide="prev" className='text-4xl text-sky-500 mx-3'><IoMdArrowDropleftCircle /></button>
                <div className="carousel-inner py-3">
                    <div className="carousel-item active">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button onClick={()=>props.handleCategoryClick('NewItems')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>New Items</button>
                            <button onClick={()=>props.handleCategoryClick('TherapyUnit')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500 text-white rounded-md py-[6px] sm:px-4'>Therapy Unit</button>
                            <button onClick={()=>props.handleCategoryClick('ExerciseItems')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-lime-600 text-white rounded-md py-[6px] sm:px-4'>Exercise Items</button>
                            <button onClick={()=>props.handleCategoryClick('RehabilitationItems')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-red-500 text-white rounded-md py-[6px] sm:px-4'>Rehabilitation Items</button>
                            <button onClick={()=>props.handleCategoryClick('CommodeWheelChair')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-gray-500 text-white rounded-md py-[6px] sm:px-4'>Commode Wheel Chair</button>
                            <button onClick={()=>props.handleCategoryClick('ElectrotherapyEquipments')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-500 text-white rounded-md py-[6px] sm:px-4'>Electrotherapy Equipments</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button onClick={()=>props.handleCategoryClick('Stretcher')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-red-500 text-white rounded-md py-[6px] sm:px-4'>Stretcher</button>
                            <button onClick={()=>props.handleCategoryClick('HandWash')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-slate-500 text-white rounded-md py-[6px] sm:px-4'>Hand Wash</button>
                            <button onClick={()=>props.handleCategoryClick('TractionTable')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-yellow-600 text-white rounded-md py-[6px] sm:px-4'>Traction Table</button>
                            <button onClick={()=>props.handleCategoryClick('HandSanitizer')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-teal-500 text-white rounded-md py-[6px] sm:px-4'>Hand Sanitizer</button>
                            <button onClick={()=>props.handleCategoryClick('OriginalDettolBathSoap')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>Original Dettol Bath Soap</button>
                            <button onClick={()=>props.handleCategoryClick('Safehands-AutoHandSanitizer')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-yellow-900 text-white rounded-md py-[6px] sm:px-4'>Safehands - Auto Hand Sanitizer</button>
                            <button onClick={()=>props.handleCategoryClick('SkinCareCosmetics')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-emerald-700 text-white rounded-md py-[6px] sm:px-4 hidden lg:block'>Skin Care Cosmetics</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button onClick={()=>props.handleCategoryClick('WheelChair')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-blue-700 text-white rounded-md py-[6px] sm:px-4'>Wheel Chair</button>
                            <button onClick={()=>props.handleCategoryClick('FoldingWalker')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500  text-white rounded-md py-[6px] sm:px-4'>Folding Walker</button>
                            <button onClick={()=>props.handleCategoryClick('HospitalFurniture')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-green-600 text-white rounded-md py-[6px] sm:px-4'>Hospital Furniture</button>
                            <button onClick={()=>props.handleCategoryClick('EcgElectrodeBelts')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-500 text-white rounded-md py-[6px] sm:px-4'>Ecg Electrode Belts</button>
                            <button onClick={()=>props.handleCategoryClick('DettolLiquidHandWash')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-pink-800 text-white rounded-md py-[6px] sm:px-4'>Dettol Liquid Handwash</button>
                            <button onClick={()=>props.handleCategoryClick('RehabilitationEquipments')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-slate-500 text-white rounded-md py-[6px] sm:px-4'>Rehabilitation Equipments</button>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button onClick={()=>props.handleCategoryClick('Dettol')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-500 text-white rounded-md py-[6px] sm:px-4'>Dettol</button>
                            <button onClick={()=>props.handleCategoryClick('CopierPaper')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-800 text-white rounded-md py-[6px] sm:px-4'>Copier Paper</button>
                            <button onClick={()=>props.handleCategoryClick('DisinfectantLiquid')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>Disinfectant Liquid</button>
                            <button onClick={()=>props.handleCategoryClick('MotorizedWheelchair')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500 text-white rounded-md py-[6px] sm:px-4'>Motorized Wheelchair</button>
                            <button onClick={()=>props.handleCategoryClick('MedicalSurgicalGown')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-red-500 text-white rounded-md py-[6px] sm:px-4'>Medical Surgical Gown</button>
                            <button onClick={()=>props.handleCategoryClick('SteamVaporizerMachine')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-green-600 text-white rounded-md py-[6px] sm:px-4'>Steam Vaporizer Machine</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button onClick={()=>props.handleCategoryClick('Hydrocollator')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>Hydrocollator</button>
                            <button onClick={()=>props.handleCategoryClick('SonographyGel')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-lime-900 text-white rounded-md py-[6px] sm:px-4'>Sonography Gel</button>
                            <button onClick={()=>props.handleCategoryClick('DisinfectantSpray')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-600 text-white rounded-md py-[6px] sm:px-4'>Disinfectant Spray</button>
                            <button onClick={()=>props.handleCategoryClick('MassagerMachine')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-cyan-800 text-white rounded-md py-[6px] sm:px-4'>Massager Machine</button>
                            <button onClick={()=>props.handleCategoryClick('SkinCareCosmetics')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-emerald-700 text-white rounded-md py-[6px] sm:px-4 block lg:hidden'>Skin Care Cosmetics</button>
                            <button onClick={()=>props.handleCategoryClick('PhysiotherapyEquipmentsAndTensUnit')} className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500 text-white rounded-md py-[6px] sm:px-4'>Physiotherapy Equipments and Tens Unit</button>
                        </div>
                    </div>
                </div>
                <button data-bs-target="#carouselProductIndicators" data-bs-slide="next" className='text-4xl text-sky-500 mx-3'><IoMdArrowDroprightCircle /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductRange