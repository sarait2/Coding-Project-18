import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ labels, profits }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Profits",
        data: profits,
        borderColor: "rgba(54, 162, 235, 0.8)",
        fill: false,
      },
    ],
  };

  return <ChartComponent type="line" data={data} />;
};

export default LineChart;
