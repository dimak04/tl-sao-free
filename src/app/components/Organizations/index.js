import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { New, ShowAll, Edit } from "../../containers/Organizations";

function Organizations() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <ShowAll baseUrl={url} />
      </Route>
      <Route path={`${path}/new/base`}>
        <New baseUrl={url} />
      </Route>
      <Route path={`${path}/:id/edit`}>
        <Edit baseUrl={url} />
      </Route>
    </Switch>
  );
}

export default Organizations;
