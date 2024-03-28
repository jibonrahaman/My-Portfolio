
import { useEffect, useState } from 'react';
import Flex from '../Common/Flex';
import Images from '../Common/Images';
import MyPhoto from '../assets/my-photo.png'
export default function About() {
  const Data = [
    { demo :"Skils",
      title: 'Web Design:',
      content: 'HTML/HTML5, CSS/CSS3, TAILWIND CSS, SASS, Bootstrap, JavaScript, React Js, Redux Tool-Kit, JQuery Plugins, JSON, Ajax'
    },
    {demo :"Skils",
      title: 'Language:',
      content: 'JavaScript'
    },
    {demo :"Skils",
      title: 'Tools:',
      content: 'Git, GitHub, Figma, Photoshop'
    },

    {demo :"Experience",
    title: 'March 2023 - Present',
    content: 'Studying MernStack Development at Creative it Institute'
    },
    {demo :"Experience",
    title: 'Nov 2022',
    content: 'Internship at Creative it as a Web Designer.'
    },

    {demo :"Education",
    title: '2022',
    content: 'Diploma In Computer Science Engineering',
    institution: 'Barguna Polytechnic Institute'
    },
    {demo :"Education",
    title: '2018',
    content: 'SSC in Science',
    institution: 'Jaldhaka Model Pilot High School'
    }
  ];
  const [datas, setDatas] = useState(skillsData);
  const skillData = Data.filter(item => item.demo === "Skils");
  useEffect(()=>{
   setDatas(skillData)
  }, []);

const handleClick =(name)=>{
const filt = Data.filter(item => item.demo === "name");
setDatas(filt)
}


  return (
<section className="mx-w-container mx-auto pt-24">
  <Flex className=" justify-center gap-x-20 ">
   <Images src={MyPhoto} alt={MyPhoto} className="w-[25%]"/>
   <div className='w-[40%]'>
   <div  className=' text-gray-300 flex flex-col gap-y-3 '>
    <h4 className=' font-bold text-4xl text-white'>About Me</h4>
    <h3 className='font-semibold text-2xl'>A dedicated Full Stack Web Developer based in Market Place</h3>
   <p>Assala Mualaikum! My name is Md Shahriar Fardous. I'm a Full Stack web developer specializing in ReactJs,Next Js, JavaScript, TypeScript, Node.js, Angular, and MongoDB. My focus is on creating responsive web pages and dynamic websites. Currently, I have professional experience in React Js & Next Js</p>
   </div>
   <Flex>
   <div className=' pt-2 text-white'>
   <button onClick={()=>handleClick("Skils")} className='font-bold text-xl shadow px-4 shadow-lime-400 hover:text-gray-400'>Skils</button> 
   <button onClick={()=>handleClick("Experience")} className='font-bold text-xl shadow px-4 shadow-lime-400 hover:text-gray-400'>Experience</button>
    <button onClick={()=>handleClick("Education")} className='font-bold text-xl shadow px-4 shadow-lime-400 hover:text-gray-400'>Education</button>
    </div>       
    
  </Flex>
  {
    datas.map ((item,index)=>{
      return <div key={index} className=' pt-4'>
      <h5 className=' text-xl text-gray-400'> {item.title}</h5>
      <p>{item.content}</p>        
      <p>{item.institution}</p>        
       </div>
    })
   }
   </div>
  </Flex> 
  
</section>
  )
}
