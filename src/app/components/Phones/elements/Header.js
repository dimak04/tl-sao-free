import React from "react";
import { Button, Input } from "antd";
import { push } from "../../../actions/router";
const { Search } = Input;

function Header(props) {
  const { search, searchItem, baseUrl } = props;
  return (
    <>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          push(`${baseUrl}/new`);
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
    </>
  );
}

export default Header;
