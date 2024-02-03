import { useState } from "react"
import Flex from "../Common/Flex"
import SkillData from '../Data/Data'
function Summary() {
  const [Data,setData] =useState(SkillData);


  return (
<section className="skill-summary mx-auto max-w-container md:mt-10">
<Flex className=" justify-between">
    <div className=" w-[40%] text-white ">
        <h2 className=" text-3xl font-bold text-sky-400">Summary</h2>
    <p className=" mt-5 text-base  w-[90%]  font-sans">I am a passionate web application and software developer specializing in MERN Stack web development. As a frontend developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js. I can develop any Figma or PSD template into React.js, and it will be responsive. I develop using modern frameworks like Tailwind CSS to create visually stunning websites. Currently, I`m working with Node.js, MongoDB, and Express.js. Recently, I developed many  website, which showcases my capabilities and sets me apart from others in the field</p>
    </div>
    
    <div className=" w-[40%] text-white">
    <Flex className=" gap-x-10">
    <h2 className=" text-3xl font-bold text-sky-400 mb-5">My Skills</h2>
    <input type="text" placeholder="search skill.." className='border  px-5  rounded-[5px] w-[180px] h-[40px] placeholder:text-sm placeholder:font-dm '  />
    </Flex>
    
   
    </div>

</Flex>
</section>
  )
}

export default Summary
