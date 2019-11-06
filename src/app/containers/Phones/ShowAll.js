import { connect } from "react-redux";

import ShowAll from "../../components/Phones/ShowAll";
import { fetchPhones, searchPhones, deletePhone } from "../../actions/phones";
import { filterSearchPhones } from "../../selectors/phones";
import { fetchContacts } from "../../actions/contacts";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  phones: filterSearchPhones(state),
  searchItem: state.phones.searchItem,
  filter: state.phones.filterView.active
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchPhones: () => dispatch(fetchPhones()),
    fetchContacts: () => dispatch(fetchContacts()),
    deletePhone: id => dispatch(deletePhone(id)),
    search: value => dispatch(searchPhones(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
