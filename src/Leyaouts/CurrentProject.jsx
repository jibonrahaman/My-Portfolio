import orebi from '../assets/orebiCurrent.png'
import Images from '../Common/Images'
import Flex from '../Common/Flex';
import { FaGithubAlt } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import PrevArrow from '../Common/SliderArrow/PrevArrow';
import NextArrow from '../Common/SliderArrow/NextArrow';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import chitchat from '../assets/p1.png'
import insta from '../assets/p2.png'
import demo from '../assets/p3.png'
import { Link } from "react-router-dom"
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

function CurrentProject() {
  let settings = {
    // dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="current-project mt-[90px] max-w-container mx-auto">
      <div className=' flex justify-between'>
        <h2 className=" text-3xl font-bold text-sky-400">Latest Working
          <span className="text-sky-600"> Projects</span>
        </h2>
        {/* <Flex>
    <NextArrow/>
    <PrevArrow/>
  </Flex> */}

      </div>


      <Slider {...settings}>
        {/* project design 1 */}
        <div>
          <div className="w-full p-14">
            <Flex className=" justify-between">
              <div className="w-[40%] relative group overflow-hidden">
                <div className="scale-105 group">
                  <Images src={orebi} alt={orebi} className="group-hover:scale-110 duration-500" />
                </div>
                <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
                <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
                  <Link to="https://github.com/jibonrahaman/Orebi-fronted-E-commerce">
                    <button className="flex gap-x-2">
                      <FaGithubAlt size={30} />
                      <p >View Github</p>
                    </button>
                  </Link>
                  <Link to="https://orebi-fronted-e-commerce.vercel.app/
">                    <button className=" flex gap-x-2">
                      <SiOpenproject size={30} />
                      <p>Live Project</p>
                    </button>
                  </Link>

                </div>
              </div>
              <div className=' w-[55%] text-white'>
                <h2 className=' text-3xl font-bold'>Orebi E-Commerce</h2>
                <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
                <p className=' text-xl mt-5 '>Use is Project :</p>
                <div className='flex gap-x-8 mt-8'>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Context Api</p>
                </div>
                <Flex className=" gap-x-5 justify-center mt-10">
                  <Link to="https://github.com/jibonrahaman/Orebi-fronted-E-commerce">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Code</h5>
                      <SiGithub />
                    </button>
                  </Link>
                  <Link to="https://orebi-fronted-e-commerce.vercel.app/
">                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Live</h5>
                      <FaExternalLinkAlt />
                    </button>
                  </Link>
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
        {/* project design 1 */}

        {/* project design 2 */}
        <div>
          <div className="w-full p-14">
            <Flex className=" justify-between">
              <div className="w-[40%] relative group overflow-hidden">
                <div className="scale-105 group">
                  <Images src={chitchat} alt={chitchat} className="group-hover:scale-110 duration-500 h-full" />
                </div>
                <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
                <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
                  <Link to="https://github.com/jibonrahaman/Mern-2205-Chitchat-ChattingApp">
                    <button className="flex gap-x-2">
                      <FaGithubAlt size={30} />
                      <p >View Github</p>
                    </button>
                  </Link>
                  <Link to="https://mern-2205-chitchat-chatting-app.vercel.app/">
                    <button className=" flex gap-x-2">
                      <SiOpenproject size={30} />
                      <p>Live Project</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className=' w-[55%] text-white'>
                <h2 className=' text-3xl font-bold'>ChitChat App</h2>
                <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
                <p className=' text-xl mt-5 '>Use is Project :</p>
                <div className='flex gap-x-8 mt-8'>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Fire Base</p>
                </div>
                <Flex className=" gap-x-5 justify-center mt-10">
                  <Link to="https://github.com/jibonrahaman/Mern-2205-Chitchat-ChattingApp">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Code</h5>
                      <SiGithub />
                    </button>
                  </Link>
                  <Link to="https://mern-2205-chitchat-chatting-app.vercel.app/">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Live</h5>
                      <FaExternalLinkAlt />
                    </button>
                  </Link>
                </Flex>
              </div>
            </Flex>

          </div>
        </div>
        {/* project design 2 */}

        {/* project design 3 */}
        <div>
          <div className="w-full p-14">
            <Flex className=" justify-between">
              <div className="w-[40%] relative group overflow-hidden">

                <div className="scale-105 group">
                  <Images src={demo} alt={demo} className="group-hover:scale-110 duration-500 h-full" />
                </div>
                <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
                <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">

                  <Link to="https://github.com/jibonrahaman/ME">
                    <button className="flex gap-x-2">
                      <FaGithubAlt size={30} />
                      <p >View Github</p>
                    </button>
                  </Link>
                  <Link to="https://me-bay-eight.vercel.app/#About">
                    <button className=" flex gap-x-2">
                      <SiOpenproject size={30} />
                      <p>Live Project</p>
                    </button></Link>

                </div>
              </div>
              <div className=' w-[55%] text-white'>
                <h2 className=' text-3xl font-bold'>My demo Portfolio</h2>
                <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
                <p className=' text-xl mt-5 '>Use is Project :</p>
                <div className='flex gap-x-8 mt-8'>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Context Api</p>
                </div>
                <Flex className=" gap-x-5 justify-center mt-10">
                  <Link to="https://github.com/jibonrahaman/ME">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Code</h5>
                      <SiGithub />
                    </button>
                  </Link>
                  <Link to="https://me-bay-eight.vercel.app/#About">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Live</h5>
                      <FaExternalLinkAlt />
                    </button>
                  </Link>
                </Flex>
              </div>

            </Flex>

          </div>
        </div>
        {/* project design 3 */}

        {/* project design  4*/}
        <div>
          <div className="w-full p-14">
            <Flex className=" justify-between">
              <div className="w-[40%] relative group overflow-hidden">

                <div className="scale-105 group">
                  <Images src={insta} alt={insta} className="group-hover:scale-110 duration-500 h-full" />
                </div>
                <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
                <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">

                  <Link to="https://github.com/jibonrahaman/Instagram-Clone">
                    <button className="flex gap-x-2">
                      <FaGithubAlt size={30} />
                      <p >View Github</p>
                    </button>
                  </Link>


                  <Link to="https://instagram-clone-lemon-two.vercel.app/">
                    <button className=" flex gap-x-2">
                      <SiOpenproject size={30} />
                      <p>Live Project</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className=' w-[55%] text-white'>
                <h2 className=' text-3xl font-bold'>Instagram Clone Demo</h2>
                <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
                <p className=' text-xl mt-5 '>Use is Project :</p>
                <div className='flex gap-x-8 mt-8'>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
                  <p className='text-black px-5 py-2 bg-white rounded-md'>Fire Base</p>
                </div>
                <Flex className=" gap-x-5 justify-center mt-10">
                  <Link to="https://github.com/jibonrahaman/Instagram-Clone">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Code</h5>
                      <SiGithub />
                    </button>
                  </Link>
                  <Link to="https://instagram-clone-lemon-two.vercel.app/">
                    <button className="flex items-center gap-x-2 font-bold text-xl">
                      <h5>Live</h5>
                      <FaExternalLinkAlt />
                    </button>
                  </Link>
                </Flex>
              </div>

            </Flex>

          </div>
        </div>
        {/* project design  4*/}

      </Slider>


    </section>
  )
}

