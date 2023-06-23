import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { ListItem, ListItemButton } from './ContactListItem.styled';
import { TableTd, TableItem, TableItemButton } from './ContactListItem.styled';

export default function ContactListItem({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <TableItem key={id}>
      <TableTd>{name}</TableTd>
      <TableTd>{number}</TableTd>
      <TableTd>
        <TableItemButton onClick={handleDelete}>Delete</TableItemButton>
      </TableTd>
    </TableItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

// return (
//   <ListItem key={id}>
//     {name} : {number}
//     <ListItemButton onClick={handleDelete}>Delete</ListItemButton>
//   </ListItem>
// );
