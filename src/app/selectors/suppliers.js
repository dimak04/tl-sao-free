import {createSelector} from "reselect";
import _ from  "lodash";

const suppliers = state => state.supliers.entries;
const typeNomenclatures =state => state.typeNomenclatures.entries;

export const selectedMenuList = createSelector(suppliers, typeNomenclatures, (suppliers,typeNomenclatures) => {
  let data = [];
  _.map(suppliers, supplier => {

  })
})