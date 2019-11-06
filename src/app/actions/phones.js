import * as types from "../constants/actionTypes/Phones";
import { API_CALL } from "../constants/api";

export function fetchPhones() {
  return {
    [API_CALL]: {
      endpoint: "/api/phones",
      method: "get",
      types: [
        types.FETCH_PHONES_REQUEST,
        types.FETCH_PHONES_SUCCESS,
        types.FETCH_PHONES_ERROR
      ]
    }
  };
}

export function createPhone(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/phones",
      method: "post",
      payload: params,
      types: [
        types.CREATE_PHONE_REQUEST,
        types.CREATE_PHONE_SUCCESS,
        types.CREATE_PHONE_ERROR
      ]
    }
  };
}
export function deletePhone(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/phones/${id}`,
      method: "delete",
      types: [
        types.DELETE_PHONE_REQUEST,
        types.DELETE_PHONE_SUCCESS,
        types.DELETE_PHONE_ERROR
      ]
    }
  };
}

function updatePhoneQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/phones/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_PHONE_REQUEST,
        types.UPDATE_PHONE_SUCCESS,
        types.UPDATE_PHONE_ERROR
      ]
    }
  };
}

export function fetchPhone(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/phones/${id}`,
      method: "get",
      types: [
        types.FETCH_PHONE_REQUEST,
        types.FETCH_PHONE_SUCCESS,
        types.FETCH_PHONE_ERROR
      ]
    }
  };
}

export const editPhone = (valueType, value) => ({
  type: types.EDIT_PHONE,
  valueType,
  value
});

export const resetPhoneForm = () => ({
  type: types.RESET_PHONE_FORM
});

export const searchPhones = (value) => ({
  type: types.SEARCH_PHONES,
  value
});

export const setFilterPhones = (valueType, value) => ({
  type: types.SET_FILTER_PHONES,
  valueType,
  value
});

export const resetFilterPhones = () => ({
  type: types.RESET_FILTER_PHONES
});

export const updatePhone = (id, params) => (dispatch, getState) => {
  dispatch(updatePhoneQuery(id, params));
};
