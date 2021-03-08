import React, { useState } from "react";
import { Bubble } from "react-chartjs-2";
import { chartData, region, sector } from "../utils/data";
import { others, readableName } from "../utils/helpers";
import { ColorSize } from "./ColorSize";
import { Select } from "./Select";
// import Chart from "chart.js";

function BubbleChart() {
  // Chart.defaults.global.legend.display = false;
  //select input states
  const [dataRegion, setRegion] = useState("Africa");
  const [dataSector, setSector] = useState("Agriculture");

  //dynamic x/y/color/size values
  const [xAxis, setxAxis] = useState("ebidta");
  const [yAxis, setYaxis] = useState("debt_to_equity");
  const [color, setColor] = useState("customer_lifetime_value");
  const [size, setSize] = useState("customer_churn");

  //filter data by region and sector as elected in the select input field
  let filteredData = chartData.filter(
    (f) => f.region === dataRegion && f.sector === dataSector
  );

  //sort by color. It's a helper for displaying data by color
  filteredData.sort((a, b) => a[color] - b[color]);

  //drag n drop
  function allowDrop(e) {
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";
  }

  // drop value is stored in useState
  function drop(e) {
    e.preventDefault();
    var data = e?.dataTransfer?.getData("id");

    if (e?.target?.className === "x-axis") {
      setxAxis(data);
    } else if (e?.target?.className === "y-axis") {
      setYaxis(data);
    } else if (e?.target?.className === "color") {
      setColor(data);
    } else if (e?.target?.className === "size") {
      setSize(data);
    }

    e.preventDefault();
  }

  //updated on hover of a bubble to get which index in the filteredData array is being hovered on
  const [lookupIndex, setLookupIndex] = useState(0);

  //chart options - SKIPPPPP
  const options = {
    // responsive: true,
    // maintainAspectRatio: false,
    legend: false,
    scales: {
      xAxes: [
        {
          // ticks: { display: false },
          gridLines: {
            // display: false,
            // drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            //  display: false,
            lineHeight: 1.8,
          },
          gridLines: {
            // display: false,
            // drawBorder: false,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          //this provides the index of the filtered data
          // console.log(tooltipItem);
          setLookupIndex(tooltipItem.index);
        },
      },
      // Disable the on-canvas tooltip
      enabled: false,
      custom: function (tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById("chartjs-tooltip");
        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-tooltip";
          tooltipEl.innerHTML = "<table></table>";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);

          var innerHtml = "<thead>";

          titleLines.forEach(function (title) {
            innerHtml += "<tr><th>" + title + "</th></tr>";
          });
          innerHtml += "</thead><tbody>";

          bodyLines.forEach(function (body, i) {
            innerHtml += `<tr><td style="font-weight:bold; padding-bottom:5px"> ${filteredData[lookupIndex]?.company}  </td></tr>`;
            innerHtml += `<tr><td style="display:flex; justify-content: space-between">
            <div>
            EBIDTA
            </div>
            <div style="margin-left:10px">
            ${filteredData[lookupIndex]?.ebidta.toFixed(2)}
            </div>
            </td></tr>`;
            innerHtml += `<tr><td style="display:flex; justify-content: space-between">
              <div>
              Costs
              </div>
              <div style="margin-left:10px">
              ${filteredData[lookupIndex]?.costs.toFixed(2)}
              </div>
              </td></tr>`;
            innerHtml += `<tr><td style="display:flex; justify-content: space-between">
            <div>
            Cust. Churn
            </div>
            <div style="margin-left:10px">
            ${filteredData[lookupIndex]?.customer_churn.toFixed(2)}
            </div>
            </td></tr>`;
            innerHtml += `<tr><td style="display:flex; justify-content: space-between">
            <div>
            Debt to Equity
            </div>
            <div style="margin-left:10px">
            ${filteredData[lookupIndex]?.debt_to_equity.toFixed(2)}
            </div>
            </td></tr>`;
            innerHtml += `<tr><td style="display:flex; justify-content: space-between">
            <div>
            CLV
            </div>
            <div style="margin-left:10px">
            ${filteredData[lookupIndex]?.customer_lifetime_value.toFixed(2)}
            </div>
            </td></tr>`;
            innerHtml += `<tr><td style="display:flex; justify-content: space-between">
            <div>
            Country
            </div>
            <div style="margin-left:10px">
            ${filteredData[lookupIndex]?.country}
            </div>
            </td></tr>`;
          });
          innerHtml += "</tbody>";

          var tableRoot = tooltipEl.querySelector("table");
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
          position.left + window.pageXOffset + tooltipModel.caretX + "px";
        tooltipEl.style.top =
          position.top + window.pageYOffset + tooltipModel.caretY + "px";
        // tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        // tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        // tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding =
          tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
        tooltipEl.style.pointerEvents = "none";
      },
    },
  };

  //set background colors to bubbles.
  function backgroundColors() {
    const colors = [
      "moccasin",
      "saddlebrown",
      "lightpink",
      "rgba(75, 192, 192)",
      "rgba(75, 192, 192, 0.4)",
      "rgba(75, 192, 192, 0.4)",
    ];

    //convert the values by which color is determined to 100%.
    //This returns an array of values summing up to 100%
    const totalData = filteredData.length;
    let sum = filteredData.reduce((a, c) => a + c[color], 0);
    let dataArr = filteredData.map((f) => {
      let conversion = (f[color] / sum) * 100;
      return Math.round(conversion);
    });

    // the idea here is to duplicate color array values and make them sum up to dataArr's length. eg. if i had colors blue, red and green and an array of 6 values, this should return an array with atleast 1 of each color summing up to six
    let recurring = Math.round(totalData / colors.length);
    let arr = [];
    let indexCount = 0;
    let recurringCount = 1;

    for (let i = 0; i < dataArr.length; i++) {
      arr.push(colors[indexCount]);

      //if current iteration has reached the highest number of times a color should be duplicated, reach to the next color by incrementing indexCount
      if (i === recurring * recurringCount) {
        indexCount += 1;
        recurringCount++;
      }
    }

    return arr.filter(Boolean);
  }

  // this returns array of objects expected by the chart library to determine x and y axis as well as radius: e.g {x:5, y:7, r:20}
  function getData() {
    let arr = [];

    let obj = {};
    for (let i = 0; i < filteredData.length; i++) {
      //x and y axis are according to drag n drop
      obj["x"] = filteredData[i][xAxis];
      obj["y"] = filteredData[i][yAxis];

      const sum = filteredData.reduce((a, c) => a + c[size], 0);
      //convert the costs to 100% and use as radius
      let radius = (filteredData[i][size] / sum) * 100;
      obj["r"] = (radius + 5).toFixed(2);

      arr.push(obj);
      obj = {};
    }
    return arr;
  }

  const data = {
    labels: ["x"],
    datasets: [
      {
        ...others,
        backgroundColor: backgroundColors(),
        data: getData(),
      },
    ],
  };

  return (
    <div className="wrap">
      <main>
        <section className="chart">
          <div className="y-axis-wrap">
            <div className="y-axis" onDrop={drop} onDragOver={allowDrop}>
              <div style={{ whiteSpace: "nowrap" }}>Y - Axis</div>
              <div style={{ whiteSpace: "nowrap" }}>{readableName(yAxis)}</div>
              <div></div>
            </div>
            <div style={{ width: "100%" }}>
              <Bubble data={data} options={options} />
            </div>
          </div>
          <div className="x-axis" onDrop={drop} onDragOver={allowDrop}>
            <div>X - Axis</div>
            <div>{readableName(xAxis)}</div>
            <div></div>
          </div>

          <ColorSize
            color={color}
            size={size}
            allowDrop={allowDrop}
            drop={drop}
          />
        </section>

        <Select
          dataRegion={dataRegion}
          setRegion={setRegion}
          region={region}
          dataSector={dataSector}
          setSector={setSector}
          sector={sector}
        />
      </main>
    </div>
  );
}

export default BubbleChart;
