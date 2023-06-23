import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormSubmitBtn,
} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const checkIfContactExists = contactName =>
    contacts.find(({ name }) => name === contactName);

  let contact = {};

  const createContact = (name, number) => {
      contact = {
        name,
        number
      }
  }

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkIfContactExists(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    createContact(name, number);
    dispatch(addContact(contact));
    console.log(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>
          Name:
          <FormInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Number:
          <FormInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </FormLabel>
      </FormGroup>

      <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
    </Form>
  );
}




