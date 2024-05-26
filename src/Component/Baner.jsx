import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import portfolio from '../assets/portfolio.png'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from 'react-icons/fa6';


const Baner = () => {
  return (
    <div className='bg-comon'>
      <div className=' md:flex py-14 md:py-28 max-w-container mx-auto'>
        <div className='w-full md:w-3/5  py-32'>
          <h3 className='font-popins font-semibold text-cyan-400 text-2xl md:text-4xl'>Hellow  ! Iam</h3>
          <h2 className='font-popins font-bold text-white text-3xl md:text-5xl mt-5'>Rezaul Hossen Sunny</h2>

          <div className='mt-5'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'And I Am  computer Engineer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'And I Am  programer',
                1000,
                'And I Am  MERN Stack Developer',
                1000,

              ]}
              wrapper="span"
              speed={50}
              //   style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
              className=' font-popins font-semibold text-cyan-400 text-1xl md:text-4xl'
            />
          </div>

          <div className='mt-10 flex gap-x-10'>
            <a href='https://www.facebook.com/Rezaualsunny/'><FaFacebook className='font-popins font-semibold text-white text-3xl cursor-grabbing' /></a>

            <a href='https://www.linkedin.com/in/rezaulhossensunny/'> <FaLinkedin className='font-popins font-semibold text-white text-3xl cursor-grabbing' /></a>
            <a href='https://github.com/RezaualHossenSunny'>  <FaSquareGithub className='font-popins font-semibold text-white text-3xl cursor-grabbing' /></a>


        

          </div>


        </div>




        <div className=' w-full p-4 md:p-0 md:w-2/5'>

          <img className='w-[500px] rounded-full  bg-[#6978D1]' src={portfolio} />

        </div>


      </div>

    </div>
  )
}

export default Baner