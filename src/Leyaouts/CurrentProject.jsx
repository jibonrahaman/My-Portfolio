import orebi from '../assets/orebiCurrent.png'
import Images from '../Common/Images'
import Flex from '../Common/Flex';
import { FaGithubAlt } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function CurrentProject() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <section className="current-project mt-[90px] max-w-container mx-auto">
          <h2 className=" text-3xl font-bold text-sky-400">Latest Working 
            <span className="text-sky-600"> Projects</span>
          </h2>
 
  
  <Slider {...settings}>
      <div>

      <div className="w-full p-14">
         <Flex  className=" justify-between">
         <div className="w-[40%] relative group overflow-hidden">

      <div className="scale-105 group">
      <Images src={orebi} alt={orebi} className="group-hover:scale-110 duration-500"  />
      </div>
      <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
      <div  className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
         <Flex className="  gap-x-2">
         <FaGithubAlt size={30} />
         <p >View Github</p>
         </Flex>
         <Flex className="   gap-x-2">
         <SiOpenproject  size={30} />
         <p>Live Project</p>
         </Flex>
      </div>
         </div>
         <div className=' w-[55%] text-white'>
        <h2 className=' text-3xl font-bold'>Orebi E-Commerce</h2>
        <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
        <p className=' text-xl mt-5 '>Use is Project :</p>
        <div className='flex gap-x-8 mt-6'>
          <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Context Api</p>
        </div>
         </div>

         </Flex>
         
          </div>
      </div>

      <div>

<div className="w-full p-14">
   <Flex  className=" justify-between">
   <div className="w-[40%] relative group overflow-hidden">

<div className="scale-105 group">
<Images src={orebi} alt={orebi} className="group-hover:scale-110 duration-500"  />
</div>
<div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
<div  className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
   <Flex className="  gap-x-2">
   <FaGithubAlt size={30} />
   <p >View Github</p>
   </Flex>
   <Flex className="   gap-x-2">
   <SiOpenproject  size={30} />
   <p>Live Project</p>
   </Flex>
</div>
   </div>
   <div className=' w-[55%] text-white'>
  <h2 className=' text-3xl font-bold'>Orebi E-Commerce</h2>
  <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
  <p className=' text-xl mt-5 '>Use is Project :</p>
  <div className='flex gap-x-8 mt-6'>
    <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
    <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
    <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
    <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
    <p className='text-black px-5 py-2 bg-white rounded-md'>Context Api</p>
  </div>
   </div>

   </Flex>
   
    </div>
</div>


<div>

      <div className="w-full p-14">
         <Flex  className=" justify-between">
         <div className="w-[40%] relative group overflow-hidden">

      <div className="scale-105 group">
      <Images src={orebi} alt={orebi} className="group-hover:scale-110 duration-500"  />
      </div>
      <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
      <div  className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
         <Flex className="  gap-x-2">
         <FaGithubAlt size={30} />
         <p >View Github</p>
         </Flex>
         <Flex className="   gap-x-2">
         <SiOpenproject  size={30} />
         <p>Live Project</p>
         </Flex>
      </div>
         </div>
         <div className=' w-[55%] text-white'>
        <h2 className=' text-3xl font-bold'>Orebi E-Commerce</h2>
        <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
        <p className=' text-xl mt-5 '>Use is Project :</p>
        <div className='flex gap-x-8 mt-6'>
          <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
          <p className='text-black px-5 py-2 bg-white rounded-md'>Context Api</p>
        </div>
         </div>

         </Flex>
         
          </div>
      </div>
    
    </Slider>

        
        </section>
    )
}

export default CurrentProject
