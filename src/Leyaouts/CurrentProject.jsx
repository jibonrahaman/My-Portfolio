import orebi from '../assets/orebiCurrent.png'
import Images from '../Common/Images'
import Flex from '../Common/Flex';
import { FaGithubAlt } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";

function CurrentProject() {
    return (
        <section className="current-project mt-[90px] max-w-container mx-auto">
          <h2 className=" text-3xl font-bold text-sky-400">Latest Working 
            <span className="text-sky-600"> Projects</span>
          </h2>

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
        <h2>Orebi E-Commerce</h2>
         </div>

         </Flex>
          </div>
        </section>
    )
}

export default CurrentProject
