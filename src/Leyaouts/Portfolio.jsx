import Header from "../Common/Header";
import Images from "../Common/Images";
import Flex from "../Common/Flex";
import orebiCurrent from "../assets/orebiCurrent.png"
import portfolioData from "../Data/portfolio";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Portfolio() {
  const [data,setdata] =useState (portfolioData);
  const [portfolio,setportfolio] =useState (portfolioData);
 const handleData = (name) =>{
  let arr = []
  portfolioData.filter((item)=>{
    item.type.filter((item2) =>{
          if(item2 == name){
            arr.push(item)
          }
    })
  })
  setportfolio(arr)
 }
 console.log(portfolio);
  return (
   <section className="max-w-container mx-auto py-20">
   <Header  text="My Portfolio"/>
   <ul className="pt-16  flex justify-center gap-x-10 text-white font-bold">
   <li onClick={()=>handleData("Html Css")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Html Css</li>
   <li onClick={()=>handleData("Bootstrap")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Bootstrap</li>
   <li onClick={()=>handleData("Taillwind Css")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Taillwind Css</li>
   <li onClick={()=>handleData("Javascript")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Javascript</li>
   <li onClick={()=>handleData("React Js")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>React Js</li>
   <li onClick={()=>handleData("Next Js")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Next Js</li>  
   <li onClick={()=>handleData("")} className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>All</li>
   </ul>
   
  <Flex className="h-[450px]  flex-wrap justify-center gap-10 mt-10 scroll overflow-y-scroll">
{
  portfolio.length ?  
 (
  portfolio.map((item,index)=>{
    const {title,url}=item
    return  <div key={index}  className="w-[350px] group relative overflow-hidden rounded-lg">
   <Link to={title == "chitchat" ? "https://mern-2205-chitchat-chatting-app.vercel.app/" : title == "orebi" ? "https://orebi-fronted-e-commerce.vercel.app/" : title == "registration" ? "https://redux-using-reg-login-page.vercel.app/" : title == "todo" ? "https://todo-javascript-three.vercel.app/" : title == "todos" ?  "https://todo-class-29.vercel.app/" : title == "instagram" ? "https://instagram-clone-lemon-two.vercel.app/" : title == "slider" ? "https://class-26-img-slider.vercel.app/" : title == "game" ? "https://class-28-guess-game.vercel.app/" : title == "faq" ? "https://faq-topaz.vercel.app/" : title == "mixitup" ? "https://mixitup-simple.vercel.app/" : title == "me" ? "https://me-bay-eight.vercel.app/#Abou" : title == "omah" ? "https://omah-responsive.vercel.app/" : title == "quriarbox" ? "https://quriarbox-beige.vercel.app" : title == "petroil" ? "https://class-32-tailwind-1st-project.vercel.app" : title == "innovate" ? "https://innovet-react.vercel.app/" : title == "e-school" ? "https://e-school-iota.vercel.app/" : title == "qwery" ? "https://overview-html-css.vercel.app/" : title == "finsweet" ? "https://finswet-bootsstrap-j49h.vercel.app/" : title== "pet" ? "https://pet-html-x35t.vercel.app/" : title == "rabbe" ? "https://rabby-poushi.vercel.app/" : title == "insta-demo" ? "https://todo-about-chat-m7in.vercel.app/" : "/" }>  
    <Images src={url} alt={url} className=" group-hover:scale-105 duration-500 rounded-xl"/>  
     </Link>
    <div className="w-full h-full absolute top-0 left-0 bg-black/25 group-hover:top-[-500px] "></div>
     </div> 
   
  })
 )
  :
 (
  data.map((item,index)=>{
    const {title,url}=item
    return  <div key={index}  className="w-[350px] group relative overflow-hidden rounded-lg">
    <Link to={title == "chitchat" ? "https://mern-2205-chitchat-chatting-app.vercel.app/" : title == "orebi" ? "https://orebi-fronted-e-commerce.vercel.app/" : title == "registration" ? "https://redux-using-reg-login-page.vercel.app/" : title == "todo" ? "https://todo-javascript-three.vercel.app/" : title == "todos" ?  "https://todo-class-29.vercel.app/" : title == "instagram" ? "https://instagram-clone-lemon-two.vercel.app/" : title == "slider" ? "https://class-26-img-slider.vercel.app/" : title == "game" ? "https://class-28-guess-game.vercel.app/" : title == "faq" ? "https://faq-topaz.vercel.app/" : title == "mixitup" ? "https://mixitup-simple.vercel.app/" : title == "me" ? "https://me-bay-eight.vercel.app/#Abou" : title == "omah" ? "https://omah-responsive.vercel.app/" : title == "quriarbox" ? "https://quriarbox-beige.vercel.app" : title == "petroil" ? "https://class-32-tailwind-1st-project.vercel.app" : title == "innovate" ? "https://innovet-react.vercel.app/" : title == "e-school" ? "https://e-school-iota.vercel.app/" : title == "qwery" ? "https://overview-html-css.vercel.app/" : title == "finsweet" ? "https://finswet-bootsstrap-j49h.vercel.app/" : title== "pet" ? "https://pet-html-x35t.vercel.app/" : title == "rabbe" ? "https://rabby-poushi.vercel.app/" : title == "insta-demo" ? "https://todo-about-chat-m7in.vercel.app/" : "/" }>  
     <Images src={url} alt={url} className=" group-hover:scale-105 duration-500 rounded-xl"/>  
      </Link>
     <div className="w-full h-full absolute top-0 left-0 bg-black/25 group-hover:top-[-500px] "></div>
      </div> 
  })
 )
}
  </Flex>
   </section>
  )
}
