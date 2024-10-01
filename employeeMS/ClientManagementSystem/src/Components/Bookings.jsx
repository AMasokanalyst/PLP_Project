import React, { useState, useEffect } from 'react';
import BookSlot from '../Components/BookSlot' // Adjust the path as necessary

const Bookings = () => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        // Example of fetching slots
        fetch('/api/slots') // Adjust this URL to your API
            .then(response => response.json())
            .then(data => setSlots(data))
            .catch(error => console.error("Error fetching slots:", error));
    }, []);

    // Debugging log
    console.log('Slots:', slots);

    return (
        <BookSlot slots={slots} />
    );
};

export default Bookings;

