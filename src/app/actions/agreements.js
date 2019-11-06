import * as types from "../constants/actionTypes/Agreements";
import { API_CALL } from "../constants/api";

export function fetchAgreements() {
  return {
    [API_CALL]: {
      endpoint: "/api/agreements",
      method: "get",
      types: [
        types.FETCH_AGREEMENTS_REQUEST,
        types.FETCH_AGREEMENTS_SUCCESS,
        types.FETCH_AGREEMENTS_ERROR
      ]
    }
  };
}

export function createAgreement(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/agreements",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_AGREEMENT_REQUEST,
        types.CREATE_AGREEMENT_SUCCESS,
        types.CREATE_AGREEMENT_ERROR
      ]
    }
  };
}
export function deleteAgreement(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/agreements/${id}`,
      method: "delete",
      types: [
        types.DELETE_AGREEMENT_REQUEST,
        types.DELETE_AGREEMENT_SUCCESS,
        types.DELETE_AGREEMENT_ERROR
      ]
    }
  };
}

function updateAgreementQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/agreements/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_AGREEMENT_REQUEST,
        types.UPDATE_AGREEMENT_SUCCESS,
        types.UPDATE_AGREEMENT_ERROR
      ]
    }
  };
}

export function fetchAgreement(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/agreements/${id}`,
      method: "get",
      types: [
        types.FETCH_AGREEMENT_REQUEST,
        types.FETCH_AGREEMENT_SUCCESS,
        types.FETCH_AGREEMENT_ERROR
      ]
    }
  };
}

export const updateAgreement = (id, params) => dispatch => {
  dispatch(updateAgreementQuery(id, params))
};

export const editAgreement = (valueType, value) => ({
  type: types.EDIT_AGREEMENT,
  valueType,
  value
});

export const resetAgreementForm = () => ({
  type: types.RESET_AGREEMENT_FORM
});

export const searchAgreements = (value) => ({
  type: types.SEARCH_AGREEMENTS,
  value
});

export const setFilterAgreements = (valueType, value) => ({
  type: types.SET_FILTER_AGREEMENTS,
  valueType,
  value
});

export const resetFilterAgreements = () => ({
  type: types.RESET_FILTER_AGREEMENTS,
});