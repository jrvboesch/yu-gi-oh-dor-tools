import React from "react";
import {
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";

type Props = {
  src?: string;
  alt?: string;
  width?: number;
};

const CardImage = ({ src, alt, width }: Props) => {
  return (
    <Image
      width={width}
      src={`${process.env.PUBLIC_URL}${src}`}
      alt={alt}
      preview={{
        toolbarRender: (
          _,
          { transform: { scale }, actions: { onZoomOut, onZoomIn, onReset } }
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
            <UndoOutlined onClick={onReset} />
          </Space>
        ),
      }}
    />
  );
};

export default CardImage;
