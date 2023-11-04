import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts';

import { selectVisibleContacts } from 'redux/contacts.selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectVisibleContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {filter.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <div>{name}</div>
            <div>{number}</div>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
