import React from 'react'
import { eventsType } from '../assets/assets'
import { Link } from 'react-router-dom'

const EventsType = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciallity'>
        <h1 className='text-3xl font-medium'>Find Events By Type</h1>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {
                eventsType.map((items, index)=>(
                        <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`./doctors/${items.category}`}>
                            <img className='w-16 sm:w-24 mb-2' src={items.image} alt="" />
                            <p>{items.category}</p>
                        </Link>
                    )
                )
            }
        </div>

    </div>
  )
}

export default EventsType