import { connect } from "react-redux";

import ShowAll from "../../components/Contacts/ShowAll";
import {deleteContact, fetchContacts, searchContacts} from "../../actions/contacts";
import {fetchPositions} from "../../actions/positions";
import {fetchOrganizations} from "../../actions/organizations";
import {searchFilterContacts} from "../../selectors/contacts";
import {fetchPhones} from "../../actions/phones";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  contacts: searchFilterContacts(state),
  searchItem: state.contacts.searchItem,
  filter: state.contacts.filterView.active
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchPositions: () => dispatch(fetchPositions()),
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    fetchContacts: () => dispatch(fetchContacts()),
    fetchPhones: () => dispatch(fetchPhones()),
    deleteContact: id => dispatch(deleteContact(id)),
    search: value => dispatch(searchContacts(value))
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowAll);
