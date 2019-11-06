import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import messages from "../locales";

const mapStateToProps = state => {
  const lang = state.authentication.user.language;
  return {
    locale: lang,
    key: lang,
    messages: messages[lang],
    textComponent: React.Fragment
  };
};

export default connect(mapStateToProps)(IntlProvider);
