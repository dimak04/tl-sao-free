import _ from "lodash";
import request from "superagent";

import { API_CALL, API_ROOT } from "../constants/api";
import authHeader from "../helpers/auth-header";

function APICall({ endpoint, method, query, payload, ContentType }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);
    r.set(authHeader());
    if (query) r.query(JSON.stringify(query));
    if (ContentType) r.set("Content-Type", "application/json");
    if (payload) r = r.send(payload);
    r.end((error, data) => (error ? reject(error) : resolve(data)));
  });
}

const nextAction = (action, data) => {
  return _.assign({}, action, data, {
    [API_CALL]: undefined,
    actionParams: action[API_CALL].actionParams
  });
};

export default store => next => action => {
  if (!action[API_CALL]) return next(action);
  const [requestType, successType, failureType] = action[API_CALL].types;
  next(
      nextAction(action, {
        type: requestType
      })
  );

  const promise = APICall(
      _.pick(action[API_CALL], [
        "endpoint",
        "method",
        "query",
        "payload",
        "ContentType"
      ])
  );
  promise.then(
      response => next(nextAction(action, { response, type: successType })),
      error => next(nextAction(action, { error, type: failureType }))
  );

  return promise;
};
