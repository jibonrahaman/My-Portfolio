import Header from "../Common/Header"
import orebi from '../assets/orebiCurrent.png'
import Images from '../Common/Images'
import Flex from '../Common/Flex'
function CurrentProject() {
    return (
        <section className="current-project mt-[110px] max-w-container mx-auto">
          <h2 className=" text-3xl font-bold text-sky-400">Latest Working 
            <span className="text-sky-700"> Projects</span>
          </h2>

          <div className="w-full p-16">
         <Flex  className=" justify-between">
         <div className="w-[40%] relative group overflow-hidden">

      <div className="scale-105 group">
      <Images src={orebi} alt={orebi} className="group-hover:scale-110 duration-500"  />
      </div>

      <div className=" w-full h-full bg-black/70 absolute top-0 left-[-300px] group-hover:left-0 duration-500   "></div>
         </div>
         </Flex>
          </div>
        </section>
    )
}

export default CurrentProject
