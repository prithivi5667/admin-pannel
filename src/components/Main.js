import React, { useState } from "react";
import TabPane from "./TabPane";
import NavBar from "./NavBar";
import DashboardGist from "./DashboardGist";
import Footer from "./Footer";
import Content from "./Content";

export default function Main() {
  const [tab, setTab] = useState("");

  return (
    <div className="w-row">
      {/* Left Navbar Tab */}
      <div className="l-tab" style={{ display: tab }}>
        <TabPane />
      </div>

      {/* Right Content Tab */}
      <div className="r-tab">
        {/* Navbar on Top */}
        <NavBar tab={tab} setTab={setTab} />

        {/* Page Header */}
        <h2 className="pageHeader">Dashboard</h2>

        {/* Gist Component on top */}
        <DashboardGist />

        {/* Content component */}
        <Content />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
