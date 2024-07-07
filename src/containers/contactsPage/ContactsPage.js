import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, addContact, removeContact } = props;
  /*
  Define state variables for contact info, duplicate check, and sorted contacts
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const [sortedContacts, setSortedContacts] = useState([]);
  /*
  Clear form function
  */
  const clearForm = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hook to sort contacts and check for contact name in the contacts array each time name or contacts change, 
  "some" method sets duplicate variable to true if the input name is already saved
  */
  useEffect(() => {
    setDuplicate(contacts.some(contact => contact.name === name));
  }, [name, contacts]);
  
  // Submit contact form 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate
    if (!duplicate) {
      addContact(name, phone, email);
      clearForm();
    }
    else {
      alert('This name already exists!');
    }
  };

  // Sort contacts each time a new contact is added
  useEffect(() => {
    const sortContacts = () => {
      const sorted = contacts.sort(function(a, b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      setSortedContacts(sorted);
    }
    sortContacts(); 
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} 
        handleSubmit={handleSubmit} // State variables were not passed properly (props.name instead of name, etc)
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={sortedContacts} removeContact={removeContact} /> 
      </section>
    </div>
  );
};

