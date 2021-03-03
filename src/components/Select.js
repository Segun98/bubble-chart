import React from "react";
import { Metrics } from "./Metrics";

export const Select = ({
  dataRegion,
  setRegion,
  region,
  dataSector,
  setSector,
  sector,
}) => {
  return (
    <section className="form">
      <div className="form-item">
        <p>Choose a Region</p>
        <br />
        <select
          aria-label="Choose a Region"
          id="region"
          defaultValue={dataRegion}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <option defaultValue="">--select--</option>
          {region.map((c, i) => (
            <option key={i} defaultValue={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-item">
        <p>Choose a Sector</p>
        <br />
        <select
          aria-label="Choose a Sector"
          id="sector"
          defaultValue={dataSector}
          onChange={(e) => {
            setSector(e.target.value);
          }}
        >
          <option defaultValue="">--select--</option>
          {sector.map((c, i) => (
            <option key={i} defaultValue={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <Metrics />
    </section>
  );
};
