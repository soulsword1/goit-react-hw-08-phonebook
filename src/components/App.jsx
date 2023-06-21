import { Layout } from "components/Layout/Layout";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getError, getIsLoading } from "redux/selectors";

export function App() {
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
        {isLoading && !error && <b>Making changes to the phone book...</b>}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Layout>
  );
}
