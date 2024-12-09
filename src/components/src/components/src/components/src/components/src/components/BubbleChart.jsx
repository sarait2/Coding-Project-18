import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ expenses, profits, sales }) => {
  const data = {
    datasets: [
      {
        label: "Combined Metrics",
        data: expenses.map((expense, index) => ({
          x: expense,
          y: profits[index],
          r: sales[index] / 10,
        })),
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };

  return <ChartComponent type="bubble" data={data} />;
};

export default BubbleChart;
