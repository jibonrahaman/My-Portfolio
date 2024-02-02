import Banner from "../Leyaouts/Banner"
import Navbar from "../Leyaouts/Navbar"
import Summary from "../Leyaouts/Summary"


function Home() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-600 ">
      <Navbar/>
      <Banner/>
      <Summary/>
    </div>
  )
}

export default Home
