import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';


export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addUserContact = (name, number) => {
    const userContact = { name: name, number: number, id: uuidv4() };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, userContact],
      };
    });
  };
  handleFilter=(event)=>{
      this.setState({filter:event.target.value})
  };

  findUser=()=>{
      const{filter,contacts}=this.state;
      return contacts.filter(elem=>elem.name.includes(filter))

  };
  deleteUser=(id)=>{
    this.setState((prevState) => {
        return {
          contacts: prevState.contacts.filter((contact) => contact.id !== id),
        };
      });

  }


  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          contacts={this.state.contacts}
          addUserContact={this.addUserContact}
        />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
        <ContactList findUser={this.findUser} deleteUser={this.deleteUser} />
      </div>
    );
  }
}