export default CurrentProject
//  ==============


// import orebi from '../assets/orebiCurrent.png'
// import Images from '../Common/Images'
// import Flex from '../Common/Flex';
// import { FaGithubAlt } from "react-icons/fa";
// import { SiOpenproject } from "react-icons/si";
// import PrevArrow from '../Common/SliderArrow/PrevArrow';
// import NextArrow from '../Common/SliderArrow/NextArrow';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import chitchat from '../assets/p1.png'
// import insta from '../assets/p2.png'
// import demo from '../assets/p3.png'
// import { Link } from "react-router-dom"
// import { SiGithub } from "react-icons/si";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { useEffect, useState } from 'react';
// import CurrentProjectDatas from '../Data/CurrentProjectDatas';

// function CurrentProject() {
//   let settings = {
//     // dots: false,
//     infinite: true,
//     speed: 2000,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   const [datas, setdatas] = useState(CurrentProjectDatas)
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     const filts = datas.filter((item) => {
//       return item
//     })
//     setdata(filts)
//   }, [])

//   return (
//     <section className="current-project mt-[90px] max-w-container mx-auto">
//       <div className=' flex justify-between'>
//         <h2 className=" text-3xl font-bold text-sky-400">Latest Working
//           <span className="text-sky-600"> Projects</span>
//         </h2>
//         {/* <Flex>
//     <NextArrow/>
//     <PrevArrow/>
//   </Flex> */}

//       </div>


//       <Slider {...settings}>
//         {
//           data.map((item, index) => {
//             const {title,img,projectName,projectUsing,projectDescription} = item;
//             return <div>
//               <div key={index} className="w-full p-14">
//                 <Flex className=" justify-between">
//                   <div className="w-[40%] relative group overflow-hidden">
//                     <div className="scale-105 group">
//                       <Images src={img} alt={img} className="group-hover:scale-110 duration-500" />
//                     </div>
//                     <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
//                     <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
//                       <Link to="https://github.com/jibonrahaman/Orebi-fronted-E-commerce">
//                         <button className="flex gap-x-2">
//                           <FaGithubAlt size={30} />
//                           <p >View Github</p>
//                         </button>
//                       </Link>
//                       <Link to="https://orebi-fronted-e-commerce.vercel.app/
//   ">                    <button className=" flex gap-x-2">
//                           <SiOpenproject size={30} />
//                           <p>Live Project</p>
//                         </button>
//                       </Link>

//                     </div>
//                   </div>
//                   <div className=' w-[55%] text-white'>
//                     <h2 className=' text-3xl font-bold'>{projectName}</h2>
//                     <p className='my-4 w-[70%] text-purple-200'>{projectDescription}</p>
//                     <p className=' text-xl mt-5 '>Use is Project :</p>
//                     <div className='flex gap-x-8 mt-8'>
//       <p className='text-black px-5 py-2 bg-white rounded-md'>{projectUsing}</p>
                     
//                     </div>
//                     <Flex className=" gap-x-5 justify-center mt-10">
//                       <Link to="https://github.com/jibonrahaman/Orebi-fronted-E-commerce">
//                         <button className="flex items-center gap-x-2 font-bold text-xl">
//                           <h5>Code</h5>
//                           <SiGithub />
//                         </button>
//                       </Link>
//   <Link to="https://orebi-fronted-e-commerce.vercel.app/"> 
//     <button className="flex items-center gap-x-2 font-bold text-xl">
//                           <h5>Live</h5>
//                           <FaExternalLinkAlt />
//                         </button>
//                       </Link>
//                     </Flex>
//                   </div>
//                 </Flex>
//               </div>
//             </div>

//           })
//         }

//         {/* project design 2 */}
//         {/* <div>
//           <div className="w-full p-14">
//             <Flex className=" justify-between">
//               <div className="w-[40%] relative group overflow-hidden">
//                 <div className="scale-105 group">
//                   <Images src={chitchat} alt={chitchat} className="group-hover:scale-110 duration-500 h-full" />
//                 </div>
//                 <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
//                 <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">
//                   <Link to="https://github.com/jibonrahaman/Mern-2205-Chitchat-ChattingApp">
//                     <button className="flex gap-x-2">
//                       <FaGithubAlt size={30} />
//                       <p >View Github</p>
//                     </button>
//                   </Link>
//                   <Link to="https://mern-2205-chitchat-chatting-app.vercel.app/">
//                     <button className=" flex gap-x-2">
//                       <SiOpenproject size={30} />
//                       <p>Live Project</p>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className=' w-[55%] text-white'>
//                 <h2 className=' text-3xl font-bold'>ChitChat App</h2>
//                 <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
//                 <p className=' text-xl mt-5 '>Use is Project :</p>
//                 <div className='flex gap-x-8 mt-8'>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Fire Base</p>
//                 </div>
//                 <Flex className=" gap-x-5 justify-center mt-10">
//                   <Link to="https://github.com/jibonrahaman/Mern-2205-Chitchat-ChattingApp">
//                     <button className="flex items-center gap-x-2 font-bold text-xl">
//                       <h5>Code</h5>
//                       <SiGithub />
//                     </button>
//                   </Link>
//                   <Link to="https://mern-2205-chitchat-chatting-app.vercel.app/">
//                     <button className="flex items-center gap-x-2 font-bold text-xl">
//                       <h5>Live</h5>
//                       <FaExternalLinkAlt />
//                     </button>
//                   </Link>
//                 </Flex>
//               </div>
//             </Flex>

//           </div>
//         </div> */}
//         {/* project design 2 */}

//         {/* project design 3 */}
//         {/* <div>
//           <div className="w-full p-14">
//             <Flex className=" justify-between">
//               <div className="w-[40%] relative group overflow-hidden">

//                 <div className="scale-105 group">
//                   <Images src={demo} alt={demo} className="group-hover:scale-110 duration-500 h-full" />
//                 </div>
//                 <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
//                 <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">

//                   <Link to="https://github.com/jibonrahaman/ME">
//                     <button className="flex gap-x-2">
//                       <FaGithubAlt size={30} />
//                       <p >View Github</p>
//                     </button>
//                   </Link>
//                   <Link to="https://me-bay-eight.vercel.app/#About">
//                     <button className=" flex gap-x-2">
//                       <SiOpenproject size={30} />
//                       <p>Live Project</p>
//                     </button></Link>

//                 </div>
//               </div>
//               <div className=' w-[55%] text-white'>
//                 <h2 className=' text-3xl font-bold'>My demo Portfolio</h2>
//                 <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
//                 <p className=' text-xl mt-5 '>Use is Project :</p>
//                 <div className='flex gap-x-8 mt-8'>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Context Api</p>
//                 </div>
//                 <Flex className=" gap-x-5 justify-center mt-10">
//                   <Link to="https://github.com/jibonrahaman/ME">
//                     <button className="flex items-center gap-x-2 font-bold text-xl">
//                       <h5>Code</h5>
//                       <SiGithub />
//                     </button>
//                   </Link>
//                   <Link to="https://me-bay-eight.vercel.app/#About">
//                     <button className="flex items-center gap-x-2 font-bold text-xl">
//                       <h5>Live</h5>
//                       <FaExternalLinkAlt />
//                     </button>
//                   </Link>
//                 </Flex>
//               </div>

//             </Flex>

//           </div>
//         </div> */}
//         {/* project design 3 */}

//         {/* project design  4*/}
//         {/* <div>
//           <div className="w-full p-14">
//             <Flex className=" justify-between">
//               <div className="w-[40%] relative group overflow-hidden">

//                 <div className="scale-105 group">
//                   <Images src={insta} alt={insta} className="group-hover:scale-110 duration-500 h-full" />
//                 </div>
//                 <div className=" w-full h-full bg-black/70 absolute top-0 left-[-100%] group-hover:left-0 duration-500   "></div>
//                 <div className="w-full h-full  absolute top-0 left-[-100%] group-hover:left-0 duration-500  flex justify-center items-center gap-x-10 text-white text-lg font-bold font-sans underline">

//                   <Link to="https://github.com/jibonrahaman/Instagram-Clone">
//                     <button className="flex gap-x-2">
//                       <FaGithubAlt size={30} />
//                       <p >View Github</p>
//                     </button>
//                   </Link>


//                   <Link to="https://instagram-clone-lemon-two.vercel.app/">
//                     <button className=" flex gap-x-2">
//                       <SiOpenproject size={30} />
//                       <p>Live Project</p>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className=' w-[55%] text-white'>
//                 <h2 className=' text-3xl font-bold'>Instagram Clone Demo</h2>
//                 <p className='my-4 w-[70%] text-purple-200'>On this website, user and vendors can sign up and log in. The seller can sell the product and the user can buy the product. The website is fully responsive.</p>
//                 <p className=' text-xl mt-5 '>Use is Project :</p>
//                 <div className='flex gap-x-8 mt-8'>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>React</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Tailwind</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Redux</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Javascript</p>
//                   <p className='text-black px-5 py-2 bg-white rounded-md'>Fire Base</p>
//                 </div>
//                 <Flex className=" gap-x-5 justify-center mt-10">
//                   <Link to="https://github.com/jibonrahaman/Instagram-Clone">
//                     <button className="flex items-center gap-x-2 font-bold text-xl">
//                       <h5>Code</h5>
//                       <SiGithub />
//                     </button>
//                   </Link>
//                   <Link to="https://instagram-clone-lemon-two.vercel.app/">
//                     <button className="flex items-center gap-x-2 font-bold text-xl">
//                       <h5>Live</h5>
//                       <FaExternalLinkAlt />
//                     </button>
//                   </Link>
//                 </Flex>
//               </div>

//             </Flex>

//           </div>
//         </div> */}
//         {/* project design  4*/}

//       </Slider>


//     </section>
//   )
// }

// export default CurrentProject
