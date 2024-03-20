import Header from "../Common/Header";

export default function Portfolio() {
  return (
   <section className="max-w-container mx-auto py-20">
   <Header  text="My Portfolio"/>
   <ul className=" flex justify-center gap-x-10 text-white font-bold">
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Html Css</li>
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Bootstrap</li>
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Taillwind Css</li>
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Javascript</li>
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>React Js</li>
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>Next Js</li>  
   <li className='bg-black hover:text-black hover:bg-white px-2 md:px-3 cursor-pointer py-1 duration-300 rounded-[5px]'>All</li>
   </ul>
   </section>
  )
}
