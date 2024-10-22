import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        {/* <img className='w-44 cursor-pointer' src='' alt="Eventsbag Logo" /> */}
        <p className='text-2xl font-semibold'>Eventsbag</p>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
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
            <NavLink to='get-help'>
                <li className='py-1'>Get Help</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
        <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Login</button>
        {/* <button>SignUp</button> */}
        </div>
        
    </div>
  )
}

export default Navbar