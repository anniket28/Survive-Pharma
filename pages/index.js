import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Head */}
      <Head>
        <title>Survive Pharma</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Survive Pharma Home Page" />
      </Head>

      {/*  */}
      <div className='my-10 flex flex-col px-1 items-center md:px-10 lg:px-16 xl:px-[103px] lg:flex-row lg:my-8'>
        <div className='w-full lg:w-[70%] lg:mx-3'>
          <h2 className='text-lg text-center font-semibold sm:text-xl md:text-2xl lg:text-left lg:text-2xl lg:mx-2'>Welcome to <span className='text-sky-500 font-bold'>SURVIVE</span> <span className='text-green-500 font-bold'>PHARMA</span></h2>
          <p className='text-sm px-3 text-slate-500 mt-2 text-justify sm:text-base md:text-base lg:text-base lg:px-0 lg:mx-2'>Survive Pharma is the leading Manufacturer, Wholesaler and Retailer of Traction Table, Massager Machine, Quadriceps Table Muscles Stimulator, Therapy Unit and much more. Our team of experienced professionals use quality raw material and advance technology machines to design and develop the offered range of products in bulk in short period of time flawlessly. Under the able and efficient guidance of our Proprietor, Mr. Gopal Verma, we have carved a niche for ourselves and have become one of the leading names in the industry.</p>
        </div>
        <div className='mt-3 w-3/4 text-center sm:w-2/3 md:w-1/2'>
          <Image height={300} width={500} src={'/Images/home.webp'} alt='Survive Pharma Categories'></Image>
        </div>
      </div>

      {/*  */}
      <div className='my-10 px-10 sm:px-20 md:px-40 lg:px-12 xl:px-[123px]'>
        <h2 className='text-xl sm:text-2xl font-semibold text-center lg:text-[27px] lg:my-8'>Our Product Range</h2>
        {/*  */}
        <div className='flex flex-col flex-wrap justify-between lg:flex-row'>
          {/*  */}
          <div className='shadow-lg mb-10 shadow-slate-400 rounded-xl mt-5 lg:w-[30%] lg:mt-0'>
            <div className='lg:px-5 text-center shadow rounded-t-xl'>
              <Image width={200} height={200} src={'/Images/Electrotherapy.webp'} alt='Electrotherapy Equipments'></Image>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-5 pb-2 lg:h-[280px] lg:pb-0 xl:h-[275px] xl:pb-0'>
              <h3 className='text-lg font-semibold'>Electrotherapy Equipments</h3>
              <p className='text-slate-500 mt-1'>Our electrotherapy product range includes a wide range of Lazer Pain Relief Machine, Short Wave Diathermy 500 Watt Bulb, Short Wave Diathermy 500 Watt Solid State, Laser Pain Relief Machine, Multifunction Therapy Unit (LCD MODEL) and Computerised Ift 29 Program.</p>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-1 pb-7'>
              <Link href={'/our-products/ElectrotherapyEquipments'} passHref><a className='cursor-pointer px-4 py-[7px] rounded-md text-slate-50 bg-sky-500 hover:bg-green-500'>Explore</a></Link>
            </div>
          </div>
          {/*  */}
          <div className='shadow-lg mb-10 shadow-slate-400 rounded-xl lg:w-[30%]'>
            <div className='lg:px-5 text-center shadow rounded-t-xl'>
              <Image width={200} height={200} src={'/Images/Rehab.webp'} alt='Rehablitation Equipments'></Image>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-5 pb-2 lg:h-[280px] lg:pb-0 xl:h-[275px] xl:pb-0'>
              <h3 className='text-lg font-semibold'>Rehablitation Equipments</h3>
              <p className='text-slate-500 mt-1'>Rehabilitation is an essential part of universal health coverage along with promotion of good health and treatment. Our rehablitation product range includes a wide range of Massager Machine, Wax bath Machine, CP Walker, Cupping Therapy and Shoulder Therapy.</p>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-1 pb-7'>
              <Link href={'/our-products/RehabilitationEquipments'} passHref><a className='cursor-pointer px-4 py-[7px] rounded-md text-slate-50 bg-sky-500 hover:bg-green-500'>Explore</a></Link>
            </div>
          </div>
          {/*  */}
          <div className='shadow-lg mb-10 shadow-slate-400 rounded-xl lg:w-[30%]'>
            <div className='lg:px-5 text-center shadow rounded-t-xl'>
              <Image width={200} height={200} src={'/Images/Therapy.webp'} alt='Therapy Unit'></Image>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-5 pb-2 lg:h-[280px] lg:pb-0 xl:h-[275px] xl:pb-0'>
              <h3 className='text-lg font-semibold'>Therapy Unit</h3>
              <p className='text-slate-500 mt-1'>Therapy is used to promote, maintain, or restore health. We are Prominent & Leading Manufacturer from New Delhi in Therapy Unit and we offer Compression Therapy Unit, Physiotherpy IFT Unit and EMG Biofeedback Unit.</p>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-1 pb-7'>
              <Link href={'/our-products/TherapyUnit'} passHref><a className='cursor-pointer px-4 py-[7px] rounded-md text-slate-50 bg-sky-500 hover:bg-green-500'>Explore</a></Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-col flex-wrap justify-between lg:mt-5 lg:flex-row'>
          {/*  */}
          <div className='shadow-lg mb-10 shadow-slate-400 rounded-xl lg:w-[30%]'>
            <div className='lg:px-5 text-center shadow rounded-t-xl'>
              <Image width={200} height={200} src={'/Images/Exercise.webp'} alt='Exercise Items'></Image>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-5 pb-2 lg:h-[280px] lg:pb-0 xl:h-[275px] xl:pb-0'>
              <h3 className='text-lg font-semibold'>Exercise Items</h3>
              <p className='text-slate-500 mt-1'>Exercise can help improve muscle strength and boost your endurance. Our exercise items product range includes Survive Spin Bike, various models of Treadmills, Static Bike Upright, Trampoline, Wrist Execiser, Static Cycle with back rest and Shoulder Wheel 360 Degree.</p>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-1 pb-7'>
              <Link href={'/our-products/ExerciseItems'} passHref><a className='cursor-pointer px-4 py-[7px] rounded-md text-slate-50 bg-sky-500 hover:bg-green-500'>Explore</a></Link>
            </div>
          </div>
          {/*  */}
          <div className='shadow-lg mb-10 shadow-slate-400 rounded-xl lg:w-[30%]'>
            <div className='lg:px-5 text-center shadow rounded-t-xl'>
              <Image width={200} height={200} src={'/Images/TractionTable.webp'} alt='Traction Table'></Image>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-5 pb-2 lg:h-[280px] lg:pb-0 xl:h-[275px] xl:pb-0'>
              <h3 className='text-lg font-semibold'>Traction Table</h3>
              <p className='text-slate-500 mt-1'>Traction Table removes pressure on spinal discs through stretching and manipulating the muscles and discs apart to create space.We are a leading Manufacturer of 3 Fold Traction Tables, Traction Machine With Table and Traction Table 4 FOLD from New Delhi, India.</p>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-1 pb-7'>
              <Link href={'/our-products/TractionTable'} passHref><a className='cursor-pointer px-4 py-[7px] rounded-md text-slate-50 bg-sky-500 hover:bg-green-500'>Explore</a></Link>
            </div>
          </div>
          {/*  */}
          <div className='shadow-lg mb-10 shadow-slate-400 rounded-xl lg:w-[30%]'>
            <div className='lg:px-5 text-center shadow rounded-t-xl'>
              <Image width={200} height={200} src={'/Images/RehabItems.webp'} alt='Rehabilitation Items'></Image>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-5 pb-2 lg:h-[280px] lg:pb-0 xl:h-[275px] xl:pb-0'>
              <h3 className='text-lg font-semibold'>Rehabilitation Items</h3>
              <p className='text-slate-500 mt-1'>Our rehabilitation items wide product range includes Shoulder Arc (Zig-Zag Type), Quadriceps Table, Medicine Ball With Stand, Motorised Tilit Table, Hand Held Dyamanometer, Thera Tube, Thera Band, Hand Gym Board and Staircase.</p>
            </div>
            <div className='px-5 xl:px-6 lg:px-3 pt-1 pb-7'>
              <Link href={'/our-products/TherapyUnit'} passHref><a className='cursor-pointer px-4 py-[7px] rounded-md text-slate-50 bg-sky-500 hover:bg-green-500'>Explore</a></Link>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <Link href={'/our-products/NewItems'}><a className='cursor-pointer bg-sky-500 rounded-md px-4 py-[7px] text-white hover:bg-green-500'>Explore Complete Range &rarr;</a></Link>
        </div>
      </div>

      {/*  */}
      <section id="testimonials" className="my-16 px-5 lg:px-0">
    <h2 className="text-xl md:text-[22px] lg:text-3xl text-center">Testimonials</h2>
    <h2 className="text-xl md:text-[22px] lg:text-3xl text-center text-slate-500 pt-1">What People Say About Us ?</h2>
    <div className="text-white body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full p-8 rounded text-[15px] md:text-base bg-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="block w-5 h-5 text-slate-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Aarya had a very enriching and fun loving experience, I would like to thank to all the teachers for the kindness and care in organising interesting activities, wish all the luck to pingpong.</p>
                <span className="flex-grow flex flex-col">
                  <span className="text-slate-100 title-font font-bold">Shivani Bhardwaj m/o Aarya</span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full p-8 rounded text-[15px] md:text-base bg-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="block w-5 h-5 text-slate-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Key to student’s success is a great school and key to a great school is a great director and principal. Thanks to the hardworking teachers, we really appreciate your dedication to our child.</p>
                <span className="flex-grow flex flex-col">
                  <span className="text-slate-100 title-font font-bold">Sakshi Khurana m/o Vivaan</span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full p-8 rounded text-[15px] md:text-base bg-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="block w-5 h-5 text-slate-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Play School is foundation of a child’s growth. It was a wonderful journey with pingpong. Really appreciate the patience and efforts by the staff.</p>
                <span className="flex-grow flex flex-col">
                  <span className="text-slate-100 title-font font-bold">Chadni Agarwal m/o Ayush</span>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
      
    </div>
  )
}
