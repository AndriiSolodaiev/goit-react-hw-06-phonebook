// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';

export const App = () => {
  return (
    <div>
      <h1>
        Phonebook <AiFillPhone />
      </h1>
      <Form />
      <h2>
        Contacts <IoMdContacts />
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
