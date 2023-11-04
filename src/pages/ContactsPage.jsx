import Loader from 'components/CircleLoader/CircleLoader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts';
import { selectIsLoading } from 'redux/contacts.selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="tracking-in-expand-fwd">Phonebook</h1>
      <ContactForm />
      <h2 className="tracking-in-expand-fwd">Contacts</h2>
      <Filter />
      {selectIsLoading === true && <Loader />}
      <ContactsList />
    </>
  );
};

export default ContactsPage;
