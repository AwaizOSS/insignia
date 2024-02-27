import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import Dashboard from './Dashboard'
function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className="main">
            <SideNav />
            <Dashboard />
        </div>
    </div>
  )
}

export default Home