import * as types from "../constants/actionTypes/Organizations";
import { API_CALL } from "../constants/api";

export function fetchOrganizations() {
  return {
    [API_CALL]: {
      endpoint: "/api/organizations",
      method: "get",
      types: [
        types.FETCH_ORGANIZATIONS_REQUEST,
        types.FETCH_ORGANIZATIONS_SUCCESS,
        types.FETCH_ORGANIZATIONS_ERROR
      ]
    }
  };
}

export function createOrganization(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/organizations",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_ORGANIZATION_REQUEST,
        types.CREATE_ORGANIZATION_SUCCESS,
        types.CREATE_ORGANIZATION_ERROR
      ]
    }
  };
}
export function deleteOrganization(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/organizations/${id}`,
      method: "delete",
      types: [
        types.DELETE_ORGANIZATION_REQUEST,
        types.DELETE_ORGANIZATION_SUCCESS,
        types.DELETE_ORGANIZATION_ERROR
      ]
    }
  };
}

function updateOrganizationQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/organizations/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_ORGANIZATION_REQUEST,
        types.UPDATE_ORGANIZATION_SUCCESS,
        types.UPDATE_ORGANIZATION_ERROR
      ]
    }
  };
}

export function fetchOrganization(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/organizations/${id}`,
      method: "get",
      types: [
        types.FETCH_ORGANIZATION_REQUEST,
        types.FETCH_ORGANIZATION_SUCCESS,
        types.FETCH_ORGANIZATION_ERROR
      ]
    }
  };
}

export const editOrganization = (valueType, value) => ({
  type: types.EDIT_ORGANIZATION,
  valueType,
  value
});

export const resetOrganizationForm = () => ({
  type: types.RESET_ORGANIZATION_FORM
});

export const searchOrganizations = (value) => ({
  type: types.SEARCH_ORGANIZATIONS,
  value
});

export const setFilterOrganizations = (valueType, value) => ({
  type: types.SET_FILTER_ORGANIZATIONS,
  valueType,
  value
});
export const resetFilterOrganizations = () => ({
  type: types.RESET_FILTER_ORGANIZATIONS,
});

export const updateOrganization = (id, params) => dispatch => {
  dispatch(updateOrganizationQuery(id, params))
};