import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { filteredContacts } from 'redux/selectContacts';
import { BtnDellete, ContactList, ItemEl, NumberEl } from './Contacts.styled';

function Contacts() {
  const dispatch = useDispatch();
  const contactsList = useSelector(filteredContacts);

   if (!contactsList || !contactsList.length) {
    return null;
  }

  return (
    <ContactList>
      {contactsList?.map(({ id, name, number }) => (
        <ItemEl key={id}>
          <span>{name}: </span>
          <NumberEl>{number}</NumberEl>
          <BtnDellete onClick={() => dispatch(deleteContact(id))}>
            Delete
          </BtnDellete>
        </ItemEl>
      ))}
    </ContactList>
  );
}

export default Contacts;
