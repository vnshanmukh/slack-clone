import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Team </h2>
          <h3>
            <FiberManualRecord />
            shanmukh
          </h3>
        </div>
        <Create />
      </div>
    </div>
  );
}

export default Sidebar;
