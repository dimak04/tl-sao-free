import { createSelector } from "reselect";
import _ from "lodash";

const getOrganizations = state => state.organizations.entries;
const getPositions = state => state.positions.entries;
const getPhones = state => state.phones.entries;
const getContacts = state => state.contacts.entries;
const searchItem = state => state.contacts.searchItem;
const getFilter = state => state.contacts.filterView;

export const selectedContacts = createSelector(
  getContacts,
  items => {
    let data = [];
    _.map(items, item => {
      data.push({ value: item.id, label: item.fio });
    });
    return data;
  }
);

const filterContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    if (filter.active) {
      return _.filter(contacts, contact => {
        return contact.organizationId === filter.organizationId;
      });
    }
    return contacts;
  }
);

export const preparationContacts = createSelector(
  filterContacts,
  getOrganizations,
  getPositions,
  getPhones,
  getFilter,
  (contacts, organizations, positions, phones, filter) => {
    let data = [];
    _.map(contacts, contact => {
      let rezalt = { ...contact };
      if (!filter.active) {
        const organization = organizations.find(
          item => Number(item.id) === Number(contact.organizationId)
        );
        if (organization) {
          rezalt.organizationName = organization.name;
        } else {
          rezalt.organizationName = "";
        }
      }
      const position = positions.find(
        item => Number(item.id) === Number(contact.positionId)
      );
      if (position) {
        rezalt.positionName = position.name;
      } else {
        rezalt.positionName = "";
      }
      rezalt.phones = _.filter(phones, phone => phone.contactId === contact.id);
      data.push(rezalt);
    });
    return data;
  }
);

export const searchFilterContacts = createSelector(
  preparationContacts,
  searchItem,
  (items, search) => {
    if (search && search === "") return items;
    return _.filter(items, item => {
      const stringLine = `${item.fio} ${item.organizationName} ${item.positionName}`;
      return stringLine.toLowerCase().includes(search.toLowerCase());
    });
  }
);
