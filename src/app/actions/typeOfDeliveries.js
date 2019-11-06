import * as types from "../constants/actionTypes/TypeOfDeliveries";
import { API_CALL } from "../constants/api";

export function fetchTypeOfDeliveries() {
  return {
    [API_CALL]: {
      endpoint: "/api/type-of-deliveries",
      method: "get",
      types: [
        types.FETCH_TYPE_OF_DELIVERIES_REQUEST,
        types.FETCH_TYPE_OF_DELIVERIES_SUCCESS,
        types.FETCH_TYPE_OF_DELIVERIES_ERROR
      ]
    }
  };
}

export function createTypeOfDelivery(params) {
  return {
    [API_CALL]: {
      endpoint: "/api/type-of-deliveries",
      method: "post",
      payload: params ,
      types: [
        types.CREATE_TYPE_OF_DELIVERY_REQUEST,
        types.CREATE_TYPE_OF_DELIVERY_SUCCESS,
        types.CREATE_TYPE_OF_DELIVERY_ERROR
      ]
    }
  };
}
export function deleteTypeOfDelivery(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-deliveries/${id}`,
      method: "delete",
      types: [
        types.DELETE_TYPE_OF_DELIVERY_REQUEST,
        types.DELETE_TYPE_OF_DELIVERY_SUCCESS,
        types.DELETE_TYPE_OF_DELIVERY_ERROR
      ]
    }
  };
}

function updateTypeOfDeliveryQuery(id, params) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-deliveries/${id}`,
      method: "patch",
      payload: params,
      types: [
        types.UPDATE_TYPE_OF_DELIVERY_REQUEST,
        types.UPDATE_TYPE_OF_DELIVERY_SUCCESS,
        types.UPDATE_TYPE_OF_DELIVERY_ERROR
      ]
    }
  };
}

export function fetchTypeOfDelivery(id) {
  return {
    [API_CALL]: {
      endpoint: `/api/type-of-deliveries/${id}`,
      method: "get",
      types: [
        types.FETCH_TYPE_OF_DELIVERY_REQUEST,
        types.FETCH_TYPE_OF_DELIVERY_SUCCESS,
        types.FETCH_TYPE_OF_DELIVERY_ERROR
      ]
    }
  };
}

export const editTypeOfDelivery = (valueType, value) => ({
  type: types.EDIT_TYPE_OF_DELIVERY,
  valueType,
  value
});

export const resetTypeOfDeliveryForm = () => ({
  type: types.RESET_TYPE_OF_DELIVERY_FORM
});

export const updateTypeOfDelivery = (id, params) => dispatch => {
  dispatch(updateTypeOfDeliveryQuery(id, params))
};

export const searchTypeOfDeliveries = (value) => ({
  type: types.SEARCH_TYPE_OF_DELIVERIES,
  value
});