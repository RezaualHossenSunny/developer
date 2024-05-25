import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import resume from '../assets/Rezaul Hossen  Sunny.pdf'
const Navbar = () => {
   const [show ,setShow] =useState(false)
  return (
    <>
     <div className="bg-comon">
     <div className="bg-comon items-center py-5 flex justify-between relative  max-w-container mx-auto ">
      <div className="">
        <p className="font-bold text-white text-3xl ">R<span className="text-primary" >H</span>S</p>
      </div>
      <div className=" md:flex justify-between  items-center text-white gap-x-5  hidden md:block w-[60%]" >
        <p className="text-xl font-popins text-white  font-medium">HOME</p>
        <p className="text-xl font-popins text-white  font-medium">SKILL</p>
        <p className="text-xl font-popins text-white  font-medium">PORTFOLIO</p>
        <p className="text-xl font-popins text-white  font-medium">CONTACT</p>
     

        <div className="w-[20%] flex justify-end  text-white rounded-md  ">
          <a href={resume} className=" text-xl font-popins text-white  font-medium  py-5 px-10 bg-primary rounded-md    " download> Resume</a>
        </div>
      </div>

      </div>
     </div>
     


      <div className="md:hidden absolute top-5 right-0 inline-block " onClick={()=> setShow(!show)}>
      <CiMenuFries  className="text-white" />
      </div>

   <div className={`flex-col  md:hidden ${show ?"block" :"hidden"}`}>
   <div className="bg-slate-800    items-center text-white gap-x-10  w-full mx-auto" >
   <p className="text-xl font-popins text-white  font-light">Home</p>
        <p className="text-sm font-popins text-white  font-light">SKILL</p>
        <p className="text-sm font-popins text-white  font-light">PORTFOLIO</p>
        <p className="text-sm font-popins text-white  font-light">CONTACT</p>

        <div className="w-[20%] flex justify-end  text-white rounded-md  mt-2  pb-3">
          <a href={resume} className=" text-xl font-popins text-white  font-medium  py-3 px-10 bg-primary rounded-md    " download> Resume</a>
        </div>
      </div>
   </div>

      



    



    </>
  )
}

export default Navbar