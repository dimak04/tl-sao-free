import { connect } from "react-redux";

import ShowAll from "../../components/TypeOfOrganizations/ShowAll";
import {
  fetchTypeOfOrganizations,
  deleteTypeOfOrganization,
  searchTypeOfOrganizations
} from "../../actions/typeOfOrganizations";
import { searchFilterTypeOfOrganizations } from "../../selectors/typeOfOrganizations";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  typeOfOrganizations: searchFilterTypeOfOrganizations(state),
  searchItem: state.typeOfOrganizations.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchTypeOfOrganizations: () => dispatch(fetchTypeOfOrganizations()),
    deleteTypeOfOrganization: id => dispatch(deleteTypeOfOrganization(id)),
    search: value => dispatch(searchTypeOfOrganizations(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
