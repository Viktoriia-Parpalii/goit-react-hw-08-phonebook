import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from 'components/Wrapper/Wrapper';
import React from 'react';
import { CircleLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/contacts.selectors';

const ContactsPage = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {selectIsLoading === true && (
        <CircleLoader
          color="#670063"
          size={100}
          cssOverride={{
            margin: '30px auto',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        />
      )}
      <ContactsList />
    </Wrapper>
  );
};

export default ContactsPage;
