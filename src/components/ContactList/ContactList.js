// import { List } from './ContactList.styled';
import { Table, TableTh } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { getFilter } from '../../redux/filter/selectors';

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
    <Table>
      <thead>
      <tr>
      <TableTh>Name</TableTh>
      <TableTh>Phone</TableTh>
      <TableTh>Action</TableTh>
      </tr>
      </thead>
      <tbody>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
      </tbody>
    </Table>
  );
}

// return (
//   <List>
//     {visibleContacts.map(contact => (
//       <ContactListItem key={contact.id} contact={contact} />
//     ))}
//   </List>
// );
