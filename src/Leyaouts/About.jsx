import Flex from '../Common/Flex';
import Images from '../Common/Images';
import MyPhoto from '../assets/my-photo.png'
export default function About() {
  return (
<section className="mx-w-container mx-auto pt-24">
  <Flex className=" justify-center gap-x-20 ">
   <Images src={MyPhoto} alt={MyPhoto} className="w-[25%]"/>
   <div  className='w-[40%] text-gray-300 flex flex-col gap-y-4 pt-5'>
    <h4 className=' font-bold text-4xl text-white'>About Me</h4>
    <h3 className='font-semibold text-2xl'>A dedicated Full Stack Web Developer based in Market Place</h3>
   <p>Assala Mualaikum! My name is Md Shahriar Fardous. I'm a Full Stack web developer specializing in ReactJs,Next Js, JavaScript, TypeScript, Node.js, Angular, and MongoDB. My focus is on creating responsive web pages and dynamic websites. Currently, I have professional experience in React Js & Next Js</p>
   </div>
  </Flex>
</section>
  )
}
