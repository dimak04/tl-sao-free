import { connect } from "react-redux";

import ShowAll from "../../components/Nomenclatures/ShowAll";
import {
  fetchNomenclatures,
  deleteNomenclature,
  searchNomenclatures
} from "../../actions/nomenclatures";
import { fetchGroupNomenclatures } from "../../actions/groupNomenclatures";
import { searchFilterNomenclatures } from "../../selectors/nomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  nomenclatures: searchFilterNomenclatures(state),
  searchItem: state.nomenclatures.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroups: () => dispatch(fetchGroupNomenclatures()),
    fetchNomenclatures: () => dispatch(fetchNomenclatures()),
    deleteNomenclature: id => dispatch(deleteNomenclature(id)),
    search: value => dispatch(searchNomenclatures(value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAll);
