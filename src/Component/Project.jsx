import React from 'react'
import '../App.css'
import image1 from '../assets/imm1.png'
import image2 from '../assets/slider-1 1.png'
import image3 from '../assets/bank.png'
import image4 from '../assets/HOME.png'
const Project = () => {
  return (
    <div id='project'>
      <div className='max-w-container mx-auto py-2 md:py-28'>
        <p className='text-white font-popins font-bold text-2xl text-center md:text-left md:text-4xl'>PROJECT </p>
        <div className=' w-[100px] mx-auto md:mx-0 md:w-[200px] h-[4px]  mt-4 bg'></div>

        <div className=' md:flex justify-between py-12 md:py-24  p-5 '>

          <div data-aos="fade-right" className=' w-full md:w-[550px]  h-[480px] md:h-[650px] borders '>
            <div className='items-center p-6 rounded-lg'>
              <img src={image2} />

              <p className='text-center font-bold font-popins py-2 md:py-6 text-white text-2xl md:text-4xl'>Orebi E Commerce</p>

              <div className='w-[300px]  h-[2px] md:h-[4px] mx-auto bg'></div>
              <p className=' font-semibold text-xl md:text-2xl text-white font-popins py-2 md:py-5'>It is an e-commerce website .Used React to build it ,Tailwindcss as a framework, Implemented here redux and react router dom </p>
            </div>

            <div className='flex gap-2 md:gap-10  pl-6 md:pl-6'>
            <a href='https://orebi-ecommerce-mu.vercel.app/'  className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Live View </a>
              <a href='https://github.com/RezaualHossenSunny/orebi-_ecommerce' className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Source Code </a>
            </div>


          </div>

          <div data-aos="fade-left" className=' w-full md:w-[550px]  h-[480px] md:h-[650px] borders  mt-10 md:mt-0'>
            <div className='items-center p-6 rounded-lg'>
              <img className=' h-[150px] md:h-[250px] w-full' src={image4} />

              <p className='text-center font-bold font-popins py-2 md:py-6 text-white text-2xl md:text-4xl'>Social Media</p>

              <div className='w-[300px]  h-[2px] md:h-[4px] mx-auto bg'></div>
              <p className=' font-semibold text-xl md:text-2xl text-white font-popins py-2 md:py-5'>
              It is an social media website .Used React to build it , Implemented here redux , fribase , Logical Statement ,And Localstorge
              </p>
            </div>

            <div className='flex gap-2 md:gap-10  pl-6 md:pl-6'>
            <p className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Live View </p>
              <a href='https://github.com/RezaualHossenSunny/chat' className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Source Code </a>
            </div>


          </div>


        </div>

        <div className=' md:flex justify-between py-0 md:py-24  p-5 '>

          <div data-aos="fade-right" className=' w-full md:w-[550px]  h-[480px] md:h-[650px] borders '>
            <div className='items-center p-6 rounded-lg'>
              <img src={image3} />

              <p className='text-center font-bold font-popins py-2 md:py-6 text-white text-2xl md:text-4xl'>Bank Loan App</p>

              <div className='w-[300px]  h-[2px] md:h-[4px] mx-auto bg'></div>
              <p className=' font-semibold text-xl md:text-2xl text-white font-popins py-2 md:py-5'>It is an Bank Loan  website .Used React to build it ,Tailwindcss as a framework, Implemented here react cgar js and </p>
            </div>

            <div className='flex gap-2 md:gap-10  pl-6 md:pl-6'>
            <a href='https://bank-react-flax.vercel.app/' className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Live View </a>
              <a href='https://github.com/RezaualHossenSunny/Bank_React'  className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Source Code </a>
            </div>


          </div>

          <div data-aos="fade-left" className=' w-full md:w-[550px]  h-[480px] md:h-[650px] borders  mt-10 md:mt-0'>
            <div className='items-center p-6 rounded-lg'>
              <img src={image1} />

              <p className='text-center font-bold font-popins py-2 md:py-6 text-white text-2xl md:text-4xl'>Finsweet</p>

              <div className='w-[300px]  h-[2px] md:h-[4px] mx-auto bg'></div>
              <p className=' font-semibold text-xl md:text-2xl text-white font-popins py-2 md:py-5'>It is an Start Up Company website .Used Bootstarp5 to build it , Implemented here row html css responcive </p>
            </div>

            <div className='flex gap-2 md:gap-10  pl-6 md:pl-6'>
            <a href='https://finswent.vercel.app/' className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Live View </a>
              <a href='https://github.com/RezaualHossenSunny/finswen' className=' text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md cursor-pointer'>Source Code </a>
            </div>


          </div>


        </div>
        <div  className='text-xs md:text-xl font-popins text-white  font-medium  py-5 md:py-5 px-3 md:px-10 bg rounded-md cursor-pointer w-[200px] md:w-[300px] mx-auto text-center mt-10 md:mt-0'> <a href="https://github.com/RezaualHossenSunny">More</a> </div>
      </div>
    </div>
  )
}

export default Project