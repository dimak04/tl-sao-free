import * as types from "../constants/actionTypes/Contacts";
import { API_CALL } from "../constants/api";

export function fetchContacts() {
  return {
    [API_CALL]: {
      endpoint: "/api/contacts",
      method: "get",
      types: [
        types.FETCH_CONTACTS_REQUEST,
        types.FETCH_CONTACTS_SUCCESS,
        types.FETCH_CONTACTS_ERROR
      ]
    }
  };
}

export function createContact(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/contacts",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_CONTACT_REQUEST,
        types.CREATE_CONTACT_SUCCESS,
        types.CREATE_CONTACT_ERROR
      ]
    }
  };
}
export function deleteContact(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/contacts/${id}`,
      method: "delete",
      types: [
        types.DELETE_CONTACT_REQUEST,
        types.DELETE_CONTACT_SUCCESS,
        types.DELETE_CONTACT_ERROR
      ]
    }
  };
}

function updateContactQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/contacts/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_CONTACT_REQUEST,
        types.UPDATE_CONTACT_SUCCESS,
        types.UPDATE_CONTACT_ERROR
      ]
    }
  };
}

export function fetchContact(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/contacts/${id}`,
      method: "get",
      types: [
        types.FETCH_CONTACT_REQUEST,
        types.FETCH_CONTACT_SUCCESS,
        types.FETCH_CONTACT_ERROR
      ]
    }
  };
}

export const editContact = (valueType, value) => ({
  type: types.EDIT_CONTACT,
  valueType,
  value
});

export const resetContactForm = () => ({
  type: types.RESET_CONTACT_FORM
});

export const searchContacts = (value) => ({
  type: types.SEARCH_CONTACTS,
  value
});

export const setFilterContacts = (valueType, value) => ({
  type: types.SET_FILTER_CONTACTS,
  valueType,
  value
});

export const resetFilterContacts = () => ({
  type: types.RESET_FILTER_CONTACTS,
});

export const updateContact = (id, params) => dispatch => {
  dispatch(updateContactQuery(id, params))
};