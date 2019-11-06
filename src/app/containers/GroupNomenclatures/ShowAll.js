import { connect } from "react-redux";

import ShowAll from "../../components/GroupNomenclatures/ShowAll";
import {
  fetchGroupNomenclatures,
  deleteGroupNomenclature,
  searchGroupNomenclatures
} from "../../actions/groupNomenclatures";
import { filterGroupNomenclatures } from "../../selectors/groupNomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  groups: filterGroupNomenclatures(state),
  searchItem: state.groupNomenclatures.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroups: () => dispatch(fetchGroupNomenclatures()),
    deleteGroup: id => dispatch(deleteGroupNomenclature(id)),
    search: value => dispatch(searchGroupNomenclatures(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
