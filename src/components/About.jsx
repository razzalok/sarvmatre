import {Link} from 'react-router-dom'
import Button from './shareed/Button'
import imgabout from '../asset/4380.jpg'
const About = () => {
  return (
    <div className='flex '>
        <div className='w-[50vw] '>
           <img src={imgabout} alt="About Img" />
        </div>
        <div className='w-[50vw]'>
            <h1 className='text-[#2EA990] text-5xl font-sans font-extrabold  mt-[20vh]'>ABOUT US</h1>
        <h1 className='text-[#2EA990] text-2xl font-sans font-semibold mt-10'>Empowering Communities Through Sustainable Solutions - About Sarvmatre</h1>
            <p className='mt-[5vh]'>Sarvmatre is an innovative B2B e-commerce platform connecting businesses with global suppliers & customers. We empower sustainable growth through technology tools & collaborative relationships</p>
            <Button>Learn More</Button>
        </div>
      
      
    </div>
  )
}

export default About
