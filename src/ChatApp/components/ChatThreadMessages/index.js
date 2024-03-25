import ChatThreadMessage from "../ChatThreadMessage";

import "./styles.css";

function ChatThreadMessages({ messages }) {
  return (
    <div className="messages-container">
      {messages.map((message) => (
        <ChatThreadMessage key={message.messageId} message={message} />
      ))}
    </div>
  );
}

export default ChatThreadMessages;
