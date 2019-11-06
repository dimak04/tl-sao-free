import * as types from "../constants/actionTypes/TypeOfAgreements";
import { API_CALL } from "../constants/api";

export function fetchTypeOfAgreements() {
  return {
    [API_CALL]: {
      endpoint: "/api/type-of-agreements",
      method: "get",
      types: [
        types.FETCH_TYPE_OF_AGREEMENTS_REQUEST,
        types.FETCH_TYPE_OF_AGREEMENTS_SUCCESS,
        types.FETCH_TYPE_OF_AGREEMENTS_ERROR
      ]
    }
  };
}

export function createTypeOfAgreement(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/type-of-agreements",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_TYPE_OF_AGREEMENT_REQUEST,
        types.CREATE_TYPE_OF_AGREEMENT_SUCCESS,
        types.CREATE_TYPE_OF_AGREEMENT_ERROR
      ]
    }
  };
}
export function deleteTypeOfAgreement(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-agreements/${id}`,
      method: "delete",
      types: [
        types.DELETE_TYPE_OF_AGREEMENT_REQUEST,
        types.DELETE_TYPE_OF_AGREEMENT_SUCCESS,
        types.DELETE_TYPE_OF_AGREEMENT_ERROR
      ]
    }
  };
}

function updateTypeOfAgreementQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-agreements/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_TYPE_OF_AGREEMENT_REQUEST,
        types.UPDATE_TYPE_OF_AGREEMENT_SUCCESS,
        types.UPDATE_TYPE_OF_AGREEMENT_ERROR
      ]
    }
  };
}

export function fetchTypeOfAgreement(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-agreements/${id}`,
      method: "get",
      types: [
        types.FETCH_TYPE_OF_AGREEMENT_REQUEST,
        types.FETCH_TYPE_OF_AGREEMENT_SUCCESS,
        types.FETCH_TYPE_OF_AGREEMENT_ERROR
      ]
    }
  };
}

export const editTypeOfAgreement = (valueType, value) => ({
  type: types.EDIT_TYPE_OF_AGREEMENT,
  valueType,
  value
});

export const resetTypeOfAgreementForm = () => ({
  type: types.RESET_TYPE_OF_AGREEMENT_FORM
});

export const updateTypeOfAgreement = (id, params) => dispatch => {
  dispatch(updateTypeOfAgreementQuery(id, params))
};

export const searchTypeOfAgreements = (value) => ({
  type: types.SEARCH_TYPE_OF_AGREEMENTS,
  value
});