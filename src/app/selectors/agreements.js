import { createSelector } from "reselect";
import _ from "lodash";

const getAgreements = state => state.agreements.entries;
const getFilterView = state => state.agreements.filterView;
const getTypeOfAgreements = state => state.typeOfAgreements.entries;
const getOrganizations = state => state.organizations.entries;
const getTypeOfDeliveries = state => state.typeOfDeliveries.entries;

export const filterAgreements = createSelector(
  getAgreements,
  getFilterView,
  (agreements, filter) => {
    if (filter.organizationId > -1) {
      return _.filter(agreements, agreement => {
        return (
          agreement.providerId === filter.organizationId ||
          agreement.customerId === filter.organizationId
        );
      });
    } else {
      return agreements;
    }
  }
);

export const preparationAgreements = createSelector(
  filterAgreements,
  getTypeOfAgreements,
  getOrganizations,
  getTypeOfDeliveries,
  (agreements, typeOfAgreements, organizations, typeOfDeliveries) => {
    return agreements.map(agreement => {
      let rezult = { ...agreement };
      const typeAgreement = typeOfAgreements.find(
        item => item.id === agreement.typeId
      );
      if (typeAgreement) {
        rezult.typeName = typeAgreement.name;
      } else {
        rezult.typeName = "";
      }
      const provider = organizations.find(
        item => item.id === agreement.providerId
      );
      if (provider) {
        rezult.providerName = provider.name;
      } else {
        rezult.providerName = "";
      }
      const customer = organizations.find(
        item => item.id === agreement.customerId
      );
      if (customer) {
        rezult.customerName = customer.name;
      } else {
        rezult.customerName = "";
      }
      const typeOfDelivery = typeOfDeliveries.find(
        item => item.id === agreement.typeOfDeliveryId
      );
      if (typeOfDelivery) {
        rezult.typeOfDeliveryName = typeOfDelivery.name;
      } else {
        rezult.typeOfDeliveryName = "";
      }

      return rezult;
    });
  }
);
