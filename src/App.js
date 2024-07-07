import React, { useState, useCallback, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for contacts and appointments 
  */
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) || []);

  /*
  Implement functions to add data to contacts and appointments
  */
  const addContact = useCallback(
    (name, phone, email) => {
      setContacts((prevContacts) => { return [...prevContacts, {id: Date.now(), name: name, phone: phone, email: email}]});
    }, []
  );
  const addAppointment = useCallback(
    (title, contact, date, time) => {
      setAppointments((prevAppointments) => { return [...prevAppointments, {id: Date.now(), title: title, contact: contact, date: date, time: time}]});
    }, [] // Initially used setContacts here too, thus when an appointment was submitted, new contacts with blank data were saved (bug)
  );

   /*
  EXTRA: implement functions to remove data from contacts and appointments
  */
  const removeContact = (idRemove) => {
    setContacts(prev => (prev.filter(contact => contact.id !== idRemove)));
  };

  const removeAppointment = (idRemove) => {
    setAppointments(prev => (prev.filter(appointment => appointment.id !== idRemove)));
  };

  /*
  Save contacts and appointments locally
  */
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments])
  
  /*
  Set the route path of contacts and appointments sections
  */
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Create Routes for contacts and appointments pages
  */
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} removeContact={removeContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} removeAppointment={removeAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

