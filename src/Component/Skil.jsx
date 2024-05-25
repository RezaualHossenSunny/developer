import React, { useState } from 'react'
import '../App.css'
import htnl from '../assets/html.svg'
import css from '../assets/css.svg'
import tal from '../assets/Talwind.svg'
import Js from '../assets/js.svg'
import reac from '../assets/react.svg'
import re from '../assets/redux.svg'
import Api from '../assets/Api.svg'
import ex from '../assets/expree.png'
import node from '../assets/node.png'

import figma from '../assets/figma.png'
import fire from '../assets/firnase.png'
import git from '../assets/git.png'
const Skil = () => {
    const [click, setClick] = useState(1)

    function update (id){
        setClick (id)
    }

  return (
    <div className='bg-comon py-24 '>
    <div className='max-w-container mx-auto'>


     <div>
     <p className='text-white font-popins text-4xl font-bold'>SKILL</p>
     </div>
  
   <div className='flex py-24 gap-8'>

   <p onClick={()=> update (1)} className='text-xl font-popins text-white  font-medium  py-5 px-10 bg-primary rounded-md cursor-pointer'>Frontend </p>
   <p onClick={()=> update (2)}className='text-xl font-popins text-white  font-medium  py-5 px-10 bg-primary rounded-md cursor-pointer'>Backend</p>

   <p onClick={()=> update (3)}className='text-xl font-popins text-white  font-medium  py-5 px-10 bg-primary rounded-md cursor-pointer'>Tolls</p>

   <p onClick={()=> update (4)}className='text-xl font-popins text-white  font-medium  py-5 px-10 bg-primary rounded-md cursor-pointer'>Pograming</p>
    

   </div>


<div className='py-14'>
  
<div className={click === 1 ?"show" :"setshow"}>
    <div className='grid grid-cols-6 gap-8'>
    
    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={htnl}/>
    </div>

    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={css}/>
    </div>


    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={tal}/>
    </div>
    
    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={Js}/>
    </div>

    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={reac}/>
    </div>

    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={re}/>
    </div>
  
   
    </div>
    
     </div>

     <div className={click === 2 ?"show" :"setshow"}>
      <div className='grid grid-cols-6 gap-8'>



      <div className='bg-white rounded-full py-7 px-7'>
    <img   src={Api}/>
    </div>

    <div className='bg-white rounded-full py-7 px-7 border border-4 '>
    <img   src={ex}/>
    </div>

    <div className='bg-white rounded-full py-7 px-7 border border-4'>
    <img   src={node}/>
    </div>

      </div>
     </div>


     <div className={click === 3 ?"show" :"setshow"}>
      <div className='grid grid-cols-6 gap-8'>



   

    <div className='bg-white rounded-full py-7 px-7 border border-4'>
    <img   src={figma}/>
    </div>
    <div className='bg-white rounded-full py-7 px-7 border border-4'>
    <img   src={fire}/>
    </div>

    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={git}/>
    </div>

   
      </div>
     </div>

     <div className={click === 4 ?"show" :"setshow"}>
      <div className='grid grid-cols-6 gap-8'>



   

    <div className='bg-white rounded-full py-7 px-7'>
    <img   src={Js}/>
    </div>
  

   
      </div>
     </div>

</div>
     
    </div>

    </div>
  )
}

export default Skil