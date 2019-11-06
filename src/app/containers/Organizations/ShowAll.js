import { connect } from "react-redux";

import ShowAll from "../../components/Organizations/ShowAll";
import {searchFilterOrganizations} from "../../selectors/organizations";
import {selectedTypeOfOrganizations} from "../../selectors/typeOfOrganizations";
import {fetchOrganizations, setFilterOrganizations, searchOrganizations, deleteOrganization} from "../../actions/organizations";
import {fetchContacts} from "../../actions/contacts";
import {fetchPhones} from "../../actions/phones";
import {fetchPositions} from "../../actions/positions";
import {fetchTypeOfOrganizations} from "../../actions/typeOfOrganizations";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  organizations: searchFilterOrganizations(state),
  searchItem: state.organizations.searchItem,
  types: selectedTypeOfOrganizations(state),
  filter: state.organizations.filterView,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    deleteOrganization: id => dispatch(deleteOrganization(id)),
    fetchTypeOfOrganizations: () => dispatch(fetchTypeOfOrganizations()),
    fetchContacts: () => dispatch(fetchContacts()),
    fetchPhones: () => dispatch(fetchPhones()),
    fetchPositions: () => dispatch(fetchPositions()),
    search: value => dispatch(searchOrganizations(value)),
    setFilterOrganization: (valueType, value) => dispatch(setFilterOrganizations(valueType, value))
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowAll);
