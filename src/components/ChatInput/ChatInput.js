import React from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import db from "../../Firebase";
import firebase from "firebase";

import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = React.useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatinput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
