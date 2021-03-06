import React from "react";
import { readableName } from "../utils/helpers";

export const ColorSize = React.memo(({ color, size, allowDrop, drop }) => {
  return (
    <section className="section-2">
      <div className="color" onDrop={drop} onDragOver={allowDrop}>
        <div>Color</div>
        <div className="inner-flex-1">
          <h5>{readableName(color)}</h5>
          <div>
            <div className="range">
              <div style={{ backgroundColor: "moccasin" }}></div>
              <div style={{ backgroundColor: "saddlebrown" }}></div>
              <div style={{ backgroundColor: "lightpink" }}></div>
              <div style={{ backgroundColor: "rgba(75, 192, 192)" }}></div>
              <div style={{ backgroundColor: "rgba(75, 192, 192, 0.4)" }}></div>
            </div>
            <div className="inner-flex-2">
              <div>Low</div>
              <div>High</div>
            </div>
          </div>
        </div>
      </div>

      <div className="size" onDrop={drop} onDragOver={allowDrop}>
        <div>Size</div>
        <div className="inner-flex-3">
          <h5>{readableName(size)}</h5>
          <div className="inner-flex-4">
            <div>
              <div className="bubble first"></div>
              <span>250</span>
            </div>
            <div>
              <div className="bubble second"></div>
              <span>500</span>
            </div>
            <div>
              <div className="bubble third"></div>
              <span>750</span>
            </div>
            <div>
              <div className="bubble fourth"></div>
              <span>1000</span>
            </div>
            <div>
              <div className="bubble fifth"></div>
              <span>1250</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
