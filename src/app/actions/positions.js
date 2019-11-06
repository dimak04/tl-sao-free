import * as types from "../constants/actionTypes/Positions";
import { API_CALL } from "../constants/api";

export function fetchPositions() {
  return {
    [API_CALL]: {
      endpoint: "/api/positions",
      method: "get",
      types: [
        types.FETCH_POSITIONS_REQUEST,
        types.FETCH_POSITIONS_SUCCESS,
        types.FETCH_POSITIONS_ERROR
      ]
    }
  };
}

export function createPosition(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/positions",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_POSITION_REQUEST,
        types.CREATE_POSITION_SUCCESS,
        types.CREATE_POSITION_ERROR
      ]
    }
  };
}
export function deletePosition(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/positions/${id}`,
      method: "delete",
      types: [
        types.DELETE_POSITION_REQUEST,
        types.DELETE_POSITION_SUCCESS,
        types.DELETE_POSITION_ERROR
      ]
    }
  };
}

function updatePositionQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/positions/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_POSITION_REQUEST,
        types.UPDATE_POSITION_SUCCESS,
        types.UPDATE_POSITION_ERROR
      ]
    }
  };
}

export function fetchPosition(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/positions/${id}`,
      method: "get",
      types: [
        types.FETCH_POSITION_REQUEST,
        types.FETCH_POSITION_SUCCESS,
        types.FETCH_POSITION_ERROR
      ]
    }
  };
}

export const editPosition = (valueType, value) => ({
  type: types.EDIT_POSITION,
  valueType,
  value
});

export const resetPositionForm = () => ({
  type: types.RESET_POSITION_FORM
});

export const updatePosition = (id, params) => dispatch => {
  dispatch(updatePositionQuery(id, params))
};

export const searchPositions = (value) => ({
  type: types.SEARCH_POSITIONS,
  value
});