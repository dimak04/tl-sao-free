import { createSelector } from "reselect";
import _ from "lodash";

const getNomenclatures = state => state.nomenclatures.entries;
const getNomenclature = state => state.nomenclatures.entry;
const getGroupNomenclatures = state => state.groupNomenclatures.entries;
const searchItem = state => state.nomenclatures.searchItem;

export const selectedNomenclatures = createSelector(
  getNomenclatures,
  items => {
    let data = [];
    _.map(items, item => {
      data.push({ key: item.id.toString(), title: item.name });
    });
    return data;
  }
);
export const preparationNomenclatures = createSelector(
  getNomenclatures,
  getGroupNomenclatures,
  (nomenclatures, groupNomenclatures) => {
    let data = [];
    _.map(nomenclatures, nomenclature => {
      const getGroupName = groupNomenclatures.find(
        g => g.id === nomenclature.groupId
      );
      if (getGroupName) {
        data.push({...nomenclature, groupName: getGroupName.name});
      }else {data.push({...nomenclature, groupName: ""});}
    });

    return data;
  }
);

export const searchFilterNomenclatures = createSelector( preparationNomenclatures, searchItem,
    (items, search) => {
      if (search && search === "") return items;
      return _.filter(items, item => {
        const searchLine = `${item.name} ${item.groupName}`;
        return searchLine
            .toLowerCase()
            .includes(search.toLowerCase());
      })
    }
);


export const preparationNomenclature = createSelector(
  getNomenclature,
  getGroupNomenclatures,
  (nomenclature, groupNomenclatures) => {
    const getGroupName = groupNomenclatures.find(
      g => Number(g.id) === Number(nomenclature.groupId)
    );
    let rezult = null;
    if (getGroupName) {
      rezult = { ...{}, ...nomenclature, ...{group: {value: getGroupName.id, label: getGroupName.name }}};
    } else {
      rezult = { ...nomenclature, group: {value: null, label: ""} };
    }
    return rezult;
  }
);
