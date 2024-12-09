import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({ labels, sales }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Sales",
        data: sales,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return <ChartComponent type="bar" data={data} />;
};

export default BarChart;
