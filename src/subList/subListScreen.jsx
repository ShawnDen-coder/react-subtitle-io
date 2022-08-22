import React from "react";
import { List } from "antd";
import { InputFile } from "./inputFile";

export const SubListScreen = () => {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <>
      <InputFile />
      <List
        bordered="true"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="123"
            />
          </List.Item>
        )}
      />
    </>
  );
};
