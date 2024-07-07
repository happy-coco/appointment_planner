import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

// Function to get today's date 
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

// Function to get current time in hours and minutes
const getTimeNow = (e) => {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  return `${hours}:${mins}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const addContact = (e) => {setContact(e.target.value)};
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          title='Must contain letters and spaces only'
          required
        />
      </label>
      <label>Contact:</label>
      <ContactPicker contacts={contacts} value={contact} name="contact" onChange={addContact} />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          title=''
          min={getTodayString()} // To set the min attribute of the date
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          title=''
          min={date === getTodayString() ? getTimeNow() : ''} // To set the min attribute of the time
          required
        />
      </label>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

