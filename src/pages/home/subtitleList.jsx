import { List, Checkbox } from "antd";
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  ItalicOutlined,
  BoldOutlined,
  ColumnHeightOutlined,
  SortDescendingOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";

const SubtitleRow = ({ text }) => {
  const [rowStyle, setRowStyle] = useState({
    margin: "auto",
  });
  const onMouseEnter = () => {
    setRowStyle({ ...rowStyle, color: "blue" });
  };
  const onMouseLeve = () => {
    setRowStyle({ ...rowStyle, color: "" });
  };

  return (
    <List.Item
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeve}
      style={rowStyle}
    >
      <div>
        <Checkbox />
      </div>
      <div style={rowStyle}>{text}</div>
    </List.Item>
  );
};

const SubtitleListEdit = () => {
  const iconsList = [
    <SortDescendingOutlined />,
    <SortAscendingOutlined />,
    <AlignCenterOutlined />,
    <AlignLeftOutlined />,
    <AlignRightOutlined />,
    <ItalicOutlined />,
    <BoldOutlined />,
    <ColumnHeightOutlined />,
  ];

  return (
    <>
      {iconsList.map((item) => (
        <SubtitleListEditStyle>{item}</SubtitleListEditStyle>
      ))}
    </>
  );
};

const SubtitleListHeader = () => {
  return (
    <SubtitleListHeaderStyle>
      <SubtitleListEdit />
    </SubtitleListHeaderStyle>
  );
};

export const SubtitleList = ({ rows }) => {
  return (
    <List
      header={<SubtitleListHeader />}
      pagination="true"
      bordered
      dataSource={rows}
      size="large"
      renderItem={(item) => <>{<SubtitleRow text={item} />}</>}
    />
  );
};

const SubtitleListHeaderStyle = styled.div`
  display: inline;
`;

const SubtitleListEditStyle = styled(SubtitleListHeaderStyle)`
  padding: 8px 8px;
`;
