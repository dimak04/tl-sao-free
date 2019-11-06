import * as types from "../constants/actionTypes/Agreements";
import _ from "lodash";

const emptyEntry = { number: "", typeId: null, dateStart: "", providerId: null, customerId: null };
const emptyFilterView = {active: false, organizationId: -1};

const initialState = {
  isFetching: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
  entries: [],
  entry: emptyEntry,
  error: false,
  errorMessage: "",
  filterView: emptyFilterView,
  searchItem: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_AGREEMENTS_REQUEST:
      return _.assign({}, state, { isFetching: true, error: false });
    case types.FETCH_AGREEMENTS_ERROR:
      return _.assign({}, state, { isFetching: false, error: true });
    case types.FETCH_AGREEMENTS_SUCCESS:
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

    case types.CREATE_AGREEMENT_REQUEST:
      return _.assign({}, state, {
        isCreating: true,
        error: false,
        errorMessage: ""
      });
    case types.CREATE_AGREEMENT_ERROR:
      return _.assign({}, state, {
        isCreating: false,
        error: true,
        errorMessage: action.error.response
      });
    case types.CREATE_AGREEMENT_SUCCESS:

      return _.assign({}, state, {
        entries: state.entries.concat(action.response.body.data),
        isCreating: false
      });

    case types.DELETE_AGREEMENT_REQUEST:
      return _.assign({}, state, { isDeleting: true, error: false });
    case types.DELETE_AGREEMENT_ERROR:
      return _.assign({}, state, { isDeleting: false, error: true });
    case types.DELETE_AGREEMENT_SUCCESS:
      console.log(action.response.body.data);
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

    case types.UPDATE_AGREEMENT_REQUEST:
      return _.assign({}, state, { isUpdating: true, error: false });
    case types.UPDATE_AGREEMENT_ERROR:
      return _.assign({}, state, { isUpdating: false, error: true });
    case types.UPDATE_AGREEMENT_SUCCESS:
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

    case types.FETCH_AGREEMENT_REQUEST:
      return _.assign({}, state, { isFetching: true, error: false });
    case types.FETCH_AGREEMENT_ERROR:
      return _.assign({}, state, { isFetching: false, error: true });
    case types.FETCH_AGREEMENT_SUCCESS:
      return _.assign({}, state, {
        entry: action.response.body.data,
        isFetching: false
      });

    case types.EDIT_AGREEMENT:
      return _.assign({}, state, {
        entry: _.assign({}, state.entry, { [action.valueType]: action.value })
      });
    case types.RESET_AGREEMENT_FORM:
      return _.assign({}, state, {
        entry: emptyEntry
      });
    case types.SEARCH_AGREEMENTS:
      return _.assign({}, state, {
        searchItem: action.value
      });

    case types.SET_FILTER_AGREEMENTS:
      return _.assign({}, state, {
        filterView: _.assign({}, state.filterView, {[action.valueType]: action.value, active: true})
      });
    case types.RESET_FILTER_AGREEMENTS:
      return _.assign({}, state, {
        filterView: _.assign({}, state.filterView, emptyFilterView)
      });

    default:
      return state;
  }
}
