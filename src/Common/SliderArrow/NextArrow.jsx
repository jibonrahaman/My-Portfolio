import { FaArrowRight } from "react-icons/fa6";
function NextArrow({onClick}) {
 
  return (
    <div  onClick={onClick} className=" z-10 absolute right-0 top-0">
       <button className='px-4 py-3  border border-green-500 text-white bg-green-600 hover:bg-transparent text-xl'>
      <FaArrowRight />
      </button>
    </div>
   
  )
}

export default NextArrow
