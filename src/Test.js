import { Button, Col, Divider, Row } from "antd";
import React, { useState } from "react";

function Test() {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <div style={{ width: "100%" }}>
      <Divider orientation="left">Percentage columns</Divider>

      <Row>
        <Col flex="1 0 200px">
          <Button style={{ width: "100%" }} type="primary" shape="round">
            테스트1
          </Button>
        </Col>
        <Col flex="1 0 200px">
          <Button style={{ width: "100%" }} type="primary" shape="round">
            테스트1
          </Button>
        </Col>
        <Col flex="1 0 200px">
          <Button style={{ width: "100%" }} type="primary" shape="round">
            테스트1
          </Button>
        </Col>
        <Col flex="1 0 200px">
          <Button style={{ width: "100%" }} type="primary" shape="round">
            테스트1
          </Button>
        </Col>
        <Col flex="1 0 200px">
          <Button style={{ width: "100%" }} type="primary" shape="round">
            테스트1
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Test;
