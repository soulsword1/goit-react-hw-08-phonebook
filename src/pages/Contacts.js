import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Loading from '../components/Loading';
import Filter from '../components/Filter';
import { getIsLoading } from 'redux/contacts/selectors';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  formBlock: {
    marginRight: '100px',
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
  },
  smallTitle: {
    fontWeight: 500,
    fontSize: 20,
    marginTop: '40px',
  },
  center: {
    textAlign: 'center',
  },
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main style={styles.main}>
      <div style={styles.formBlock}>
        {/* <h1 style={styles.title && styles.center}>Phonebook</h1> */}
        <ContactForm />
        {isLoading && <Loading />}
      </div>
      <div>
        <div style={styles.center}>
          {/* <h2 style={styles.smallTitle}>Contacts</h2> */}
          <Filter />
        </div>
        <ContactList />
      </div>
    </main>
  );
}
