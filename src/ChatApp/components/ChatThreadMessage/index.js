import { format } from "date-fns";
import UserAvatar from "../UserAvatar";

import "./styles.css";

function ChatThreadMessage({ message }) {
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
        <div className="message-content">{message.messageContent}</div>
      </div>
    </div>
  );
}

export default ChatThreadMessage;
