import { createSelector } from "reselect";
import _ from "lodash";

const getTypeOfDeliveries = state => state.typeOfDeliveries.entries;
const searchItem = state => state.typeOfDeliveries.searchItem;

export const selectedTypeOfDeliveries = createSelector(
    getTypeOfDeliveries,
    items => {
      let data = [];
      _.map(items, item => {
        data.push({ value: item.id, label: item.name });
      });
      return data;
    }
);

export const searchFilterTypeOfDeliveries = createSelector(
    getTypeOfDeliveries,
    searchItem,
    (items, search) => {
      if (search && search === "") return items;
      return _.filter(items, item => {
        const stringSearch = `${item.name}`;
        return stringSearch.toLowerCase().includes(search.toLowerCase());
      });
    }
);