import React, { useEffect } from "react";
import { Line } from "@reactchartjs/react-chart.js";

export const MultiLine = () => {
  useEffect(() => {
    // const ctx = document.getElementsByTagName("canvas");
    const cnv = document.querySelectorAll("canvas");
    let ctx = cnv[1].getContext("2d");

    // console.log(cnv[1].style.height.split(""));
    let gradientLine = ctx?.createLinearGradient(0, 0, 0, 420);
    gradientLine.addColorStop(0, "rgb(255, 0, 110, 0.2)");
    gradientLine.addColorStop(0.5, "rgb(255, 0, 110, 0.35)");
    gradientLine.addColorStop(1, "rgb(255, 0, 110, 0.7)");
  }, []);
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of No Votes",
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
      {
        label: "Votes",
        data: [3, 4, 0, 6, 1, 2],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-3",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          gridLines: {
            drawOnArea: false,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-3",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
