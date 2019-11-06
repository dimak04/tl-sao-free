import * as types from "../constants/actionTypes/Phones";
import _ from "lodash";

const emptyEntry = { name: "" };
const emptyFilterView = { active: false, contactId: -1 };

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
  filterView: emptyFilterView
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PHONES_REQUEST:
      return _.assign({}, state, { isFetching: true, error: false });
    case types.FETCH_PHONES_ERROR:
      return _.assign({}, state, { isFetching: false, error: true });
    case types.FETCH_PHONES_SUCCESS:
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

    case types.CREATE_PHONE_REQUEST:
      return _.assign({}, state, {
        isCreating: true,
        error: false,
        errorMessage: ""
      });
    case types.CREATE_PHONE_ERROR:
      return _.assign({}, state, {
        isCreating: false,
        error: true,
        errorMessage: action.error.response
      });
    case types.CREATE_PHONE_SUCCESS:
      return _.assign({}, state, {
        entries: state.entries.concat(action.response.body.data),
        isCreating: false
      });

    case types.DELETE_PHONE_REQUEST:
      return _.assign({}, state, { isDeleting: true, error: false });
    case types.DELETE_PHONE_ERROR:
      return _.assign({}, state, { isDeleting: false, error: true });
    case types.DELETE_PHONE_SUCCESS:
      const actionId = Number(action.response.body.data.id);
      return _.assign({}, state, {
        entries: _.filter(state.entries, entry => {
          return entry.id !== actionId;
        }),
        entry: state.entry.id === actionId ? emptyEntry : state.entry,
        isDeleting: false
      });

    case types.UPDATE_PHONE_REQUEST:
      return _.assign({}, state, { isUpdating: true, error: false });
    case types.UPDATE_PHONE_ERROR:
      return _.assign({}, state, { isUpdating: false, error: true });
    case types.UPDATE_PHONE_SUCCESS:
      return _.assign({}, state, {
        entries: _.map(state.entries, entry => {
          if (entry.id === action.response.body.data.id) {
            return action.response.body.data;
          } else {
            return entry;
          }
        }),
        isUpdating: false
      });

    case types.FETCH_PHONE_REQUEST:
      return _.assign({}, state, { isFetching: true, error: false });
    case types.FETCH_PHONE_ERROR:
      return _.assign({}, state, { isFetching: false, error: true });
    case types.FETCH_PHONE_SUCCESS:
      return _.assign({}, state, {
        entry: action.response.body.data,
        isFetching: false
      });

    case types.EDIT_PHONE:
      return _.assign({}, state, {
        entry: _.assign({}, state.entry, { [action.valueType]: action.value })
      });
    case types.RESET_PHONE_FORM:
      return _.assign({}, state, {
        entry: emptyEntry
      });
    case types.SEARCH_PHONES:
      return _.assign({}, state, {
        searchItem: action.value
      });
    case types.SET_FILTER_PHONES:
      return _.assign({}, state, {
        filterView: _.assign({}, state.filterView, {
          [action.valueType]: action.value,
          active: true
        })
      });
    case types.RESET_FILTER_PHONES:
      return _.assign({}, state, {
        filterView: _.assign({}, state.filterView, emptyFilterView)
      });

    default:
      return state;
  }
}
