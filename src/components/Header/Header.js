import React from "react";
import { Avatar } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { QueryBuilder } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar alt="logo" className="header__avatar" />
        <QueryBuilder />
      </div>
      <div className="header__search">
        <Search />
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
