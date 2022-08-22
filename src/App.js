import "./App.less";

import { Nav } from "./layOut";
import { SubListScreen } from "./subList/subListScreen";
import { Col, Row } from "antd";

const App = () => (
  <>
    <Nav />
    <Row>
      <Col span={14} offset={5}>
        <SubListScreen />
      </Col>
    </Row>
  </>
);

export default App;
