import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Layout } from "antd";
import {
  Agreements,
  Contacts,
  GroupNomenclatures,
  Nomenclatures,
  Organizations,
  Phones,
  Positions,
  TypeOfAgreements,
  TypeOfDeliveries,
  TypeOfOrganizations
} from "../";
import LeftMenu from "../../containers/Settings/LeftMenu";
const { Content } = Layout;

function Settings() {
  const { path } = useRouteMatch();
  return (
    <>
      <LeftMenu />
      <Content className="content">
        <Switch>
          <Route path={`${path}/group-nomenclatures`}>
            <GroupNomenclatures />
          </Route>
          <Route path={`${path}/nomenclatures`}>
            <Nomenclatures />
          </Route>
          <Route path={`${path}/positions`}>
            <Positions />
          </Route>
          <Route path={`${path}/agreements`}>
            <Agreements />
          </Route>
          <Route path={`${path}/type-of-agreements`}>
            <TypeOfAgreements />
          </Route>
          <Route path={`${path}/type-of-deliveries`}>
            <TypeOfDeliveries />
          </Route>
          <Route path={`${path}/organizations`}>
            <Organizations />
          </Route>
          <Route path={`${path}/type-of-organizations`}>
            <TypeOfOrganizations />
          </Route>
          <Route path={`${path}/phones`}>
            <Phones />
          </Route>
          <Route path={`${path}/contacts`}>
            <Contacts />
          </Route>
        </Switch>
      </Content>
    </>
  );
}

export default Settings;
