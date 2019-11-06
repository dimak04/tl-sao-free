import { connect } from "react-redux";

import LeftMenu from "../../components/Settings/LeftMenu";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  path: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  actions: {
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenu);
