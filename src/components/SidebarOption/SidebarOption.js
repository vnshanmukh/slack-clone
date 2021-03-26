import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../../Firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const ChannelName = prompt("please enter Channel Name");
    if (ChannelName) {
      db.collection("rooms").add({
        name: ChannelName,
      });
    }
  };

  return (
    <div
      className="sidebaroption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption__channel">
          <span className="siderbaroption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
