import * as types from "../constants/actionTypes/GroupNomenclatures";
import { API_CALL } from "../constants/api";

export function fetchGroupNomenclatures() {
  return {
    [API_CALL]: {
      endpoint: "/api/group-nomenclatures",
      method: "get",
      types: [
        types.FETCH_GROUP_NOMENCLATURES_REQUEST,
        types.FETCH_GROUP_NOMENCLATURES_SUCCESS,
        types.FETCH_GROUP_NOMENCLATURES_ERROR
      ]
    }
  };
}

export function createGroupNomenclature(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/group-nomenclatures",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_GROUP_NOMENCLATURE_REQUEST,
        types.CREATE_GROUP_NOMENCLATURE_SUCCESS,
        types.CREATE_GROUP_NOMENCLATURE_ERROR
      ]
    }
  };
}
export function deleteGroupNomenclature(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/group-nomenclatures/${id}`,
      method: "delete",
      types: [
        types.DELETE_GROUP_NOMENCLATURE_REQUEST,
        types.DELETE_GROUP_NOMENCLATURE_SUCCESS,
        types.DELETE_GROUP_NOMENCLATURE_ERROR
      ]
    }
  };
}

function updateGroupNomenclatureQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/group-nomenclatures/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_GROUP_NOMENCLATURE_REQUEST,
        types.UPDATE_GROUP_NOMENCLATURE_SUCCESS,
        types.UPDATE_GROUP_NOMENCLATURE_ERROR
      ]
    }
  };
}

export function fetchGroupNomenclature(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/group-nomenclatures/${id}`,
      method: "get",
      types: [
        types.FETCH_GROUP_NOMENCLATURE_REQUEST,
        types.FETCH_GROUP_NOMENCLATURE_SUCCESS,
        types.FETCH_GROUP_NOMENCLATURE_ERROR
      ]
    }
  };
}

export const editGroupNomenclature = (valueType, value) => ({
  type: types.EDIT_GROUP_NOMENCLATURE,
  valueType,
  value
});

export const resetGroupNomenclatureForm = () => ({
  type: types.RESET_GROUP_NOMENCLATURE_FORM
});

export const searchGroupNomenclatures = (value) => ({
  type: types.SEARCH_GROUP_NOMENCLATURES,
  value
});

export const updateGroupNomenclature = (id, params) => dispatch => {
  dispatch(updateGroupNomenclatureQuery(id, params))
};