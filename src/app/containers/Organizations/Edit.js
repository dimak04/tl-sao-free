import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import Edit from "../../components/Organizations/Edit";
import {
  editOrganization,
  fetchOrganization,
  updateOrganization
} from "../../actions/organizations";
import { preparationOrganization } from "../../selectors/organizations";
import { fetchTypeOfOrganizations } from "../../actions/typeOfOrganizations";
import { selectedTypeOfOrganizations } from "../../selectors/typeOfOrganizations";
import {setFilterContacts, resetFilterContacts} from "../../actions/contacts";
import {setFilterAgreements, resetFilterAgreements} from "../../actions/agreements";
import {selectedNomenclatures} from "../../selectors/nomenclatures";
import {fetchNomenclatures} from "../../actions/nomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  organization: preparationOrganization(state),
  nomenclatures: state.nomenclatures.entries,
  allNomenclatures: selectedNomenclatures(state),
  typeOfOrganizations: selectedTypeOfOrganizations(state),
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchOrganization: id => dispatch(fetchOrganization(id)),
    fetchTypeOfOrganizations: () => dispatch(fetchTypeOfOrganizations()),
    fetchNomenclatures: () => dispatch(fetchNomenclatures()),
    editOrganization: (valueType, value) =>
      dispatch(editOrganization(valueType, value)),
    updateOrganization: (id, params) => dispatch(updateOrganization(id, params)),
    setFilterContacts: (valueType, value) => dispatch(setFilterContacts(valueType, value)),
    resetFilterContacts: () => dispatch(resetFilterContacts()),
    setFilterAgreements: (valueType, value) => dispatch(setFilterAgreements(valueType, value)),
    resetFilterAgreements: () => dispatch(resetFilterAgreements())
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit));
