import * as types from "../constants/actionTypes/TypeOfOrganizations";
import { API_CALL } from "../constants/api";

export function fetchTypeOfOrganizations() {
  return {
    [API_CALL]: {
      endpoint: "/api/type-of-organizations",
      method: "get",
      types: [
        types.FETCH_TYPE_OF_ORGANIZATIONS_REQUEST,
        types.FETCH_TYPE_OF_ORGANIZATIONS_SUCCESS,
        types.FETCH_TYPE_OF_ORGANIZATIONS_ERROR
      ]
    }
  };
}

export function createTypeOfOrganization(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/type-of-organizations",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_TYPE_OF_ORGANIZATION_REQUEST,
        types.CREATE_TYPE_OF_ORGANIZATION_SUCCESS,
        types.CREATE_TYPE_OF_ORGANIZATION_ERROR
      ]
    }
  };
}
export function deleteTypeOfOrganization(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-organizations/${id}`,
      method: "delete",
      types: [
        types.DELETE_TYPE_OF_ORGANIZATION_REQUEST,
        types.DELETE_TYPE_OF_ORGANIZATION_SUCCESS,
        types.DELETE_TYPE_OF_ORGANIZATION_ERROR
      ]
    }
  };
}

function updateTypeOfOrganizationQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-organizations/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_TYPE_OF_ORGANIZATION_REQUEST,
        types.UPDATE_TYPE_OF_ORGANIZATION_SUCCESS,
        types.UPDATE_TYPE_OF_ORGANIZATION_ERROR
      ]
    }
  };
}

export function fetchTypeOfOrganization(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-organizations/${id}`,
      method: "get",
      types: [
        types.FETCH_TYPE_OF_ORGANIZATION_REQUEST,
        types.FETCH_TYPE_OF_ORGANIZATION_SUCCESS,
        types.FETCH_TYPE_OF_ORGANIZATION_ERROR
      ]
    }
  };
}

export const editTypeOfOrganization = (valueType, value) => ({
  type: types.EDIT_TYPE_OF_ORGANIZATION,
  valueType,
  value
});

export const resetTypeOfOrganizationForm = () => ({
  type: types.RESET_TYPE_OF_ORGANIZATION_FORM
});

export const updateTypeOfOrganization = (id, params) => dispatch => {
  dispatch(updateTypeOfOrganizationQuery(id, params))
};

export const searchTypeOfOrganizations = (value) => ({
  type: types.SEARCH_TYPE_OF_ORGANIZATIONS,
  value
});