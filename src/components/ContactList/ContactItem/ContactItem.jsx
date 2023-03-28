import { Li, DeleteButton } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Li>
      {name}: {number}
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Li>
  );
}
