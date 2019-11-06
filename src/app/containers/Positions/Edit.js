import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Edit from "../../components/Positions/Edit";
import {
  editPosition,
  fetchPosition,
  updatePosition
} from "../../actions/positions";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  position: state.positions.entry,
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchPosition: id => dispatch(fetchPosition(id)),
    editPosition: (valueType, value) =>
      dispatch(editPosition(valueType, value)),
    updatePosition: (id, params) => dispatch(updatePosition(id, params))
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
