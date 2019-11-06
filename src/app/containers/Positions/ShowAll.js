import { connect } from "react-redux";

import ShowAll from "../../components/Positions/ShowAll";
import {
  fetchPositions,
  deletePosition,
  searchPositions
} from "../../actions/positions";
import {searchFilterPositions} from "../../selectors/positions";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  positions: searchFilterPositions(state),
  searchItem: state.positions.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchPositions: () => dispatch(fetchPositions()),
    deletePosition: id => dispatch(deletePosition(id)),
    search: value => dispatch(searchPositions(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
