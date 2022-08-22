import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

export const Nav = () => {
  return (
    <StyledNav>
      <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.SubMenu
          key="SubMenu"
          title="Navigation Two - Submenu"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="two" icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>

          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  font-size: 50px;
  color: blue;
`;
