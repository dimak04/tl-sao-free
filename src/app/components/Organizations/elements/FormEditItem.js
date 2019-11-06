import React from "react";
import { Route, Switch } from "react-router-dom";
import { Tabs } from "antd";
import FormBase from "./FormBase";
import { Agreements, Contacts } from "../../../components";
import FormAddNomenclature from "./FormAddNomenclature";
import { push } from "../../../actions/router";
import { fm } from "../../../helpers/locale";
import FormButton from "../../FormButton";
const { TabPane } = Tabs;

class FormEditItem extends React.Component {
  state = {
    activeKey: "base"
  };

  onClick = () => {
    const { updateOrganization } = this.props.actions;
    const { organization, baseUrl } = this.props;
    const { id } = organization;
    if (id) {
      updateOrganization(id, organization);
      push(`${baseUrl}`);
    } else {
      this.createOrganization();
    }
  };

  async createOrganization() {
    const { organization, actions } = this.props;
    await actions.createOrganization({
      ...organization
    });
    this.goToEdit();
  }

  goToEdit = () => {
    const { baseUrl, organization } = this.props;
    const { id } = organization;
    push(`${baseUrl}/${id}/edit/base`);
  };
  goToOrganization = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  editActiveKey = key => {
    const { organization, baseUrl } = this.props;
    this.setState({ activeKey: key });
    push(`${baseUrl}/${organization.id}/edit/${key}`);
  };

  render() {
    const { organization, baseUrl } = this.props;
    const { id } = organization;
    const activeKey = this.state.activeKey;
    const isNew = !id ? true : false;
    return (
      <Tabs
        onChange={this.editActiveKey}
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        type={"card"}
      >
        <TabPane tab={fm("label-base")} key="base">
          <Switch>
            <Route path={`${baseUrl}/new/base`}>
              <FormBase {...this.props} />
            </Route>
            <Route path={`${baseUrl}/:id/edit/base`}>
              <FormBase {...this.props} />
            </Route>
          </Switch>
          <FormButton isNew={isNew} clickOn={this.onClick} clickCancel={this.goToOrganization}/>
        </TabPane>
        <TabPane
          disabled={isNew}
          tab={fm("label-nomenclatures")}
          key="nomenclatures"
        >
          <Route path={`${baseUrl}/:id/edit/nomenclatures`}>
            <FormAddNomenclature {...this.props} />
          </Route>
          <FormButton isNew={isNew} clickOn={this.onClick} clickCancel={this.goToOrganization}/>
        </TabPane>
        <TabPane disabled={isNew} tab={fm("label-contacts")} key="contacts">
          <Route path={`${baseUrl}/:id/edit/contacts`}>
            <Contacts />
          </Route>
          <Route exact path={`${baseUrl}/:id/edit/contacts`}>
            <FormButton isNew={isNew} clickOn={this.onClick} clickCancel={this.goToOrganization}/>
          </Route>
        </TabPane>
        <TabPane disabled={isNew} tab={fm("label-agreements")} key="agreements">
          <Route path={`${baseUrl}/:id/edit/agreements`}>
            <Agreements />
          </Route>
          <Route exact path={`${baseUrl}/:id/edit/agreements`}>
            <FormButton isNew={isNew} clickOn={this.onClick} clickCancel={this.goToOrganization}/>
          </Route>
        </TabPane>
      </Tabs>
    );
  }
}

export default FormEditItem;
