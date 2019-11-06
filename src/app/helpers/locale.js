import React from "react";
import {addLocaleData, FormattedMessage } from "react-intl";
import * as en from "react-intl/locale-data/en";
import * as ru from "react-intl/locale-data/ru";
import defaultMessage from "../locales/ru";
export const addLocalesDate = () => {
  addLocaleData(en);
  addLocaleData(ru);
};

export const fm = (value, variable = "") => {
  return (
      <FormattedMessage
          id={value}
          defaultMessage={defaultMessage[value]}
          values={{ value: variable }}
      />
  );
};
