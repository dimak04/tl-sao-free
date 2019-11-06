import { connect } from "react-redux";

import New from "../../components/Phones/New";
import { editPhone, resetPhoneForm, createPhone } from "../../actions/phones";
import { fetchContacts } from "../../actions/contacts";
import { selectedContacts } from "../../selectors/contacts";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  phone: state.phones.entry,
  filter: state.phones.filterView,
  contacts: selectedContacts(state)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetPhoneForm: () => dispatch(resetPhoneForm()),
    fetchContacts: () => dispatch(fetchContacts()),
    editPhone: (valueType, value) => dispatch(editPhone(valueType, value)),
    createPhone: params => dispatch(createPhone(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
