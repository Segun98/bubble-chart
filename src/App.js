import React from "react";
import "./App.css";
import BubbleChart from "./components/Bubble";
import { MultiLine } from "./components/Examples/MultiLine";
import { RadarExample } from "./components/Examples/Radar";
import { PolarExample } from "./components/Examples/PolarExample";

function App() {
  return (
    <div>
      <BubbleChart />

      <br />
      <br />
      <div className="align">
        <MultiLine />
      </div>

      <div className="align">
        <RadarExample />
      </div>

      <div className="align">
        <PolarExample />
      </div>
    </div>
  );
}

export default App;
