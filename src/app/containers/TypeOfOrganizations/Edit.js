import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Edit from "../../components/TypeOfOrganizations/Edit";
import {
  editTypeOfOrganization,
  fetchTypeOfOrganization,
  updateTypeOfOrganization
} from "../../actions/typeOfOrganizations";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfOrganization: state.typeOfOrganizations.entry,
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfOrganization: id => dispatch(fetchTypeOfOrganization(id)),
    editTypeOfOrganization: (valueType, value) =>
      dispatch(editTypeOfOrganization(valueType, value)),
    updateTypeOfOrganization: (id, params) =>
      dispatch(updateTypeOfOrganization(id, params))
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
