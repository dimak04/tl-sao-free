import { connect } from "react-redux";

import New from "../../components/Nomenclatures/New";
import {
  editNomenclature,
  resetNomenclatureForm,
  createNomenclature
} from "../../actions/nomenclatures";
import { preparationNomenclature } from "../../selectors/nomenclatures";
import { selectedGroupNomenclatures } from "../../selectors/groupNomenclatures";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  nomenclature: preparationNomenclature(state),
  groups: selectedGroupNomenclatures(state)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetNomenclatureForm: () => dispatch(resetNomenclatureForm()),
    editNomenclature: (valueType, value) =>
      dispatch(editNomenclature(valueType, value)),
    createNomenclature: params => dispatch(createNomenclature(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
