import Flex from '../Common/Flex';
import Images from '../Common/Images';
import MyPhoto from '../assets/my-photo.png'
export default function About() {
  return (
<section className="mx-w-container mx-auto ">
  <Flex className=" justify-center gap-x-20">
   <Images src={MyPhoto} alt={MyPhoto} />
   <div  className=' text-gray-300'>
    <h4 className=' font-bold text-2xl text-white'>About Me</h4>
   </div>
  </Flex>
</section>
  )
}
