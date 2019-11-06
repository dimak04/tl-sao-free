import { connect } from "react-redux";

import ShowAll from "../../components/TypeOfDeliveries/ShowAll";
import {
  fetchTypeOfDeliveries,
  deleteTypeOfDelivery,
  searchTypeOfDeliveries
} from "../../actions/typeOfDeliveries";
import { searchFilterTypeOfDeliveries } from "../../selectors/typeOfDeliveries";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfDeliveries: searchFilterTypeOfDeliveries(state),
  searchItem: state.typeOfDeliveries.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfDeliveries: () => dispatch(fetchTypeOfDeliveries()),
    deleteTypeOfDelivery: id => dispatch(deleteTypeOfDelivery(id)),
    search: value => dispatch(searchTypeOfDeliveries(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
