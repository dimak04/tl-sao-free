import React from "react";
import FormEditItem from "./elements/FormEditItem";

class Edit extends React.Component {
  componentDidMount() {
    const {actions, id} = this.props;
    actions.fetchAgreement(id);
    actions.fetchTypeOfAgreements();
    actions.fetchOrganizations();
    actions.fetchTypeOfDeliveries();
  }

  render() {
    return <FormEditItem {...this.props} />;
  }
}

export default Edit;
