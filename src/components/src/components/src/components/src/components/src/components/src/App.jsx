import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Interactive Dashboard</h1>
      <BarChart labels={data.months} sales={data.sales} />
      <LineChart labels={data.months} profits={data.profits} />
      <ScatterChart expenses={data.expenses} profits={data.profits} />
      <BubbleChart expenses={data.expenses} profits={data.profits} sales={data.sales} />
    </div>
  );
};

export default App;
