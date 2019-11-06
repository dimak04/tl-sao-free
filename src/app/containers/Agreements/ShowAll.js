import { connect } from "react-redux";

import ShowAll from "../../components/Agreements/ShowAll";
import {fetchAgreements, deleteAgreement, searchAgreements} from "../../actions/agreements";
import {fetchTypeOfAgreements} from "../../actions/typeOfAgreements";
import {preparationAgreements} from "../../selectors/agreements";
import {fetchOrganizations} from "../../actions/organizations";
import {fetchTypeOfDeliveries} from "../../actions/typeOfDeliveries";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  agreements: preparationAgreements(state),
  searchItem: state.agreements.searchItem
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchAgreements: () => dispatch(fetchAgreements()),
    fetchTypeOfAgreements: () => dispatch(fetchTypeOfAgreements()),
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    fetchTypeOfDeliveries: () => dispatch(fetchTypeOfDeliveries()),
    deleteAgreement: id => dispatch(deleteAgreement(id)),
    search: (value) => dispatch(searchAgreements(value))
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowAll);
