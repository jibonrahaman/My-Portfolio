import Banner from "../Leyaouts/Banner"
import CurrentProject from "../Leyaouts/CurrentProject"
import Navbar from "../Leyaouts/Navbar"
import Service from "../Leyaouts/Service"
import Summary from "../Leyaouts/Summary"


function Home() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-600 ">
      <Navbar/>
      <Banner/>
      <Summary/>
      <CurrentProject/>
      <Service/>
    </div>
  )
}

export default Home
