import React from "react";
import { Transfer } from "antd";
import {fm} from "../../../helpers/locale";

class FormAddNomenclature extends React.Component {
  state = {
    targetKeys: [],
    selectedKeys: []
  };

  componentDidMount() {
    const { organization } = this.props;
    const selectedNomenclatures = organization.nomenclatures.map(item =>
      item.id.toString()
    );
    this.setState({ targetKeys: selectedNomenclatures });
  }

  handleChange = (nextTargetKeys) => {
    const { actions, nomenclatures } = this.props;
    const newNomenclatures = nextTargetKeys.map(key => {
      return nomenclatures.find(item => Number(key) === Number(item.id));
    });
    actions.editOrganization("nomenclatures", newNomenclatures);
    this.setState({ targetKeys: nextTargetKeys });
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    });
  };

  render() {
    const { allNomenclatures } = this.props;
    const { targetKeys, selectedKeys } = this.state;
    return (
      <>
        <Transfer
            style={{margin: 4}}
          dataSource={allNomenclatures}
          titles={[fm("label-list-all"), fm("label-list-used")]}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          render={item => item.title}
          operations={[fm("button-add"), fm("button-delete")]}
          listStyle={{ width: 250 }}
        />
      </>
    );
  }
}
export default FormAddNomenclature;
