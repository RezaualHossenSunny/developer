import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import resume from '../assets/Rezaul Hossen  Sunny.pdf'
const Navbar = () => {
   const [show ,setShow] =useState(false)
  return (
    <>
     <div className="bg-slate-800  fixed w-full ">
     <div className="bg-slate-800  items-center py-5 flex justify-between relative  max-w-container mx-auto ">
      <div className="">
        <p data-aos="flip-right"  className="font-bold text-white text-3xl px-2 md:px-0 ">R<span className="text-primary" >H</span>S</p>
      </div>
      <div className=" md:flex justify-between  items-center text-white gap-x-5  hidden md:block w-[60%]" >
        <p className="text-xl font-popins text-white  font-medium">HOME</p>
        <p className="text-xl font-popins text-white  font-medium">SKILL</p>
        <p className="text-xl font-popins text-white  font-medium"> PROJECTS</p>
        <p className="text-xl font-popins text-white  font-medium">CONTACT</p>
     

        <div className="w-[20%] flex justify-end  text-white rounded-md  ">
          <a href={resume} className=" text-xl font-popins text-white  font-medium  py-5 px-10 bg rounded-md    " download> Resume</a>
        </div>
      </div>

      </div>
     </div>
     


      <div className="md:hidden absolute top-5 right-0 inline-block " onClick={()=> setShow(!show)}>
      <CiMenuFries  className="text-white  text-3xl" />
      </div>

   <div className={`flex-col  md:hidden ${show ?"block" :"hidden"}`}>
   <div className="bg-slate-800    items-center text-white gap-x-10  w-full mx-auto  mt-[70px]" >
        <p className="text-sm font-popins text-white  font-bold py-1 text-center">HOME</p>
        <p className="text-sm font-popins text-white  font-bold py-1  text-center">SKILL</p>
        <p className="text-sm font-popins text-white  font-bold py-1 text-center">PROJECTS</p>
        <p className="text-sm font-popins text-white  font-bold py-1 text-center">CONTACT</p>

        <div className="w-[20%]   text-white rounded-md  mt-2  pb-4  mx-auto">
          <a href={resume} className=" text-sm font-popins text-white  font-medium  py-3 px-5 bg rounded-md  mx-auto   " download> Resume</a>
        </div>
      </div>
   </div>

      



    



    </>
  )
}

export default Navbar