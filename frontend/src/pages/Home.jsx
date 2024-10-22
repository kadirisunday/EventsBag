import React from 'react'
import EventsType from '../components/EventsType'
import TopEvents from '../components/TopEvents'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <EventsType/>
      <TopEvents/>
    </div>
  )
}

export default Home