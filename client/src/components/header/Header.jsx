import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import imges from "../../assets/login_illustration.gif"

const Header = () => {
  return (
    <div className="headerc">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div className="profile">
        <NotificationsIcon className="notification-icon" />
        <img src={imges} alt="Profile" className="profile-image" />
        <span className="profile-name">zozer</span>
      </div>
    </div>
  );
};

export default Header;
