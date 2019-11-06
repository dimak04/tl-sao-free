import * as types from "../constants/actionTypes/Nomenclatures";
import _ from "lodash";

const emptyEntry = { name: ""};


const initialState = {
  isFetching: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
  entries: [],
  entry: emptyEntry,
  error: false,
  errorMessage: "",
  searchItem: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_NOMENCLATURES_REQUEST:
      return _.assign({}, state, { isFetching: true, error: false });
    case types.FETCH_NOMENCLATURES_ERROR:
      return _.assign({}, state, { isFetching: false, error: true });
    case types.FETCH_NOMENCLATURES_SUCCESS:
      if (action.response.body.data) {
        return _.assign({}, state, {
          entries: action.response.body.data,
          isFetching: false
        });
      } else {
        return _.assign({}, state, {
          errorMessage: action.response.body.message,
          isFetching: false
        });
      }

    case types.CREATE_NOMENCLATURE_REQUEST:
      return _.assign({}, state, {
        isCreating: true,
        error: false,
        errorMessage: ""
      });
    case types.CREATE_NOMENCLATURE_ERROR:
      return _.assign({}, state, {
        isCreating: false,
        error: true,
        errorMessage: action.error.response
      });
    case types.CREATE_NOMENCLATURE_SUCCESS:

      return _.assign({}, state, {
        entries: state.entries.concat(action.response.body.data),
        isCreating: false
      });

    case types.DELETE_NOMENCLATURE_REQUEST:
      return _.assign({}, state, { isDeleting: true, error: false });
    case types.DELETE_NOMENCLATURE_ERROR:
      return _.assign({}, state, { isDeleting: false, error: true });
    case types.DELETE_NOMENCLATURE_SUCCESS:
      const actionId = Number(action.response.body.data.id);
      return _.assign({}, state, {
        entries: _.filter(
            state.entries,
            entry => {
              return entry.id !== actionId
            }
        ),
        entry:
            state.entry.id === actionId ? emptyEntry : state.entry,
        isDeleting: false
      });

    case types.UPDATE_NOMENCLATURE_REQUEST:
      return _.assign({}, state, { isUpdating: true, error: false });
    case types.UPDATE_NOMENCLATURE_ERROR:
      return _.assign({}, state, { isUpdating: false, error: true });
    case types.UPDATE_NOMENCLATURE_SUCCESS:
      return _.assign({}, state, {
        entries: _.map(state.entries, entry => {
          if (entry.id === action.response.body.data.id) {
            console.log(action.response.body.data);
            return action.response.body.data;
          } else {
            return entry;
          }
        }),
        isUpdating: false
      });

    case types.FETCH_NOMENCLATURE_REQUEST:
      return _.assign({}, state, { isFetching: true, error: false });
    case types.FETCH_NOMENCLATURE_ERROR:
      return _.assign({}, state, { isFetching: false, error: true });
    case types.FETCH_NOMENCLATURE_SUCCESS:
      return _.assign({}, state, {
        entry: action.response.body.data,
        isFetching: false
      });

    case types.EDIT_NOMENCLATURE:
      return _.assign({}, state, {
        entry: _.assign({}, state.entry, { [action.valueType]: action.value })
      });
    case types.RESET_NOMENCLATURE_FORM:
      return _.assign({}, state, {
        entry: emptyEntry
      });

    case types.SEARCH_NOMENCLATURES:
      return _.assign({}, state, {
        searchItem: action.value
      });

    default:
      return state;
  }
}
