import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Edit from "../../components/TypeOfAgreements/Edit";
import {
  editTypeOfAgreement,
  fetchTypeOfAgreement,
  updateTypeOfAgreement
} from "../../actions/typeOfAgreements";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfAgreement: state.typeOfAgreements.entry,
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfAgreement: id => dispatch(fetchTypeOfAgreement(id)),
    editTypeOfAgreement: (valueType, value) =>
      dispatch(editTypeOfAgreement(valueType, value)),
    updateTypeOfAgreement: (id, params) =>
      dispatch(updateTypeOfAgreement(id, params))
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
