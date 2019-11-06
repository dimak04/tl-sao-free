import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Edit from "../../components/TypeOfDeliveries/Edit";
import {
  editTypeOfDelivery,
  fetchTypeOfDelivery,
  updateTypeOfDelivery
} from "../../actions/typeOfDeliveries";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfDelivery: state.typeOfDeliveries.entry,
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfDelivery: id => dispatch(fetchTypeOfDelivery(id)),
    editTypeOfDelivery: (valueType, value) =>
      dispatch(editTypeOfDelivery(valueType, value)),
    updateTypeOfDelivery: (id, params) =>
      dispatch(updateTypeOfDelivery(id, params))
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
