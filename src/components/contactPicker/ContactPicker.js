import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">Select Contact</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

