import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ProjectsData } from "./ProjectsData";

export default function Projects() {
  return (
    <div className="contentsCard borderCard">
      <h6>Projects</h6>
      <div className="projectProgress">
        {ProjectsData.map((ele) => {
          return (
            <div key={ele.id}>
              <div className="info">
                <p>{ele.name}</p>
                <p className="percent">
                  {ele.percentage === 100 ? "Completed!" : ele.percentage + "%"}
                </p>
              </div>
              <ProgressBar variant={ele.variant} now={ele.percentage} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
