import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookSlot = ({ slots }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };
    BookSlot.defaultProps = {
        slots: [],
    };
    

    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Booked Slot</h3>
            </div>
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
                                    checked={selectedSlot?.id === slot.id} 
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
            <Link 
                to="/dashboard/clients" 
                state={{ selectedSlot }} 
                className='btn btn-primary' 
                disabled={!selectedSlot}
            >
                Book Selected Slot
            </Link>
        </div>
    );
};

// Define PropTypes for the component
BookSlot.propTypes = {
    slots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            day: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default BookSlot;


