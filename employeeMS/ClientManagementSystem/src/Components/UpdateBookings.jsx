import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const UpdateBookings = () => {

    const [selectedSlot, setSelectedSlot] = useState(null);
    const navigate = useNavigate();

    const slots = [
        { id: 24091, day: 'Wednesday', date: '2024/09/25', time: '08:00' },
        { id: 24092, day: 'Friday', date: '2024/09/27', time: '14:00' },
        { id: 24093, day: 'Saturday', date: '2024/09/28', time: '08:00' }
    ];

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (!selectedSlot) {
          alert('Please select a slot to book.');
          return;
      }
  
      const { day, date, time } = selectedSlot;
      const client_id = 123; // Replace with the actual client ID from your app's context or auth system
  
      axios.post('http://localhost:3000/auth/book_slot', { day, date, time, client_id })
          .then(result => {
              if (result.data.Status) {
                  navigate('/dashboard/book_slot', { state: { selectedSlot } }); // Pass selectedSlot in state
              } else {
                  alert(result.data.Error);
              }
          })
          .catch(err => console.log(err));
  };  
  return (
    <div className='px-5 mt-3'>
    <div className='d-flex justify-content-center'>
        <h3>Available Bookings</h3>
    </div>
    <Link to="/dashboard/book_slot" className='btn btn-success mb-3'>Book Slot</Link>
    <table className="table table-striped border">
            <thead>
                <tr>
                    <th scope="col">Select</th>
                    <th scope="col">ID</th>
                    <th scope="col">Day</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                {slots.map(slot => (
                    <tr key={slot.id}>
                        <td>
                            <input 
                                type='radio' 
                                name='slot' 
                                onChange={() => handleSlotSelect(slot)} 
                            />
                        </td>
                        <th scope="row">{slot.id}</th>
                        <td>{slot.day}</td>
                        <td>{slot.date}</td>
                        <td>{slot.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={handleSubmit} disabled={!selectedSlot}>
            Book Selected Slot
        </button>
</div>
)
}
export default UpdateBookings