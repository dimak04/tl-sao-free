import { connect } from "react-redux";

import New from "../../components/Positions/New";
import {
  editPosition,
  resetPositionForm,
  createPosition
} from "../../actions/positions";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  position: state.positions.entry
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetPositionForm: () => dispatch(resetPositionForm()),
    editPosition: (valueType, value) =>
      dispatch(editPosition(valueType, value)),
    createPosition: params => dispatch(createPosition(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
