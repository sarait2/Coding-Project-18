import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ expenses, profits }) => {
  const data = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: expenses.map((expense, index) => ({
          x: expense,
          y: profits[index],
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <ChartComponent type="scatter" data={data} />;
};

export default ScatterChart;
