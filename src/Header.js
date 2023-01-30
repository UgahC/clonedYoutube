import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Ugah Chibuike"
          src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/318179842_692810128952545_2452947117653048730_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9Akjgvrc_neuo6FOQhB-zzATr7apV_fbMBOvtqlX99mbhKyNlmf9o-JI_yxD_VKT6Ojwr2VJDiE0AIpEXhkOF&_nc_ohc=xaxrAr5g1PwAX_DCUHg&_nc_ht=scontent-los2-1.xx&oh=00_AfAbPEyDKZYB58OUdqZdDLWHON-Fk_6eewm6dHAimLsonA&oe=63D680E6"
        />
      </div>
    </div>
  );
}

export default Header;
