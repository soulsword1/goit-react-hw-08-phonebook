import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';

const getVisibleContacts = (contacts, contactsFilter) =>
  contactsFilter
    ? contacts.filter(contact =>
        contact.name.toUpperCase().includes(contactsFilter)
      )
    : contacts;

export default function ContactList() {
  const contacts = useSelector(getContacts);
  console.log(`contacts ${contacts}`);
  const normalizedContactsFilter = useSelector(getFilter).toUpperCase();
  const visibleContacts = getVisibleContacts(
    contacts,
    normalizedContactsFilter
  );
  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
}
