import { format } from "date-fns";
// import EmojiPicker from "emoji-picker-react";
import UserAvatar from "../UserAvatar";

import "./styles.css";

function ChatThreadMessage({ message, onClickLike }) {
  return (
    <div className="thread-message">
      <UserAvatar name={message.senderName} />
      <div className="message-details">
        <div className="sender-name-time-info">
          <h4 className="sender-name">{message.senderName}</h4>
          <span className="message-sent-at">
            {format(message.events.sentAt, "HH:mm")}
          </span>
        </div>
        <div className="message-content-container">
          <div className="message-content">{message.messageContent}</div>
          <span
            className="like-button"
            onClick={() => {
              onClickLike(message.messageId);
            }}
          >
            👍🏻
          </span>
          {message.likesCount > 0 ? (
            <span className="like-count">{message.likesCount}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ChatThreadMessage;
