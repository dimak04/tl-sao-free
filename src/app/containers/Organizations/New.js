import { connect } from "react-redux";

import New from "../../components/Organizations/New";
import {editOrganization, resetOrganizationForm, createOrganization} from "../../actions/organizations";
import {fetchTypeOfOrganizations} from "../../actions/typeOfOrganizations";
import {selectedTypeOfOrganizations} from "../../selectors/typeOfOrganizations";


const mapStateToProps = (state, ownProps) => ({
  ownProps,
  organization: state.organizations.entry,
  typeOfOrganizations: selectedTypeOfOrganizations(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetOrganizationForm: () => dispatch(resetOrganizationForm()),
    editOrganization: (valueType, value) => dispatch(editOrganization(valueType, value)),
    createOrganization: (params) => dispatch(createOrganization(params)),
    fetchTypeOfOrganizations: () => dispatch(fetchTypeOfOrganizations()),
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(New);
