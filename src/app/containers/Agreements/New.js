import { connect } from "react-redux";

import New from "../../components/Agreements/New";
import {
  editAgreement,
  resetAgreementForm,
  createAgreement
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
  typeOfAgreements: selectedTypeOfAgreements(state),
  organizations: selectedOrganizations(state),
  typeOfDeliveries: selectedTypeOfDeliveries(state)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfAgreements: () => dispatch(fetchTypeOfAgreements()),
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    fetchTypeOfDeliveries: () => dispatch(fetchTypeOfDeliveries()),
    resetAgreementForm: () => dispatch(resetAgreementForm()),
    editAgreement: (valueType, value) =>
      dispatch(editAgreement(valueType, value)),
    createAgreement: params => dispatch(createAgreement(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
