import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Edit from "../../components/Nomenclatures/Edit";
import {
  editNomenclature,
  fetchNomenclature,
  updateNomenclature
} from "../../actions/nomenclatures";
import { fetchGroupNomenclatures } from "../../actions/groupNomenclatures";
import { preparationNomenclature } from "../../selectors/nomenclatures";
import { selectedGroupNomenclatures } from "../../selectors/groupNomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  nomenclature: preparationNomenclature(state),
  groups: selectedGroupNomenclatures(state),
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroupNomenclatures: () => dispatch(fetchGroupNomenclatures()),
    fetchNomenclature: id => dispatch(fetchNomenclature(id)),
    editNomenclature: (valueType, value) =>
      dispatch(editNomenclature(valueType, value)),
    updateNomenclature: (id, params) => dispatch(updateNomenclature(id, params))
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
