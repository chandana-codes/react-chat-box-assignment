import { useState } from "react";

import "./styles.css";

function ChatMessageInput() {
  const [inputMessage, setInputMessage] = useState();
  const onChange = (e) => {
    setInputMessage(e.target.value);
  };
  return (
    <div className="message-input-container">
      <input
        type="text"
        placeholder="Type a message..."
        className="message-input"
        value={inputMessage}
        onChange={onChange}
      />
      {/* TOOD: Render emoji picker */}
    </div>
  );
}

export default ChatMessageInput;
