import { useState } from "react";

import ChatMessageInput from "../ChatMessageInput";
import ChatThreadHeader from "../ChatThreadHeader";
import ChatThreadMessages from "../ChatThreadMessages";
import Divider from "../Divider";
import "./styles.css";

function ChatThreadContianer({ threadName }) {
  const [messages, setMessages] = useState([]);

  const onNewMessage = (newMessage) => {
    const updatedMessagesList = [newMessage, ...messages];
    setMessages(updatedMessagesList);
  };

  return (
    <div className="thread-container">
      <ChatThreadHeader threadName={threadName} />
      <Divider />
      <ChatThreadMessages messages={messages} />
      <ChatMessageInput onEnter={onNewMessage} />
    </div>
  );
}

export default ChatThreadContianer;
