import { createSelector } from "reselect";
import _ from "lodash";

const getTypeOfAgreements = state => state.typeOfAgreements.entries;
const searchItem = state => state.typeOfAgreements.searchItem;

export const selectedTypeOfAgreements = createSelector(
    getTypeOfAgreements,
    items => {
      let data = [];
      _.map(items, item => {
        data.push({ value: item.id, label: item.name });
      });
      return data;
    }
);

export const searchFilterTypeOfAgreements = createSelector(
    getTypeOfAgreements,
    searchItem,
    (items, search) => {
      if (search && search === "") return items;
      return _.filter(items, item => {
        const stringSearch = `${item.name}`;
        return stringSearch.toLowerCase().includes(search.toLowerCase());
      });
    }
);