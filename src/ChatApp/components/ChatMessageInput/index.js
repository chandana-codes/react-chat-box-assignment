import { useState } from "react";

import "./styles.css";

// copied from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomSender() {
  const usersList = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const randomIndex = getRandomInt(0, usersList.length - 1);
  return usersList[randomIndex] ?? usersList[0];
}

function createNewMessage(messageContent) {
  return {
    threadId: "1",
    messageId: Date.now(),
    events: {
      sentAt: new Date(),
    },
    messageContent,
    senderName: pickRandomSender(),
  };
}

function ChatMessageInput({ onEnter }) {
  const [inputMessage, setInputMessage] = useState("");
  const onChange = (e) => {
    setInputMessage(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const validatedInputMessage = inputMessage.trim();
      if (validatedInputMessage.length > 0) {
        const newMessage = createNewMessage(inputMessage);
        console.log("newMessage", newMessage);
        onEnter(newMessage);
        setInputMessage("");
      }
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        placeholder="Type a message..."
        className="message-input"
        value={inputMessage}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {/* TOOD: Render emoji picker */}
    </div>
  );
}

export default ChatMessageInput;
