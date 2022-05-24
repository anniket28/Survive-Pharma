import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Profile = () => {
  return (
    <div>
        {/* Head */}
        <Head>
            <title>Our Profile | Survive Pharma</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Survive Pharma Profile Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='px-5 sm:px-20 md:px-30 lg:px-12 xl:px-[118px] mt-8 mb-5'>
            {/*  */}
            <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl'><span className='text-sky-500 font-bold'>SURVIVE</span> <span className='text-green-500 font-bold'>PHARMA</span></h2>
                <p className='text-slate-500 mt-1 lg:text-[17px]'>Established in the year of 1994, Survive Pharma is the leading Manufacturer, Wholesaler and Retailer of Traction Table, Massager Machine, Quadriceps Table, Muscles Stimulator, Therapy Unit and much more. Our team of experienced professionals use only quality raw material to design and develop the offered range of products flawlessly. Further, we use advance technology machines to produce products in bulk in short period of time. Under the able and efficient guidance of our Proprietor, Mr. Gopal Verma, we have carved a niche for ourselves and have become one of the leading names in the industry.</p>
            </div>
        </div>
        {/*  */}
        <section className="text-slate-500 overflow-hidden">
          <div className="px-5 sm:px-20 md:px-30 lg:px-12 xl:px-[118px] my-8">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Why Us ?</span>
                </div>
                <div className="md:flex-grow">
                  <p className="leading-relaxed lg:text-[17px]">We always endeavor hard to offer the best quality products to our esteemed clients. With our streamlined operations, we have been able to achieve maximum client satisfaction. Our strengths that give us an edge over our competitors are as follows:
                    <ul>
                      <li>• Client-centric approach</li>
                      <li>• Client-centric approach</li>
                      <li>• Timely delivery</li>
                      <li>• Total quality management</li>
                    </ul>
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Quality</span>
                </div>
                <div className="md:flex-grow">
                  <p className="leading-relaxed lg:text-[17px]">Quality is our primary concern and we never take any chance with it. To ensure flawless production, we follow a stringent total quality management (TQM) system at every stage of our process. Only the best grades of components and raw material are utilised in the process that are sourced from reliable vendors of the market after conducting severe quality tests. Every stage is supervised by expert quality inspectors and we discharge our products into the market only after testing their dimensional accuracy, finish standards and other technical specifications.Our quality analysts test our products on following parameters:
                    <ul>
                      <li>• Functional reliability</li>
                      <li>• Efficiency</li>
                      <li>• Performance</li>
                    </ul>
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Client Satisfaction</span>
                </div>
                <div className="md:flex-grow">
                  <p className="leading-relaxed lg:text-[17px]">
                    Being a client centric organization, we aim at setting new benchmarks in the arena of client satisfaction. To achieve this very basic objective, we have a full-fledged customer support department to provide excellent after sale support to our prestigious clients. Our easy payment mode like Cash, Credit Card, DD and Cheque coupled with timely delivery schedules and transparent business dealings, further cement our bondings with our prestigious clients. We always welcome queries and suggestions from our business associates and also try to implement them in our process.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Our Infrastructural Setup</span>
                </div>
                <div className="md:flex-grow">
                  <p className="leading-relaxed lg:text-[17px]">We own an outstanding unit that spreads in a sprawling area and is furnished with modern production machines, equipments, tools and other requisite facilities. It is strategically located at New Delhi, the capital city and the commercial hub of India. To ensure smooth and efficient production, we have segregated our unit in different divisions like Production, Assembling, R & D, Quality Control, Warehousing and others. Each unit is managed by experienced professionals with versatile knowledge of their discipline.We have installed latest cutting edge technologies at our Production Unit that help us to precisely design the product range. Some of the machines installed at our unit are:
                    <ul>
                      <li>• CNC machines</li>
                      <li>• Drilling machines</li>
                      <li>• Molding machines</li>
                      <li>• Welding machines</li>
                    </ul>
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Research and Development</span>
                </div>
                <div className="md:flex-grow">
                  <p className="leading-relaxed lg:text-[17px]">
                    We spend substantially in the arena of research and development to maintain our dignified reputation in the market. Our R & D division is equipped with ultra modern testing equipment, devices as well as strong team of experienced researchers to carry our extensive research in our discipline. Our researchers work tirelessly to monitor the emerging requirements of the clients and try to develop smart and innovative Physiotherapy Equipment as per emerging requirements of the discipline.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Our Certifications</span>
                </div>
                <div className="md:flex-grow">
                  <div className='flex flex-col md:items-center xl:items-start xl:flex-row justify-center'>
                    <div className='shadow-md mx-auto mb-3'>
                      <Image width={325} height={425} src={'/Images/survivepharmacertificate1.jpeg'} alt='Our Certifications'></Image>
                    </div>
                    <p className="leading-relaxed mt-3 w-full lg:text-[17px] xl:mt-0 xl:w-3/4 xl:ml-2">
                      Royal Stancert Inc. (RSI) is an independent certificate issuing body providing quality assurance certifications. Our major focus during the certification lies on ethical measurement, analysis and improvement. Assisted by a team of experienced personnel, we aim at building a company&apos;s future through profitable operations, innovations and new business opportunities. These services are offered to various clients who are involved in health care, manufacturing & engineering, construction, I.T and other Industry Verticals.
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-5 flex-shrink-0 flex flex-col">
                  <span className="text-xl font-semibold title-font text-black md:text-2xl lg:text-[27px]">Quality Certificates</span>
                </div>
                <div className="md:flex-grow">
                  <div className='flex flex-col md:items-center xl:items-start xl:flex-row justify-center'>
                    <div className='shadow-md mx-auto mb-3'>
                      <Image width={325} height={425} src={'/Images/survivepharmacertificate2.jpeg'} alt='Quality Certificates'></Image>
                    </div>
                    <p className="leading-relaxed mt-3 w-full lg:text-[17px] xl:mt-0 xl:w-3/4 xl:ml-2">
                      RICL is a Conformity Assessment Body in India based at New Delhi, well known for our professional and quality services. We conduct compliance and certification audits for ISO 9001: 2015 Certification, ISO 14001:2015 Certification, ISO 27001:2013 Certification and other quality standard certifications. In a very short time we have got pan Indian presence by getting sincere support and response from our esteemed clients. All this could be achieved through our dedication, professional attitude and honesty. Our major focus during the assessment lies on ethical measurement, analysis and improvement.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    </div>
  )
}

export default Profile