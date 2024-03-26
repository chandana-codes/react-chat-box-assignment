import ChatThreadMessage from "../ChatThreadMessage";

import "./styles.css";

function ChatThreadMessages({ messages, onClickLike }) {
  return (
    <div className="messages-container">
      {messages.map((message) => (
        <ChatThreadMessage
          key={message.messageId}
          message={message}
          onClickLike={onClickLike}
        />
      ))}
    </div>
  );
}

export default ChatThreadMessages;
