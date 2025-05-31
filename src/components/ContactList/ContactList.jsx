import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.filterValue);

  const visibilityContacts = contacts.filter((phone) =>
    phone.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.contactsContainer}>
      {visibilityContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        visibilityContacts.map((number) => (
          <Contact key={number.id} numberInfo={number} />
        ))
      )}
    </div>
  );
}
