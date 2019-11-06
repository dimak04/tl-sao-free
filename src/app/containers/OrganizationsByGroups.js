import { connect } from "react-redux";

import OrganizationsByGroups from "../components/OrganizationsByGroups";
import { fetchGroupNomenclatures } from "../actions/groupNomenclatures";
import { menuListGroupNomenclatures } from "../selectors/groupNomenclatures";
import { setFilterOrganizations, resetFilterOrganizations } from "../actions/organizations";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  groupOrganizations: menuListGroupNomenclatures(state)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroups: () => dispatch(fetchGroupNomenclatures()),
    setFilter: (valueType, value) =>
      dispatch(setFilterOrganizations(valueType, value)),
    resetFilter: () => dispatch(resetFilterOrganizations())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationsByGroups);
