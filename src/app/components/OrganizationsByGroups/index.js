import React from "react";
import { Layout, Spin } from "antd";
import LeftMenu from "../LeftMenu";
import Organizations from "../Organizations";
import { Route } from "react-router-dom";
const { Content } = Layout;

class OrganizationsByGroups extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchGroups();
  }

  onChangeFilter = e => {
    const value = Number(e.key);
    const { actions } = this.props;
    if (value) {
      actions.setFilter("groupNomenclatureId", value);
    } else {
      actions.resetFilter();
    }
  };

  render() {
    const { groupOrganizations } = this.props;
    const show = groupOrganizations.length > 0;
    if (!show) {
      return (
        <>
          <Spin size={"large"} />
        </>
      );
    } else {
      return (
        <>
          <LeftMenu
            menuItems={groupOrganizations}
            onClick={this.onChangeFilter}
          />
          <Content className="content">
            <Route>
              <Organizations/>
            </Route>
          </Content>
        </>
      );
    }
  }
  componentWillUnmount() {
    const { actions } = this.props;
    actions.resetFilter();
  }
}

export default OrganizationsByGroups;
