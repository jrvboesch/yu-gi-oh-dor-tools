import React from "react";
import { Pie, PieConfig } from "@ant-design/plots";

export type ChartData = {
  label: string;
  value: string | number;
};
type Props = {
  data: ChartData[];
  fill?: (value: ChartData) => string;
};
const CardTypePieChart = ({ data, fill }: Props) => {
  const customLabel = (_: any, datum: ChartData) => (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div>
        {datum.label} : <b>{datum.value}</b>
      </div>
    </div>
  );

  const config: PieConfig = {
    theme: "classicDark",
    data,
    angleField: "value",
    label: {
      text: "label",
      position: "outside",
      textAlign: "center",
      render: customLabel,
    },
    style: {
      fill,
    },
    tooltip: (d) => ({
      value: `${d.value} ${d.label} Cards`,
    }),
    legend: false,
  };
  return <Pie {...config} />;
};

export default CardTypePieChart;
