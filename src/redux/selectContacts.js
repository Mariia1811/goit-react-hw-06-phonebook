export const selectContacts = state => state.contacts.contacts;
export const selectFilterValue = state => state.contacts.filterValue;
export const filteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilterValue(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
};
