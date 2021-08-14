import React from "react";
import Projects from "./Projects";
import Development from "./Development";
import Shades from "./Shades";
import Illustrations from "./Illustrations";

export default function Content() {
  return (
    <div className="Contents">
      <div className="l-content">
        {/* Projects component */}
        <Projects />

        {/* Shades Component */}
        <Shades />
      </div>

      <div className="r-content">
        {/* Illustrations component */}
        <Illustrations />

        {/* Development component */}
        <Development />
      </div>
    </div>
  );
}
