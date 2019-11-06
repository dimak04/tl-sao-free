import { connect } from "react-redux";

import New from "../../components/TypeOfDeliveries/New";
import {
  editTypeOfDelivery,
  resetTypeOfDeliveryForm,
  createTypeOfDelivery
} from "../../actions/typeOfDeliveries";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfDelivery: state.typeOfDeliveries.entry
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetTypeOfDeliveryForm: () => dispatch(resetTypeOfDeliveryForm()),
    editTypeOfDelivery: (valueType, value) =>
      dispatch(editTypeOfDelivery(valueType, value)),
    createTypeOfDelivery: params => dispatch(createTypeOfDelivery(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
