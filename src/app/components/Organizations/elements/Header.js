import React from "react";
import { Button, Input, Select } from "antd";
import uuid from "uuid";
import { push } from "../../../actions/router";
import {fm} from "../../../helpers/locale";
const { Search } = Input;

function Header(props) {
  const { search, searchItem, baseUrl, filter, types, setFilter } = props;
  return (
    <>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            push(`${baseUrl}/new/base`);
          }}
          icon="plus"
        />
        <Search
          size="small"
          value={searchItem}
          placeholder="input search text"
          allowClear
          onSearch={search}
          onChange={e => {
            search(e.target.value);
          }}
          style={{ width: 250, marginLeft: 5 }}
        />
        <Select
            size="small"
            name="typeOrganizationId"
            onChange={value => {
              setFilter("typeOrganizationId", value);
            }}
            defaultValue={-1}
            value={filter.typeOrganizationId}
            style={{ width: 250, marginLeft: 5 }}
        >
          <Select.Option key={uuid.v4()} value={-1}>
            {fm("label-all")}
          </Select.Option>
          {types.map(type => (
              <Select.Option key={uuid.v4()} value={type.value}>
                {type.label}
              </Select.Option>
          ))}
        </Select>
      </>
  );
}

export default Header;
