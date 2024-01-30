import Flex from "../Common/Flex"
import MyPhoto from "../assets/my-photo.png"
import Images from "../Common/Images"
function Banner() {
  return (
   <section className="banner pt-14 pb-6"> 
<div className=" rounded-lg shadow-shadow p-8 max-w-[950px] mx-auto ">
<Flex className=" justify-between gap-x-4 ">
<div className=" text-white text-2xl max-w-md  text-center">
    <h2 className="text-4xl italic font-extrabold text-gray-300 ">MD Shahriar Fardous</h2>
    <h4 className=" font-semibold italic mt-2"> I AM A  BACK END DEVELOPER </h4>
    <a href="mailto:mdshahriarfardous407@gmail.com" className="text-base hover:underline ">mdshahriarfardous407@gmail.com</a>
    <p className="text-lg mt-8 mb-12">By mastering Node.js and Express.js alongside HTML, CSS, JavaScript, and React.js, I craft cohesive, dynamic web solutions with unified frontend and backend capabilities. </p>
  </div>
<div className=" w-64 h-64 rounded-full flex justify-center items-center ">
<Images src={MyPhoto} alt={MyPhoto} className="w-full h-full rounded-full"/>
</div>
</Flex>
</div>
   </section>
  )
}

export default Banner
