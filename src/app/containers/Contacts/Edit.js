import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import Edit from "../../components/Contacts/Edit";
import {
  editContact,
  fetchContact,
  updateContact,
} from "../../actions/contacts";
import { selectedOrganizations } from "../../selectors/organizations";
import { selectedPositions } from "../../selectors/positions";
import {fetchOrganizations} from "../../actions/organizations";
import {fetchPositions} from "../../actions/positions";
import {setFilterPhones, resetFilterPhones} from "../../actions/phones";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  contact: state.contacts.entry,
  organizations: selectedOrganizations(state),
  positions: selectedPositions(state),
  id: Number(ownProps.match.params.id),
  filter: state.contacts.filterView
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchContact: id => dispatch(fetchContact(id)),
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    fetchPositions: () => dispatch(fetchPositions()),
    editContact: (valueType, value) => dispatch(editContact(valueType, value)),
    updateContact: (id, params) => dispatch(updateContact(id, params)),
    setFilterPhones: (valueType, value) => dispatch(setFilterPhones(valueType, value)),
    resetFilterPhones: () => dispatch(resetFilterPhones())
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit));
