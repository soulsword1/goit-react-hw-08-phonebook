import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Layout from './Layout/Layout';
import Filter from './Filter';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error && <b>Adding contact to phonebook...</b>}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Layout>
  );
};
