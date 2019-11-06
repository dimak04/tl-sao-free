import React from "react";
import FormEditItem from "./elements/FormEditItem";

class Edit extends React.Component {
  componentDidMount() {
    const { actions, id } = this.props;
    actions.fetchOrganization(id);
    actions.fetchTypeOfOrganizations();
    actions.fetchNomenclatures();
    actions.setFilterContacts("organizationId", Number(id));
    actions.setFilterAgreements("organizationId", Number(id))
  }

  render() {
    return <FormEditItem {...this.props} />;
  }
  componentWillUnmount() {
    const { actions } = this.props;
    actions.resetFilterContacts();
    actions.resetFilterAgreements();
  }
}

export default Edit;
