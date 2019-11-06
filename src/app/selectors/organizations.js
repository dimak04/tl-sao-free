import { createSelector } from "reselect";
import _ from "lodash";

const getOrganizations = state => state.organizations.entries;
const getOrganization = state => state.organizations.entry;
const getTypeOfOrganizations = state => state.typeOfOrganizations.entries;
const getPositions = state => state.positions.entries;
const getContacts = state => state.contacts.entries;
const filterView = state => state.organizations.filterView;
const searchItem = state => state.organizations.searchItem;

export const selectedOrganizations = createSelector(
  getOrganizations,
  items => {
    let data = [];
    _.map(items, item => {
      data.push({ value: item.id, label: item.name });
    });
    return data;
  }
);

export const filterOrganizations = createSelector(
  getOrganizations,
  filterView,
  (organizations, filter) => {
    const { active, typeOrganizationId, groupNomenclatureId } = filter;
    if (active) {
      const filterByType =
        typeOrganizationId > -1
          ? organizations.filter(organization => {
              return organization.typeId === typeOrganizationId;
            })
          : organizations;
      return groupNomenclatureId > -1
        ? filterByType.filter(organization => {
            let inGroup = false;
            _.map(organization.nomenclatures, nomenclature => {
              if (nomenclature.groupId === groupNomenclatureId) {
                inGroup = true;
              }
            });
            return inGroup;
          })
        : filterByType;
    }
    return organizations;
  }
);

export const preparationOrganizations = createSelector(
  filterOrganizations,
  getTypeOfOrganizations,
  getPositions,
  getContacts,
  (organizations, types, positions, contacts) => {
    return organizations.map(organization => {
      let rezalt = { ...organization };
      const type = types.find(
        typeItem => Number(typeItem.id) === Number(organization.typeId)
      );
      if (type) {
        rezalt.typeName = type.name;
      }
      if (contacts.length > 0) {
        const organizationContacts = contacts.filter(contact => {
          return contact.organizationId === organization.id;
        });

        rezalt.contacts = organizationContacts.map(contact => {
          const position = positions.find(
            item => Number(item.id) === Number(contact.positionId)
          );
          if (position) {
            return { ...contact, positionName: position.name };
          } else {
            return { ...contact };
          }
        });
      } else {
        rezalt.contacts = contacts;
      }
      let nomenclatureLine = [];
      for (let value of organization.nomenclatures) {
        nomenclatureLine.push(value.name);
      }
      rezalt.nomenclatureLine = nomenclatureLine.join(", ");
      return rezalt;
    });
  }
);

export const searchFilterOrganizations = createSelector(
  preparationOrganizations,
  searchItem,
  (items, search) => {
    if (search && search === "") return items;
    return _.filter(items, item => {
      const stringSearch = `${item.name} ${item.fullName}`;
      return stringSearch.toLowerCase().includes(search.toLowerCase());
    });
  }
);

export const preparationOrganization = createSelector(
  getOrganization,
  getTypeOfOrganizations,
  getPositions,
  (organization, types, positions) => {
    let rezalt = { ...organization };
    const type = types.find(typeItem => typeItem.id === organization.typeId);
    if (type) {
      rezalt.typeName = type.name;
      rezalt.type = { value: type.id, label: type.name };
    } else {
      rezalt.type = { value: null, label: "" };
    }
    let dataContacts = [];
    _.map(organization.contacts, contact => {
      let rezaltContact = { ...contact };
      const position = positions.find(
        item => Number(item.id) === Number(contact.positionId)
      );

      if (position) {
        rezaltContact.positionName = position.name;
        rezaltContact.position = { value: position.id, label: position.name };
      } else {
        rezalt.position = { value: null, label: "" };
      }
      dataContacts.push(rezaltContact);
    });
    rezalt.contacts = dataContacts;
    return rezalt;
  }
);
