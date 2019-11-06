import { createSelector } from "reselect";
import _ from "lodash";

const searchItem = state => state.phones.searchItem;
const getFilter = state => state.phones.filterView;
const getPhones = state => state.phones.entries;
const getContacts = state => state.contacts.entries;

export const selectedPhones = createSelector(
  getPhones,
  items => {
    let data = [];
    _.map(items, item => {
      data.push({ value: item.id, label: item.number });
    });
    return data;
  }
);

export const preparationPhones = createSelector(
    getPhones,
    getContacts,
    (phones, contacts) => {
      if (phones) {
        return phones.map(phone => {
          const contact = contacts.find(
              item => Number(item.id) === Number(phone.contactId)
          );
          if (contact) {
            return {...phone, contactName: contact.fio}
          }
          return {...phone, contactName: ""}
        });
      }else {
        return phones;
      }
    }
);

export const filterPhones = createSelector(
  getPhones,
    preparationPhones,
  getFilter,
  (phones, preparationPhones, filter) => {
    if (filter.active) {
      return _.filter(phones, phone => {
        let found = false;
        if (phone.contactId === filter.contactId) {
          found = true;
        }
        return found;
      });
    } else {
      return preparationPhones;
    }
  }
);

export const filterSearchPhones = createSelector(
  filterPhones,
  searchItem,
  (items, search) => {
    if (search && search === "") return items;
    return _.filter(items, item => {
      const stringSearch = `${item.number}`;
      return stringSearch.toLowerCase().includes(search.toLowerCase());
    });
  }
);
