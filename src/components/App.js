import { Component } from 'react';

import Form from './Form/Form';
import PhoneBook from './PhoneBook/PhoneBook';
import Filter from './Filter/Filter';

import s from './box.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert('Такой контакт существует');

    return !isExistContact;
  };

  handleRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const handleCheckUniqueContact = this.handleCheckUniqueContact;
    const handleAddContact = this.handleAddContact;
    const handleFilterChange = this.handleFilterChange;
    const handleRemoveContact = this.handleRemoveContact;

    return (
      <div className={s.box}>
        <h2>Form</h2>
        <Form
          onAdd={handleAddContact}
          onCheckUnique={handleCheckUniqueContact}
        />
        <h2>Book</h2>
        <Filter filter={filter} onChange={handleFilterChange} />
        <PhoneBook contacts={visibleContacts} onRemove={handleRemoveContact} />
      </div>
    );
  }
}
export default App;
