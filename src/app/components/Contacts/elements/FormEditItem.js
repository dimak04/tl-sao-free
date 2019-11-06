import React from "react";
import { Route } from "react-router-dom";
import { Tabs } from "antd";
import { fm } from "../../../helpers/locale";
import { Phones } from "../../../components";
import FormBase from "./FormBase";
const { TabPane } = Tabs;

class FormEditItem extends React.Component {
  state = {
    activeKey: "1"
  };

  editActiveKey = key => {
    this.setState({ activeKey: key });
  };

  render() {
    const { contact } = this.props;
    const activeKey = this.state.activeKey;
    const isNew = !contact.id ? true : false;
    return (
      <Tabs
        onChange={this.editActiveKey}
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        type={"card"}
      >
        <TabPane tab={fm("label-base")} key="1">
          <FormBase {...this.props} editActiveKey={this.editActiveKey} />
        </TabPane>
        <TabPane disabled={isNew} tab={fm("label-phones")} key="2">
          <Route>
            <Phones />
          </Route>
        </TabPane>
      </Tabs>
    );
  }
}

export default FormEditItem;
