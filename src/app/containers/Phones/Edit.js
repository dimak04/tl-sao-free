import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Edit from "../../components/Phones/Edit";
import { editPhone, fetchPhone, updatePhone } from "../../actions/phones";
import { selectedContacts } from "../../selectors/contacts";
import { fetchContacts } from "../../actions/contacts";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  phone: state.phones.entry,
  id: ownProps.match.params.id,
  filter: state.phones.filterView,
  contacts: selectedContacts(state)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchPhone: id => dispatch(fetchPhone(id)),
    fetchContacts: () => dispatch(fetchContacts()),
    editPhone: (valueType, value) => dispatch(editPhone(valueType, value)),
    updatePhone: (id, params) => dispatch(updatePhone(id, params))
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
