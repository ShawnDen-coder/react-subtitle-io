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

  const [color, setColor] = useState([0, 0, 0, 0]);

  const onClick = () => {
    setColor([0, 0, 0, 0.2]);
    setTimeout(() => {
      setColor([0, 0, 0, 0]);
    }, 100);
  };

  return (
    <>
      {iconsList.map((item) => (
        <SubtitleListEditStyle color={color} onClick={onClick}>
          {item}
        </SubtitleListEditStyle>
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
  position: relative;
  left: 250px;
  display: inline;
`;

const SubtitleListEditStyle = styled(SubtitleListHeaderStyle)`
  background-color: rgba(
    ${(props) => {
      return (props.color += " ");
    }}
  );
  border-radius: 8px;
  padding: 8px 8px;
`;
