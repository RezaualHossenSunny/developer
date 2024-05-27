import React from 'react'
import resume from '../assets/Rezaul Hossen  Sunny.pdf'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <div className='max-w-container mx-auto py-24'>

                <div>
                    <p className='text-white font-popins text-2xl text-center md:text-left md:text-4xl font-bold'> CONTACT</p>
                    <div className=' w-[100px] mx-auto md:mx-0 md:w-[150px] h-[4px]  mt-4 bg'></div>
                </div>

                <div className=' md:flex  justify-between py-10'>
                    <div className='w-2/4'>
                        <p className='font-popins font-bold w-[400px] md:w-full p-5 md:p-0 text-1xl md:text-3xl text-white'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>

                        <div className="  py-4 md:py-14 text-white rounded-md   ml-4 md:ml-0">
                            <a href={resume} className=" text-sm md:text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md     " download> Resume</a>
                        </div>

                    </div>


                    <div className='w-2/4  pl-0 md:pl-28 py-4 md:py-0'>
                        <div className=' p-8 md:p-0'>
                            <p className='font-bold font-popins text-white text-xl md:text-4xl   '>Email</p>
                            <p className='font-semibold font-popins text-white text-sm md:text-xl mt-4'>sunnyrahman960@gmail.com</p>
                        </div>

                        <div className=' py-0 md:py-8  p-8 md:p-0'>
                            <p className='font-bold font-popins text-white text-xl md:text-4xl '>Social</p>
                            <div className='flex gap-x-4 mt-4'>
                                <a href='https://www.facebook.com/Rezaualsunny/'><FaFacebook className='font-popins font-semibold text-white text-2xl md:text-3xl cursor-grabbing' /></a>

                                <a href='https://www.linkedin.com/in/rezaulhossensunny/'> <FaLinkedin className='font-popins font-semibold text-white text-2xl md:text-3xl cursor-grabbing' /></a>
                            </div>
                        </div>

                        <div className='p-8 md:p-0  py-2 md:py-3'>
                            <p className='font-bold font-popins text-white text-xl md:text-4xl '>Address</p>
                            <p className='font-semibold font-popins text-white text-sm md:text-xl mt-4 '>Dhaka,Bangladesh</p>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact