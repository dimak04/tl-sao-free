import { connect } from "react-redux";

import ShowAll from "../../components/TypeOfAgreements/ShowAll";
import {
  fetchTypeOfAgreements,
  deleteTypeOfAgreement,
  searchTypeOfAgreements
} from "../../actions/typeOfAgreements";
import { searchFilterTypeOfAgreements } from "../../selectors/typeOfAgreemens";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfAgreements: searchFilterTypeOfAgreements(state),
  searchItem: state.typeOfAgreements.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfAgreements: () => dispatch(fetchTypeOfAgreements()),
    deleteTypeOfAgreement: id => dispatch(deleteTypeOfAgreement(id)),
    search: value => dispatch(searchTypeOfAgreements(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
