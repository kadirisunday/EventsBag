import React from 'react'
import { useParams } from 'react-router'

const Events = () => {

  const { eventsType } = useParams
  console.log(eventsType);
  

  return (
    <div>Events</div>
  )
}

export default Events