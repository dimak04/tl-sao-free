import { createSelector } from "reselect";
import _ from "lodash";

const getTypeOfOrganizations = state => state.typeOfOrganizations.entries;
const searchItem = state => state.typeOfOrganizations.searchItem;

export const selectedTypeOfOrganizations = createSelector(
    getTypeOfOrganizations,
    items => {
      let data = [];
      _.map(items, item => {
        data.push({ value: item.id, label: item.name });
      });
      return data;
    }
);

export const searchFilterTypeOfOrganizations = createSelector(
    getTypeOfOrganizations,
    searchItem,
    (items, search) => {
      if (search && search === "") return items;
      return _.filter(items, item => {
        const stringSearch = `${item.name}`;
        return stringSearch.toLowerCase().includes(search.toLowerCase());
      });
    }
);