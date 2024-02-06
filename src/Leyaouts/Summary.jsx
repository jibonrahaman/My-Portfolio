import { useState } from "react"
import Flex from "../Common/Flex"
import SkillData from '../Data/Data'
import Images from "../Common/Images";
import '../App.css'
function Summary() {
  const [Data,setData] =useState(SkillData);
  const [input,setInput] =useState('');
  const handleChange =(e)=>{
   console.log(e.target.value);
  }

  const handleData = (text)=>{
    const filt = SkillData.filter((item)=>{
      if(item.title == text){
        return item
      }
    })
    setData(filt)
  }

  return (
<section className="skill-summary mx-auto max-w-container md:mt-10">
<Flex className=" justify-between">
    <div className=" w-[40%] text-white ">
        <h2 className=" text-3xl font-bold text-sky-400">Summary</h2>
    <p className=" mt-5 text-base  w-[90%]  font-sans">I am a passionate web application and software developer specializing in MERN Stack web development. As a frontend developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js. I can develop any Figma or PSD template into React.js, and it will be responsive. I develop using modern frameworks like Tailwind CSS to create visually stunning websites. Currently, I`m working with Node.js, MongoDB, and Express.js. Recently, I developed many  website, which showcases my capabilities and sets me apart from others in the field</p>
    </div>
    
    <div className=" w-[40%] text-white">
    <Flex className=" gap-x-10">
    <h2 className=" text-3xl font-bold text-sky-400 ">My Skills</h2>
    <input onChange={handleChange} type="text" placeholder="search skill.." className='border  px-5  rounded-[5px] w-[180px] h-[40px] placeholder:text-sm placeholder:font-dm '  />
    </Flex>
    
    <div className="mt-5">
     <ul className=" flex gap-x-5">
      <li onClick={()=>handleData ("Frontend")} className='font-dm cursor-pointer text-base hover:bg-black hover:text-white px-3 py-1 duration-300 rounded-[5px]'>Fronted</li> 

       <li onClick={()=>handleData ("Backend")} className='font-dm cursor-pointer text-base hover:bg-black hover:text-white px-3 py-1 duration-300 rounded-[5px]'>Backend</li>

         <li onClick={()=>setData(SkillData)}  className='font-dm cursor-pointer text-base hover:bg-black hover:text-white px-3 py-1 duration-300 rounded-[5px]'>All</li>
     </ul>
   
   <Flex className="h-[200px] mt-2 flex-wrap overflow-y-scroll gap-10 scroll">
     {
      Data.map((item,index)=>{
        return <div key={index}>
   <div className=" w-[60px] bg-white p-2 rounded-[7px]">
    <Images src={item.url} />
   </div>
    <p className=" text-gray-500 text-center">{item.name}</p>
        </div>
      })
     }
   </Flex>
    </div>
   
    </div>

</Flex>
</section>
  )
}

export default Summary
