import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../../Firebase";
import Message from "../Message/Message";
import ChatInput from "../ChatInput/ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomdetails, setroomDetails] = React.useState(null);
  const [roommessages, setroomMessages] = React.useState([]);
  React.useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setroomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerleft">
          <h4 className="chat__channelname">
            <strong>#{roomdetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerright">
          <InfoOutlined />
          Details
        </div>
      </div>
      <div className="chat__messages">
        {roommessages.map((message) => (
          <Message
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            userImage={message.userimage}
          />
        ))}
      </div>
      <div key={roomId} className="chat__input">
        <ChatInput channelName={roomdetails?.name} channelId={roomId} />
      </div>
    </div>
  );
}

export default Chat;
