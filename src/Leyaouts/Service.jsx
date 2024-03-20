import Header from "../Common/Header";
import Flex from "../Common/Flex";
import { FaCode } from "react-icons/fa6";
import { BsFiletypePsd } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";

export default function Service() {
  return (
   <section className="Service max-w-container mx-auto">
   <div>
   <Header text="Service"/>
   <Flex className=" flex-wrap gap-y-8 pt-10 justify-between">
   <div className="w-[420px] hover:bg-gray-700 shadow-shadow hover:shadow-slate-500 duration-500 group hover:text-gray-300 bg-[#f0ebd8] rounded-xl text-black p-6">
   <FaCode size={60} className="text-gray-700 group-hover:text-gray-300 duration-300" />
   <h3 className="text-xl font-bold py-3">Web Devolopment</h3>
   <p className=" font-dm">Passionate front-end developer with skills in HTML, CSS, Bootstrap, Tailwind, and intermediate JavaScript and React.js. Goal is to create user-centered, visually appealing web applications, committed to continuous learning and staying updated on industry trends, and seeks opportunities for personal and professional growth.</p>
   </div>
   <div className="w-[420px] hover:bg-gray-700 shadow-shadow hover:shadow-slate-500 duration-500  group hover:text-gray-300 bg-[#f0ebd8] rounded-xl text-black p-6">
   <BsFiletypePsd  size={60} className="text-gray-700 group-hover:text-gray-300 duration-300" />
   <h3 className="text-xl font-bold py-3">PSD TO HTML</h3>
   <p className=" font-dm">I am writing to express my expertise in converting PSD designs into pixel-perfect, responsive HTML websites. With a proven track record of delivering high-quality results, I am well-versed in HTML5, CSS3, and JavaScript. I look forward to the opportunity to contribute to your team`s success.</p>
   </div>
    <div className="w-[420px] hover:bg-gray-700 shadow-shadow hover:shadow-slate-500 duration-500  group hover:text-gray-300 bg-[#f0ebd8] rounded-xl text-black p-6">
   <FiFigma   size={60} className="text-gray-700 group-hover:text-gray-300 duration-300" />
   <h3 className="text-xl font-bold py-3">Figma to HTML</h3>
   <p className=" font-dm">I am excited to share my expertise in translating Figma designs into meticulously crafted HTML code. With a strong command of HTML5, CSS3, and JavaScript, I ensure seamless and pixel-perfect conversions. I look forward to the opportunity to contribute to your team's success.

</p>
   </div>

    <div className="w-[420px] hover:bg-gray-700 shadow-shadow hover:shadow-slate-500 duration-500  group hover:text-gray-300 bg-[#f0ebd8] rounded-xl text-black p-6">
   <FaBootstrap     size={60} className="text-gray-700 group-hover:text-gray-300 duration-300" />
   <h3 className="text-xl font-bold py-3">JavaScript</h3>
   <p className=" font-dm">I am a seasoned expert in basic vanilla JavaScript, proficient in core concepts and syntax. With a strong grasp of variables, loops, conditionals, and DOM manipulation, I excel in creating dynamic web elements. I look forward to the opportunity to contribute to your team's success.

</p>
   </div>
    <div className="w-[420px] hover:bg-gray-700 shadow-shadow hover:shadow-slate-500 duration-500  group hover:text-gray-300 bg-[#f0ebd8] rounded-xl text-black p-6">
   <TbBrandJavascript    size={60} className="text-gray-700 group-hover:text-gray-300 duration-300" />
   <h3 className="text-xl font-bold py-3">Bootstrap</h3>
   <p className=" font-dm">I am a seasoned Bootstrap developer, proficient in crafting responsive and visually engaging web experiences. With a wealth of experience in Bootstrap, I excel at building modern and user-friendly interfaces that adapt seamlessly across devices. I look forward to the opportunity to contribute to your team's success.

</p>
   </div> 
   <div className="w-[420px] hover:bg-gray-700 shadow-shadow hover:shadow-slate-500 duration-500  group hover:text-gray-300 bg-[#f0ebd8] rounded-xl text-black p-6">
   <BiLogoTailwindCss     size={60} className="text-gray-700 group-hover:text-gray-300 duration-300" />
   <h3 className="text-xl font-bold py-3">Tailwind css</h3>
   <p className=" font-dm">I am a proficient developer who has enthusiastically embraced Tailwind CSS. With its utility-first approach, I've found a powerful tool for creating streamlined and maintainable stylesheets.I'm enthusiastic about the possibilities that Tailwind CSS brings to web development and eagerly anticipate contributing my skills to enhance your team's projects.

</p>
   </div>
   
   </Flex>
   </div>
   </section>
  )
}
