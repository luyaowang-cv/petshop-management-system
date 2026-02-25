"use client";

import { Tag } from "antd";
import type { TagProps } from "antd";

// 预约状态类型
export type AppointmentStatus = "PENDING" | "DONE" | "CANCELED";

// 状态配置
const statusConfig: Record<
  AppointmentStatus,
  { color: TagProps["color"]; text: string }
> = {
  PENDING: {
    color: "blue",
    text: "待处理",
  },
  DONE: {
    color: "green",
    text: "已完成",
  },
  CANCELED: {
    color: "red",
    text: "已取消",
  },
};

interface StatusTagProps {
  status: AppointmentStatus;
  style?: React.CSSProperties;
}

export function StatusTag({ status, style }: StatusTagProps) {
  const config = statusConfig[status] || statusConfig.PENDING;

  return (
    <Tag color={config.color} style={style}>
      {config.text}
    </Tag>
  );
}

// 导出状态配置供其他组件使用
export { statusConfig };
