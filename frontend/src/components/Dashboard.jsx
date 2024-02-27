import React from 'react'

function Dashboard() {
  return (
    <div className='dash'>
        <h2>Streams</h2>
        <div className="two">
            <h2>Upcoming</h2>
            <h2>Past</h2>
        </div>
        <div className="create">
            <h4>You have no upcoming streams and recordings.</h4>
            <button> + Create</button>
        </div>
    </div>
  )
}

export default Dashboard