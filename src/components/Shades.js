import React from "react";
import { ShadesData } from "./ShadesData";

export default function Shades() {
  return (
    <div className="gistFlex">
      {ShadesData.map((ele) => {
        return (
          <div
            key={ele.id}
            className="shades borderCard"
            style={{ backgroundColor: `#${ele.color}` }}
          >
            <h6
              style={{
                marginBottom: "0",
                color: ele.color === "f8f9fc" ? "#858796" : "",
              }}
            >
              {ele.name}
            </h6>
            <p
              style={{
                marginBottom: "0",
                color: ele.color === "f8f9fc" ? "#00000080" : "",
              }}
            >
              #{ele.color}
            </p>
          </div>
        );
      })}
    </div>
  );
}
