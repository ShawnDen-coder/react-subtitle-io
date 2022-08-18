import "./App.less";
import { Col, Menu, Row } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const App = () => (
  <>
    <Row>
      <Col span={24}>
        <Menu mode="horizontal">
          <Menu.Item key={"home"} icon={<HomeOutlined />}>
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
      </Col>
    </Row>
  </>
);

export default App;
