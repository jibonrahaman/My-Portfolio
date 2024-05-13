import { useEffect, useState } from 'react';
import Flex from '../Common/Flex';
import Images from '../Common/Images';
import MyPhoto from '../assets/my-photo.png';

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
  
  const skillsData = Data.filter(item => item.demo === "Skils");
  const [datas, setDatas] = useState(skillsData);
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    // Set default data to Skills when the component mounts
    setDatas(skillsData);
    setActiveButton("Skils")
  }, []);

  const handleClick = (name) => {
    const filt = Data.filter(item => item.demo === name);
    setDatas(filt);
    setActiveButton(name);
  }

  return (
    <section className="mx-w-container mx-auto pt-24">
      <Flex className="justify-center gap-x-20">
       <div className="w-[25%] ">
       <Images src={MyPhoto} alt={MyPhoto} className="h-[90%] " />
       </div>
        <div className='w-[40%]'>
          <div className='text-gray-300 flex flex-col gap-y-3'>
            <h4 className='font-bold text-4xl text-white'>About Me</h4>
            <p>I'm passionate about front-end development and aspire to build a rewarding career in this field. With proficiency in HTML, CSS, Bootstrap, Tailwind, and intermediate-level skills in JavaScript and React.js, my goal is to create user-centric web applications and websites that combine functionality with aesthetic appeal.</p>
          </div>
          <Flex className="pt-4 text-white gap-x-10">   
            <button onClick={() => handleClick("Skils")} className={`font-bold text-xl shadow px-4 ${activeButton === "Skils" && "shadow-lime-400"} hover:text-gray-400`}>Skills</button> 
            <button onClick={() => handleClick("Experience")} className={`font-bold text-xl shadow px-4 ${activeButton === "Experience" && "shadow-lime-400"} hover:text-gray-400`}>Experience</button>
            <button onClick={() => handleClick("Education")} className={`font-bold text-xl shadow px-4 ${activeButton === "Education" && "shadow-lime-400"} hover:text-gray-400`}>Education</button>
          </Flex>
          {
            datas.map((item, index) => (
              <div key={index} className='text-white pt-4'>
                <h5 className='text-xl text-gray-400'>{item.title}</h5>
                <p>{item.content}</p>        
                <p>{item.institution}</p>        
              </div>
            ))
          }
        </div>
      </Flex> 
    </section>
  )
}














// others system 


// import { useEffect, useState } from 'react';
// import Flex from '../Common/Flex';
// import Images from '../Common/Images';
// import MyPhoto from '../assets/my-photo.png';

// export default function About() {
//   const Data = [
//     { demo :"Skils",
//       title: 'Web Design:',
//       content: 'HTML/HTML5, CSS/CSS3, TAILWIND CSS, SASS, Bootstrap, JavaScript, React Js, Redux Tool-Kit, JQuery Plugins, JSON, Ajax'
//     },
//     {demo :"Skils",
//       title: 'Language:',
//       content: 'JavaScript'
//     },
//     {demo :"Skils",
//       title: 'Tools:',
//       content: 'Git, GitHub, Figma, Photoshop'
//     },

//     {demo :"Experience",
//     title: 'March 2023 - Present',
//     content: 'Studying MernStack Development at Creative it Institute'
//     },
//     {demo :"Experience",
//     title: 'Nov 2022',
//     content: 'Internship at Creative it as a Web Designer.'
//     },

//     {demo :"Education",
//     title: '2022',
//     content: 'Diploma In Computer Science Engineering',
//     institution: 'Barguna Polytechnic Institute'
//     },
//     {demo :"Education",
//     title: '2018',
//     content: 'SSC in Science',
//     institution: 'Jaldhaka Model Pilot High School'
//     }
//   ];
  
//   // const skillsData = Data.filter(item => item.demo === "Skils");
  
//   const [datas, setDatas] = useState(Data);
//   const [DataAll,setDataAll] = useState([])
//   const [activeButton, setActiveButton] = useState("");

//   // useEffect(() => {
//   //   // Set default data to Skills when the component mounts
//   //   setDatas(skillsData);
//   // }, []);

//   const handleClick = (name) => {
//     const filt = Data.filter((item)=>{
//       if(item.demo === name){
//         return item
//       }
//     })
//     setDataAll(filt);
//     setActiveButton(name);
    
//   }

//   return (
//     <section className="mx-w-container mx-auto pt-24">
//       <Flex className="justify-center gap-x-20">
//         {/* <Images src={MyPhoto} alt={MyPhoto} className="w-[25%]"/> */}
//         <div className='w-[40%]'>
//           <div className='text-gray-300 flex flex-col gap-y-3'>
//             <h4 className='font-bold text-4xl text-white'>About Me</h4>
//             <p>I'm passionate about front-end development and aspire to build a rewarding career in this field. With proficiency in HTML, CSS, Bootstrap, Tailwind, and intermediate-level skills in JavaScript and React.js, my goal is to create user-centric web applications and websites that combine functionality with aesthetic appeal.</p>
//           </div>
//           <Flex className="pt-4 text-white gap-x-10">   
//             <button onClick={() => handleClick("Skils")} className={`font-bold text-xl shadow px-4 ${activeButton === "Skils" && "shadow-lime-400"} hover:text-gray-400`}>Skills</button> 
//             <button onClick={() => handleClick("Experience")} className={`font-bold text-xl shadow px-4 ${activeButton === "Experience" && "shadow-lime-400"} hover:text-gray-400`}>Experience</button>
//             <button onClick={() => handleClick("Education")} className={`font-bold text-xl shadow px-4 ${activeButton === "Education" && "shadow-lime-400"} hover:text-gray-400`}>Education</button>
//           </Flex>
//           {
//            DataAll.length ?
//            (
//             DataAll.map((item, index) => {
//               return  <div key={index} className='text-white pt-4'>
//               <h5 className='text-xl text-gray-400'>{item.title}</h5>
//               <p>{item.content}</p>        
//               <p>{item.institution}</p>        
//             </div>
//             })
//            )
//            :
//            (
//             datas.map((item, index) => {
//             if(item.demo ===  "Skils"){
//               return <div key={index} className='text-white pt-4'>
//               <h5 className='text-xl text-gray-400'>{item.title}</h5>
//               <p>{item.content}</p>        
//               <p>{item.institution}</p>        
//             </div>
//             }
//             })
//            )
//           }
//         </div>
//       </Flex> 
//     </section>
//   )
// }
