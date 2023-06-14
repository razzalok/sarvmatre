import {Link} from 'react-router-dom'
import Button from './shareed/Button'
import imgabout from '../asset/4380.jpg'
import BlackCard from './shareed/BlackCard'
import '../../src/index.css'

const About = () => {
  return (
    <>
    <div className='flex mt-[10vh]'>
        <div className='w-[50vw] '>
           <img src={imgabout} alt="About Img" />
        </div>
        <div className='w-[40vw]'>
            <h1 className='text-[#2EA990] text-4xl font-sans font-bold mt-20'>ABOUT US</h1>
        <h1 className='text-[#2EA990] text-2xl font-sans font-semibold mt-2'>Empowering Communities Through Sustainable Solutions - About Sarvmatre</h1>
            <p className='mt-[5vh]'>Sarvmatre is an innovative B2B e-commerce platform connecting businesses with global suppliers & customers. We empower sustainable growth through technology tools & collaborative relationships</p>
            <Button>Learn More</Button>
        </div>      
    </div>
    <BlackCard/>
    <div className='box'>
        dsffsdf
    </div>
    </>
    
  )
}

export default About
