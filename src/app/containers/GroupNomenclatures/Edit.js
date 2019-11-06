import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import Edit from "../../components/GroupNomenclatures/Edit";
import {editGroupNomenclature, fetchGroupNomenclature, updateGroupNomenclature} from "../../actions/groupNomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  group: state.groupNomenclatures.entry,
  id: ownProps.match.params.id,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroup: id => dispatch((fetchGroupNomenclature(id))),
    editGroup: (valueType, value) => dispatch(editGroupNomenclature(valueType, value)),
    updateGroup: (id, params) => dispatch(updateGroupNomenclature(id, params))
  }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit));
