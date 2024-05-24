import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
   const [show ,setShow] =useState(false)
  return (
    <>
     <div className="bg-slate-800">
     <div className="bg-slate-800 items-center py-5 flex justify-between relative  max-w-container mx-auto ">
      <div className="">
        <p className="font-bold text-white text-2xl ">RHS</p>
      </div>
      <div className=" md:flex justify-between  items-center text-white gap-x-5  hidden md:block w-[60%]" >
        <p>Home</p>
        <p>WHAT I Do</p>
        <p>SKILL</p>
        <p>PORTFOLIO</p>
        <p>CONTACT</p>
     

        <div className="w-[20%] flex justify-end  text-white rounded-md ">
          <a href="/images/myw3schoolsimage.jpg" className="py-5 px-10 border border-[#ffff]   " download> Resume</a>
        </div>
      </div>

      </div>
     </div>
     


      <div className="md:hidden absolute top-5 right-0 inline-block " onClick={()=> setShow(!show)}>
      <CiMenuFries  className="text-white" />
      </div>

   <div className={`flex-col  md:hidden ${show ?"block" :"hidden"}`}>
   <div className="bg-slate-800    items-center text-white gap-x-10  w-full mx-auto" >
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>

        <div className=" text-white ">
          <p>hdhdh</p>
        </div>
      </div>
   </div>

      



    



    </>
  )
}

export default Navbar