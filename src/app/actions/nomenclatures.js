import * as types from "../constants/actionTypes/Nomenclatures";
import { API_CALL } from "../constants/api";

export function fetchNomenclatures() {
  return {
    [API_CALL]: {
      endpoint: "/api/nomenclatures",
      method: "get",
      types: [
        types.FETCH_NOMENCLATURES_REQUEST,
        types.FETCH_NOMENCLATURES_SUCCESS,
        types.FETCH_NOMENCLATURES_ERROR
      ]
    }
  };
}

export function createNomenclature(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/nomenclatures",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_NOMENCLATURE_REQUEST,
        types.CREATE_NOMENCLATURE_SUCCESS,
        types.CREATE_NOMENCLATURE_ERROR
      ]
    }
  };
}
export function deleteNomenclature(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/nomenclatures/${id}`,
      method: "delete",
      types: [
        types.DELETE_NOMENCLATURE_REQUEST,
        types.DELETE_NOMENCLATURE_SUCCESS,
        types.DELETE_NOMENCLATURE_ERROR
      ]
    }
  };
}

function updateNomenclatureQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/nomenclatures/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_NOMENCLATURE_REQUEST,
        types.UPDATE_NOMENCLATURE_SUCCESS,
        types.UPDATE_NOMENCLATURE_ERROR
      ]
    }
  };
}

export function fetchNomenclature(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/nomenclatures/${id}`,
      method: "get",
      types: [
        types.FETCH_NOMENCLATURE_REQUEST,
        types.FETCH_NOMENCLATURE_SUCCESS,
        types.FETCH_NOMENCLATURE_ERROR
      ]
    }
  };
}

export const editNomenclature = (valueType, value) => ({
  type: types.EDIT_NOMENCLATURE,
  valueType,
  value
});

export const resetNomenclatureForm = () => ({
  type: types.RESET_NOMENCLATURE_FORM
});

export const updateNomenclature = (id, params) => dispatch => {
  dispatch(updateNomenclatureQuery(id, params))
};

export const searchNomenclatures = value => ({
  type: types.SEARCH_NOMENCLATURES,
  value
});
