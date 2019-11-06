import { connect } from "react-redux";

import New from "../../components/TypeOfOrganizations/New";
import {
  editTypeOfOrganization,
  resetTypeOfOrganizationForm,
  createTypeOfOrganization
} from "../../actions/typeOfOrganizations";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfOrganization: state.typeOfOrganizations.entry
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetTypeOfOrganizationForm: () => dispatch(resetTypeOfOrganizationForm()),
    editTypeOfOrganization: (valueType, value) =>
      dispatch(editTypeOfOrganization(valueType, value)),
    createTypeOfOrganization: params =>
      dispatch(createTypeOfOrganization(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
