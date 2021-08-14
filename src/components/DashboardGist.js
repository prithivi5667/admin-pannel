import React from "react";
import { DashboardData } from "./DashboardData";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";

export default function DashboardGist() {
  return (
    <div className="gistFlex">
      {DashboardData.map((ele) => {
        return (
          //  Dashboard Gist Components
          <div
            key={ele.id}
            className="gist borderCard"
            style={{ borderLeft: `4px solid #${ele.color}` }}
          >
            <div style={{ width: "100%" }}>
              <p style={{ color: `#${ele.color}` }}>{ele.name}</p>
              <div className="task">
                <h4>{ele.name === "Tasks" ? ele.data + "%" : ele.data}</h4>

                {/* Progress Bar only for tasks component */}
                {ele.name === "Tasks" ? (
                  <ProgressBar
                    variant="info"
                    now={ele.data}
                    style={{
                      width: "70%",
                      margin: "0 1rem",
                      height: "0.5rem",
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Icons for each components */}
            {ele.icon === "FaCalendar" ? (
              <FaCalendar className="dashIcon" />
            ) : ele.icon === "FaDollarSign" ? (
              <FaDollarSign className="dashIcon" />
            ) : ele.icon === "FaClipboardList" ? (
              <FaClipboardList className="dashIcon" />
            ) : (
              <FaComments className="dashIcon" />
            )}
          </div>
        );
      })}
    </div>
  );
}
