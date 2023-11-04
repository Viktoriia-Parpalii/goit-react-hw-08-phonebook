import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653bbb5ed5d6790f5ec757a2.mockapi.io/',
});

export const requestAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts/');
  return data;
};
export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts/', newContact);
  return data;
};
