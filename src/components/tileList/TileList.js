import React from "react";
import { Tile } from "../../components/tile/Tile"

export const TileList = (props) => { 
  const { contacts, appointments, removeContact, removeAppointment } = props;
  // Pass State variables to Tile component
  return <Tile contacts={contacts} appointments={appointments} removeContact={removeContact} removeAppointment={removeAppointment}  />
};


