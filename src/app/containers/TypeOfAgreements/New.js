import { connect } from "react-redux";

import New from "../../components/TypeOfAgreements/New";
import {
  editTypeOfAgreement,
  resetTypeOfAgreementForm,
  createTypeOfAgreement
} from "../../actions/typeOfAgreements";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfAgreement: state.typeOfAgreements.entry
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetTypeOfAgreement: () => dispatch(resetTypeOfAgreementForm()),
    editTypeOfAgreement: (valueType, value) =>
      dispatch(editTypeOfAgreement(valueType, value)),
    createTypeOfAgreement: params => dispatch(createTypeOfAgreement(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
