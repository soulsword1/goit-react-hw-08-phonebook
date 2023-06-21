import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListItem, ListItemButton } from './ContactListItem.styled';

export default function ContactListItem({ contact }) {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ListItem key={id}>
      {name} : {phone}
      <ListItemButton onClick={handleDelete}>Delete</ListItemButton>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
