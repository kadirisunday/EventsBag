import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flx-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl text-white md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Events<br className='hidden sm:block'/> With Trusted Manager</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-dark'>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through extensive list of events, <br className='hidden sm:block'/> locate and find an events </p>
            </div>
            <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#category">
                All Events <img src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute h-auto bottom-0 rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header