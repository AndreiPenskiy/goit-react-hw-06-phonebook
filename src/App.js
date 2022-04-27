import "./App.css";
import React from "react";
import ContactForm from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './redux/ToolkitSlice';


export default function App() {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);


  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

    return (
      
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList />
      </div>
    );
}

