import { connect } from "react-redux";

import New from "../../components/Contacts/New";
import {
  editContact,
  resetContactForm,
  createContact,
} from "../../actions/contacts"
import {selectedOrganizations} from "../../selectors/organizations";
import {selectedPositions} from "../../selectors/positions";
import {fetchOrganizations} from "../../actions/organizations";
import {fetchPositions} from "../../actions/positions";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  contact: state.contacts.entry,
  organizations: selectedOrganizations(state),
  positions: selectedPositions(state),
  filter: state.contacts.filterView,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    fetchPositions: () => dispatch(fetchPositions()),
    resetContactForm: () => dispatch(resetContactForm()),
    editContact: (valueType, value) => dispatch(editContact(valueType, value)),
    createContact: (params) => dispatch(createContact(params)),

  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(New);
