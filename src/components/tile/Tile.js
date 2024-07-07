import React from "react";
import './tile.css'; // This imports the CSS file to add some style to the app

export const Tile = (props) => {
  const { contacts, appointments, removeContact, removeAppointment } = props;
  // Conditional to differentiate between contacts and appointments pages
  if (contacts) {
    return (
      <div>
      {contacts.map((contact, index) => ( // Use "map" method to check all contacts and render each contact info 
        <div key={index} className="tile">
          <div className='flex-div'>
          <p className='tile-title'>{contact.name}</p>
          <button onClick={() => removeContact(contact.id)}>X</button>
          </div>
          <p className='tile-item'>{contact.phone}</p>
          <p className='tile-item'>{contact.email}</p>
        </div>
      ))}
    </div>
  );
} else if (appointments) {
  return (
    <div>
    {appointments.map((appointment, index) => ( // Use "map" method to check all appointments and render each appointment info
      <div key={index} className="tile">
        <div className='flex-div'>
        <p className='tile-title'>{appointment.title}</p>
        <button onClick={() => removeAppointment(appointment.id)}>X</button>
        </div>
        <p className='tile-name'>{appointment.contact}</p>
        <p className='tile-item'>{appointment.date}</p>
        <p className='tile-item'>{appointment.time}</p>
      </div>
    ))}
  </div>
  );
};

};
