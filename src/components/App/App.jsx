import { useState } from 'react';
import FormElem from 'components/FormElem';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import { Wrapper, MainTitle, Title } from './App.styled';
import useLocalStorage from 'hooks/useLocalStorage';

const LOCAL_CONTACT_KEY = 'contactsKey';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Mariia Kryzhalko', number: '228-91-91' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage(
    LOCAL_CONTACT_KEY,
    initialContacts
  );
  const [filter, setFilter] = useState('');

  function addContact(newContact) {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prev => [newContact, ...prev]);
  }

  function onFilterInput(e) {
    setFilter(e.currentTarget.value);
  }

  function filteredContacts() {
    return [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  function deleteContact(e) {
    const removeEL = e.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== removeEL));
  }

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <FormElem addContact={addContact} contacts={contacts} />

      <Title>Contacts</Title>
      <Filter value={filter} onInput={onFilterInput} />
      <Contacts
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </Wrapper>
  );
}

export default App;
