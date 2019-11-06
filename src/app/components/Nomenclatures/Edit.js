import React from "react";
import FormEditItem from "./elements/FormEditItem";

class Edit extends React.Component {
  componentDidMount() {
    const { actions, id } = this.props;
    actions.fetchNomenclature(id);
    actions.fetchGroupNomenclatures();
  }

  render() {
    return <FormEditItem {...this.props} />;
  }
}

export default Edit;
