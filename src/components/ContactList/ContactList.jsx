// import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

const getVisibleContacts = (contacts, filterValue) => {
  const filterNormalize = filterValue.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalize)
  );
};

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   removeContact: PropTypes.func.isRequired,
// };
