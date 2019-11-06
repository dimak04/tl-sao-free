import { connect } from "react-redux";

import New from "../../components/GroupNomenclatures/New";
import {
  editGroupNomenclature,
  resetGroupNomenclatureForm,
  createGroupNomenclature
} from "../../actions/groupNomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  group: state.groupNomenclatures.entry
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetGroupForm: () => dispatch(resetGroupNomenclatureForm()),
    editGroup: (valueType, value) =>
      dispatch(editGroupNomenclature(valueType, value)),
    createGroup: params => dispatch(createGroupNomenclature(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
