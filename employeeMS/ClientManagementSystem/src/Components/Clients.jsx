import React from 'react'
import { Link } from 'react-router-dom'
const Clients = () => {
  return (
    <div className='px-5 mt-3'>
    <div className='d-flex justify-content-center'>
        <h3>My Booking</h3>
    </div>
    <Link to="/dashboard/update_bookings" className='btn btn-success mb-3'>Change Booking</Link>
    <div className="mt-3"></div>
    </div>
  )
}

export default Clients