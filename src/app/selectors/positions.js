import { createSelector } from "reselect";
import _ from "lodash";

const getPositions = state => state.positions.entries;
const searchItem = state => state.positions.searchItem;

export const selectedPositions = createSelector(
  getPositions,
  items => {
    let data = [];
    _.map(items, item => {
      data.push({ value: item.id, label: item.name });
    });
    return data;
  }
);

export const searchFilterPositions = createSelector(
  getPositions,
  searchItem,
  (items, search) => {
    if (search && search === "") return items;
    return _.filter(items, item => {
      const stringSearch = `${item.name}`;
      return stringSearch.toLowerCase().includes(search.toLowerCase());
    });
  }
);
