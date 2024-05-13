import Flex from '../Common/Flex'
import Images from '../Common/Images'
import Header from '../Common/Header'
import mern from '/images/mern.gif'
export default function Problem_Solving() {
    return (
        <section className=" max-w-container mx-auto">
            <Header text="What sets me apart" className=" text-center" />
            <Flex className="pt-20 justify-center items-center gap-x-24">
                <div className="w-[35%]">
                <Images src={mern} alt={mern} />
                </div>
                <div className='w-[40%] text-gray-300 flex flex-col gap-y-7'>
                    <h4 className=' text-white font-semibold text-2xl '>Problem-Solving Prowess, innovative Solutions and Collaborative Mindset</h4>
                    <p>I thrive on finding creative and innovative solutions to complex problems, pushing the boundaries of what's possible in web development.</p>
                    <p>tackling complex challenges and finding elegant solutions, turning obstacles into opportunities.</p>
                    <p>also I believe in the power of teamwork and collaboration, making me an excellent addition to any development project.
                    </p>
                </div>
            </Flex>

        </section>
    )
}
