import React from "react";
import dragIcon from "../assets/menu-grid-o.svg";

export const Metrics = () => {
  //drag and drop html api.
  const drag = (e) => {
    e.dataTransfer.setData("id", e.target.id);
  };

  return (
    <div className="metrics">
      <h4>Metrics</h4>
      <small>Drag and drop onto the X-Axis, Y-Axis, Color and size</small>
      <br />
      <small style={{ color: "saddlebrown" }}>
        *Note: drop on a blank space in the lightblue box
      </small>
      <div className="tabs">
        <div id="ebidta" draggable="true" onDragStart={drag}>
          <img draggable="false" src={dragIcon} alt="drag icon" />
          <p>EBITDA</p>
        </div>
        <div id="debt_to_equity" draggable="true" onDragStart={drag}>
          <img draggable="false" src={dragIcon} alt="drag icon" />
          <p>Debt-To-Equity Ratio</p>
        </div>
        <div id="costs" draggable="true" onDragStart={drag}>
          <img draggable="false" src={dragIcon} alt="drag icon" />
          <p>Costs</p>
        </div>
        <div
          id="qualified_marketing_traffic"
          draggable="true"
          onDragStart={drag}
        >
          <img draggable="false" src={dragIcon} alt="drag icon" />

          <p>Qualified Marketing Traffic</p>
        </div>
        <div id="debt_ratio" draggable="true" onDragStart={drag}>
          <img draggable="false" src={dragIcon} alt="drag icon" />

          <p>Debt Ratio</p>
        </div>
        <div id="customer_lifetime_value" draggable="true" onDragStart={drag}>
          <img draggable="false" src={dragIcon} alt="drag icon" />

          <p>Customer Lifetime Value</p>
        </div>
        <div id="customer_churn" draggable="true" onDragStart={drag}>
          <img draggable="false" src={dragIcon} alt="drag icon" />

          <p>Customer Churn</p>
        </div>
      </div>
    </div>
  );
};
