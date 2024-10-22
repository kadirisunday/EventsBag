import React, { useContext } from 'react'
import { allEvents } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContent';

const TopEvents = () => {
    const navigate = useNavigate();
    // const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Events</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trending events</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                allEvents.slice(0,8).map((items,index)=>(
                    <div onClick={()=>navigate(`./all-events/${items._id}`)} className='border border-red-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] trasition-all duration-500' key={index}>
                        <img className='bg-blue-50' src={items.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            
                            <p className='text-gray-900 text-lg font-medium'>{items.title}</p>
                            <p className='text-gray-600 text-sm'>{items.date}</p>
                            <p className='text-gray-600 text-sm text-red'>${items.fees}</p>
                            <p className='text-gray-600 text-sm'>{items.location}</p>
                            <p className='text-gray-600 text-sm'>{items.organizer}</p>
                        </div>
                       
                    </div>

                ))
            }
        </div>
        <button onClick={()=>{ navigate('/top-events'); scrollTo(0,0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>See More</button>
    </div>
  )
}

export default TopEvents