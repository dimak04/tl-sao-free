import { createSelector } from "reselect";
import _ from "lodash";

const groupNomenclatures = state => state.groupNomenclatures.entries;
const searchItems = state => state.groupNomenclatures.searchItem;
export const selectedGroupNomenclatures = createSelector(
  groupNomenclatures,
  items => {
    let data = [];
    _.map(items, item => {
      data.push({ value: item.id, label: item.name });
    });
    return data;
  }
);

export const menuListGroupNomenclatures = createSelector(
  groupNomenclatures,
  items => {
    let data = [{ key: "all", label: "Все" }];
    _.map(items, item => {
      data.push({ key: item.id.toString(), label: item.name });
    });
    return data;
  }
);

export const filterGroupNomenclatures = createSelector(
  groupNomenclatures,
  searchItems,
  (items, search) => {
    if (search && search === "") return items;
    return _.filter(items, item => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }
);
