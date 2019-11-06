import React from "react";
import FormEditItem from "./elements/FormEditItem";

class Edit extends React.Component {
  componentDidMount() {
    const { actions, id } = this.props;
    actions.fetchContact(id);
    actions.fetchOrganizations();
    actions.fetchPositions();
    actions.setFilterPhones("contactId", id);
  }

  render() {
    return <FormEditItem {...this.props} />;
  }
  componentWillUnmount() {
    const { actions } = this.props;
    actions.resetFilterPhones();
  }
}

export default Edit;
