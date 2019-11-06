import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authentication from "./authentication";
import agreements from "./agreements";
import contacts from "./contacts";
import groupNomenclatures from "./groupNomenclatures";
import nomenclatures from "./nomenclatures";
import organizations from "./organizations";
import phones from "./phones";
import positions from "./positions";
import typeOfAgreements from "./typeOfAgreements";
import typeOfDeliveries from "./typeOfDeliveries";
import typeOfOrganizations from "./typeOfOrganizations";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    agreements,
    contacts,
    groupNomenclatures,
    nomenclatures,
    organizations,
    phones,
    positions,
    typeOfAgreements,
    typeOfDeliveries,
    typeOfOrganizations
  });
