import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import db from "../../Firebase";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./Sidebar.css";
function Sidebar() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
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
      <SidebarOption Icon={InsertComment} title="Threads" />
      {/* <SidebarOption title="Youtube" /> */}
      <SidebarOption Icon={Inbox} title="Mentions" />
      <SidebarOption Icon={BookmarkBorder} title=" Saved Items" />

      <SidebarOption Icon={PeopleAlt} title="People" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="channels" />

      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add channel" />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
