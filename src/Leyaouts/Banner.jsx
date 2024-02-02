import Flex from "../Common/Flex"
import MyPhoto from "../assets/my-photo.png"
import Images from "../Common/Images"
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
function Banner() {
  return (
    <section className="banner pt-14 pb-6">

      <div className=" rounded-lg shadow-shadow p-8 max-w-[950px] mx-auto ">
        <Flex className=" justify-between gap-x-4 ">

          <div className=" text-white text-2xl max-w-md  text-center">
            <h2 className="text-4xl  font-extrabold">MD Shahriar Fardous</h2>
            <h4 className=" font-semibold italic mt-2  text-red-200 "> I AM A {' '} 
              <TypeAnimation
                sequence={[                 
                  ' FRONT END DEVELOPER',
                  1500, 
                  'BACK END DEVELOPER',
                  1500,                  
                ]}
                wrapper="span"
                speed={50}
                style={{  display: 'inline-block' }}
                repeat={Infinity}
              />
               </h4>
            <a href="mailto:mdshahriarfardous407@gmail.com" className="text-base hover:underline ">mdshahriarfardous407@gmail.com</a>
            <p className="text-lg mt-8 mb-12">By mastering Node.js and Express.js alongside HTML, CSS, JavaScript, and React.js, I craft cohesive, dynamic web solutions with unified frontend and backend capabilities. </p>

            <Flex className=" justify-center gap-x-3">
            <a href="https://github.com/jibonrahaman">
            <div className="px-6 text-xl py-2 flex bg-black text-white items-center gap-x-2 rounded-md">
                <FaGithub />
              <p>Github</p>
              </div>
            </a>
             
             <a href="mailto:mdshahriarfardous407@gmail.com">
              <div className="px-6 text-xl py-2 flex bg-black text-white items-center gap-x-2 rounded-md">
              <MdMarkEmailRead />
              <p>Email</p>
              </div>
             </a>

         
          
          </Flex>

          </div>
         


          <div className=" w-64 h-64 rounded-full flex justify-center items-center ">
            <Images src={MyPhoto} alt={MyPhoto} className="w-full h-full rounded-full" />
          </div>         
        </Flex>

        
          
         
      
      </div>

   
    </section>
  )
}

export default Banner
