import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await API.addContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, { rejectWithValue }) => {
    try {
      const deletedContact = await API.delContact(contact);
      return deletedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
