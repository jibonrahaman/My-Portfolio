
import { FaArrowLeft } from "react-icons/fa6";


function PrevArrow({onClick}) {
    // const {onClick} = props;
  return (
    <div  onClick={onClick} className=" z-10 absolute right-20 top-0">
      <button className='px-5 rounded-md py-3  border border-green-500 text-green-600 hover:bg-green-600 hover:text-white text-xl'>
      <FaArrowLeft />
      </button> 
    </div>
      
   
  )
}

export default PrevArrow
