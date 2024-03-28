import Banner from "../Leyaouts/Banner"
import CurrentProject from "../Leyaouts/CurrentProject"
import Navbar from "../Leyaouts/Navbar"
import Portfolio from "../Leyaouts/Portfolio"
import Problem_Solving from "../Leyaouts/Problem_Solving"
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
      <Portfolio/>
      <Problem_Solving />
    </div>
  )
}

export default Home
