import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React from "react";

const { Dragger } = Upload;

export const DraggerUpload = ({ action }) => {
  return (
    <Dragger {...action}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽文件完成上传</p>
    </Dragger>
  );
};
