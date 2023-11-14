import { Space, Spin } from "antd";

import React, { useState } from "react";

import styled from "styled-components";

const PageCustomComponent = (prop: any) => {
  return (
    <TableCustomStyle>
      <div className="spin">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </TableCustomStyle>
  );
};

export default PageCustomComponent;

const TableCustomStyle = styled.div`
  background-color: #ffffff;
  .spin {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
  }
`;
