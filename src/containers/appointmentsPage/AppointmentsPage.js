import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const { contacts, appointments, addAppointment, removeAppointment } = props;
  /*
  Define state variables for appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  /*
  Clear form function 
  */
  const clearAppointment = () => {
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  // Submit appointment form 
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add appointment info and clear data  
    */
    addAppointment(title, contact, date, time); // Forgot to type in the arguments (bug)
    clearAppointment();
  };


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={title} setTitle={setTitle} contact={contact} setContact={setContact} date={date} setDate={setDate} 
        time={time} setTime={setTime} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} removeAppointment={removeAppointment}  />
      </section>
    </div>
  );
};

