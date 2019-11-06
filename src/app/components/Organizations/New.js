import React from "react";
import FormEditItem from "./elements/FormEditItem";

class New extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.resetOrganizationForm();
    actions.fetchTypeOfOrganizations();
  }

  render() {
    return <FormEditItem {...this.props} />;
  }
}

export default New;
