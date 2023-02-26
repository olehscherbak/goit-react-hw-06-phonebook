import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, filterChange } from './actions';

const contactsInitialState = [
  {
    id: 'id-1',
    name: 'Oleh Scherbak',
    number: '+38067-247-62-45',
  },
  {
    id: 'id-2',
    name: 'office',
    number: '+38044-545-62-80',
  },
  {
    id: 'id-3',
    name: 'home',
    number: '+38099-314-85-45',
  },
];

const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(filterChange, (state, action) => {
    return action.payload;
  });
});
