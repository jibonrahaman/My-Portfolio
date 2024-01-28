import Flex from "../Common/Flex"
import Images from "../Common/Images"
import logo from "../assets/my-logo.png"
function Navbar() {
  return (
    <section className="navbar py-[20px] px-[100px]">
        <div>
            <Flex>
                <Images src={logo} alt={logo} className="w-[60px]"/>
            </Flex>
        </div>
    </section>
  )
}

export default Navbar
