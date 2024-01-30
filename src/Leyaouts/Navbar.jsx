import Flex from "../Common/Flex"
import Images from "../Common/Images"
import logo from "../assets/my-logo.png"
function Navbar() {
    return (
        <section className="navbar  px-[100px]">
            <div>
                <Flex className=" justify-between items-center ">
                    <div className="w-[5%] pt-[10px]">
                    <Images src={logo} alt={logo}  />
                    </div>
                    <div className=" w-[35%]">
                        <ul className="flex  justify-between text-white items-center">
                            <li className=" relative after:absolute after:content-[''] after:bottom-[-5px] after:left-0  after:w-0 after:h-1 after:rounded-md after:bg-white  duration-700 after:duration-700 hover:after:w-6  ">Home</li>

                            <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-0  after:w-0 after:h-1 after:rounded-md after:bg-white  duration-700 after:duration-700 hover:after:w-6">Service</li>

                            <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-0  after:w-0 after:h-1 after:rounded-md after:bg-white  duration-700 after:duration-700 hover:after:w-6">Portfolio</li>

                            <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-0  after:w-0 after:h-1 after:rounded-md after:bg-white  duration-700 after:duration-700 hover:after:w-6">Blog</li>
                          
                            <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-0  after:w-0 after:h-1 after:rounded-md after:bg-white  duration-700 after:duration-700 hover:after:w-6">About</li>

                            
                
                        </ul>

                    </div>
                    <button type="button" className="px-6 py-2 rounded-[5px]  text-base bg-first text-white border border-eight hover:bg-transparent"> Contact</button>
                </Flex>
            </div>
        </section>
    )
}

export default Navbar
