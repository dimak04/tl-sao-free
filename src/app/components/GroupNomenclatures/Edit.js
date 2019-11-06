import React from "react";
import FormEditItem from "./elements/FormEditItem";

class Edit extends React.Component {
  componentDidMount() {
    const { actions, id } = this.props;
    actions.fetchGroup(id);
  }

  render() {
    return <FormEditItem {...this.props} />;
  }
}

export default Edit;
