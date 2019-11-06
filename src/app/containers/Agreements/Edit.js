import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import Edit from "../../components/Agreements/Edit";
import {
  editAgreement,
  fetchAgreement,
  updateAgreement
} from "../../actions/agreements";
import { selectedTypeOfAgreements } from "../../selectors/typeOfAgreemens";
import { selectedOrganizations } from "../../selectors/organizations";
import { selectedTypeOfDeliveries } from "../../selectors/typeOfDeliveries";
import { fetchTypeOfAgreements } from "../../actions/typeOfAgreements";
import { fetchOrganizations } from "../../actions/organizations";
import { fetchTypeOfDeliveries } from "../../actions/typeOfDeliveries";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  agreement: state.agreements.entry,
  organizations: selectedOrganizations(state),
  typeOfAgreements: selectedTypeOfAgreements(state),
  typeOfDeliveries: selectedTypeOfDeliveries(state),
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchAgreement: id => dispatch(fetchAgreement(id)),
    editAgreement: (valueType, value) =>
      dispatch(editAgreement(valueType, value)),
    updateAgreement: (id, params) => dispatch(updateAgreement(id, params)),
    fetchTypeOfDeliveries: () => dispatch(fetchTypeOfDeliveries()),
    fetchTypeOfAgreements: () => dispatch(fetchTypeOfAgreements()),
    fetchOrganizations: () => dispatch(fetchOrganizations())
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit));
