import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import icon from '../assets/Logo/accounts 1.png'
import HomeMain from './HomeMain'
import ButtonDetails from './ButtonDetails'
import man from '../assets/Logo/P3OLGJ1 copy 1.png'

const Home = () => {
  return (
    <section>
      <div className='bg-orange-400 flex'>
        <div className='my-container flex flex-col items-center pb-24 text-center lg:pb-56 text-blue-700'>
          <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
          One Step Closer To Your Dream Job
          </h1>
          <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <div className='flex flex-wrap justify-center'>
            <Link to='/shop'>
              <button type='button' className='btn-primary'>
                JOBS NOW
              </button>
            </Link>
            <Link to='/about'>
              <button type='button' className='btn-outlined'>
                Learn more
              </button>
            </Link>
          </div>
        </div>
        <img src={man} alt="" />
      </div>
     
     <section>
      
      <HomeMain></HomeMain>
     </section>
     {/* buttton-------------------- */}
     
    </section>
    
   
  )
}

export default Home
