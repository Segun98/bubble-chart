import React from "react";
import { Scatter } from "@reactchartjs/react-chart.js";

// const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: "A dataset",
      data: [
        { x: 11.6, y: 21.5, r: 25 },
        { x: 11.5, y: 21.6, r: 25 },
        { x: 0.5, y: 15, r: 25 },
        { x: 6, y: 13, r: 25 },
        { x: 9, y: 20, r: 25 },
        { x: 3, y: 21.6, r: 25 },
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ScatterChart = () => (
  <>
    <Scatter data={data} options={options} />
  </>
);

export default ScatterChart;
