import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        {/* <img className='w-44 cursor-pointer' src='' alt="Eventsbag Logo" /> */}
        <p className='text-2xl font-semibold'>Eventsbag</p>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/find-events'>
                <li className='py-1'>Find Events</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/create-events'>
                <li className='py-1'>Create Events</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/find-ticket'>
                <li className='py-1'>Find My Ticket</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Get Help</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token?
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                       
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                       <p className='hover:text-black cursor-pointer'>My Profile</p>
                        <p className='hover:text-black cursor-pointer'>My Events</p>
                        <p className='hover:text-black cursor-pointer'>Logout</p>
                    </div> 
                    </div>
                </div>
                :  <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Login</button>
            }
       
        {/* <button>SignUp</button> */}
        </div>
        
    </div>
  )
}

export default Navbar