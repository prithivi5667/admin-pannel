import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { GoBell } from "react-icons/go";
import Badge from "@material-ui/core/Badge";

export default function NavBar({ tab, setTab }) {
  const [search, setSearch] = useState("");

  const showTab = () => {
    if (tab === "block") {
      setTab("");
    } else {
      setTab("block");
    }
  };

  //   Hiding and unhiding th search bar on responsive view
  const showSearch = () => {
    if (search === "flex") {
      setSearch("");
    } else {
      setSearch("flex");
    }
  };
  return (
    <div className="navTop">
      {/* The responsive l-tab button */}
      <GiHamburgerMenu className="ham" onClick={() => showTab()} />

      {/* Search Bar */}
      <div className="searchBar" style={{ display: search }}>
        <input className="search" type="text" placeholder="Search for..." />
        <div className="searchIcon">
          <FaSearch />
        </div>
      </div>

      {/* Alert Icons */}
      <div className="alert" style={{ marginBottom: "0" }}>
        <Badge className="alertBdg" onClick={() => showSearch()}>
          <FaSearch className="alertIcon s-icon" />
        </Badge>
        <Badge badgeContent={"3+"} color="error" className="alertBdg">
          <MdEmail className="s-icon" />
        </Badge>
        <Badge badgeContent={7} color="error" className="alertBdg">
          <GoBell className="s-icon" />
        </Badge>
        <Badge className="alertBdg">
          <p>|</p>
        </Badge>
        <Badge className="alertBdg" style={{ marginLeft: "0" }}>
          <p className="u-name">Profile</p>
          <div className="circle">
            <img src="/images/undraw_profile.svg" alt="profilepic" />
          </div>
        </Badge>
      </div>
    </div>
  );
}
