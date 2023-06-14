import Button from './shareed/Button'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    
    <div className='flex relative content-around overflow-hidden'>
        <div className='w-[50vw] ml-[5vw]'>
            <h1 className='text-[#2EA990] text-2xl font-sans font-semibold mt-10'>Sarvmatre</h1>
            <h1 className='text-[#2EA990] text-5xl font-sans font-extrabold  mt-[20vh]'>We Bring Sustainable <br/>to the Businesses</h1>
            <p className='mt-[5vh]'>Empower your business with Sarvmatre - your trusted partner for sustainable growth. Connect seamlessly with suppliers and customers, enhance supply chain management, and achieve your goals with ease. Join our mission to transform the B2B e-commerce landscape and build a better future for all.</p>
            <Button>Button</Button>
        </div>
        <div className='w-[50vw] '>
        <svg  className='rotate-[190deg] h-[70vh] absolute top-[10vh] left-[53vw]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0E6871" fill-opacity="1" d="M0,224L12,186.7C24,149,48,75,72,90.7C96,107,120,213,144,245.3C168,277,192,235,216,234.7C240,235,264,277,288,250.7C312,224,336,128,360,101.3C384,75,408,117,432,144C456,171,480,181,504,170.7C528,160,552,128,576,133.3C600,139,624,181,648,192C672,203,696,181,720,192C744,203,768,245,792,240C816,235,840,181,864,170.7C888,160,912,192,936,186.7C960,181,984,139,1008,101.3C1032,64,1056,32,1080,48C1104,64,1128,128,1152,154.7C1176,181,1200,171,1224,160C1248,149,1272,139,1296,122.7C1320,107,1344,85,1368,117.3C1392,149,1416,235,1428,277.3L1440,320L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path></svg>
        <svg  className='rotate-[190deg] h-[75vh] absolute top-[20vh] left-[50vw]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0E6871" fill-opacity="0.3" d="M0,224L12,186.7C24,149,48,75,72,90.7C96,107,120,213,144,245.3C168,277,192,235,216,234.7C240,235,264,277,288,250.7C312,224,336,128,360,101.3C384,75,408,117,432,144C456,171,480,181,504,170.7C528,160,552,128,576,133.3C600,139,624,181,648,192C672,203,696,181,720,192C744,203,768,245,792,240C816,235,840,181,864,170.7C888,160,912,192,936,186.7C960,181,984,139,1008,101.3C1032,64,1056,32,1080,48C1104,64,1128,128,1152,154.7C1176,181,1200,171,1224,160C1248,149,1272,139,1296,122.7C1320,107,1344,85,1368,117.3C1392,149,1416,235,1428,277.3L1440,320L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path></svg>
        <ul className='list-none flex absolute gap-x-5 text-[#fff]	ml-32 mt-10'>
            <Link to="/" className='relative hover:underline transition-transform duration-300 ease-in delay-200 hover:scale-x-100'>HOME</Link>
            <Link to="/about" className='relative hover:underline transition-transform duration-300 ease-in delay-200 hover:scale-x-100'>ABOUT</Link>
            <Link className='relative hover:underline transition-transform duration-300 ease-in delay-200 hover:scale-x-100'>CAREER</Link>
            <Link className='relative hover:underline transition-transform duration-300 ease-in delay-200 hover:scale-x-100'>BLOG</Link>
            <Link className='relative hover:underline transition-transform duration-300 ease-in delay-200 hover:scale-x-100'>CONTACT US</Link>
        </ul>
        </div>
      
      
    </div>
  )
}

export default Hero
