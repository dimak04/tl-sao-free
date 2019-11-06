import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { New, ShowAll, Edit } from "../../containers/TypeOfDeliveries";

function TypeOfDeliveries() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <ShowAll baseUrl={url} />
      </Route>
      <Route path={`${path}/new`}>
        <New baseUrl={url} />
      </Route>
      <Route path={`${path}/:id/edit`}>
        <Edit baseUrl={url} />
      </Route>
    </Switch>
  );
}

export default TypeOfDeliveries;
