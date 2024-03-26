import { useState } from "react";
import ChatMessageInput from "../ChatMessageInput";
import ChatThreadHeader from "../ChatThreadHeader";
import ChatThreadMessages from "../ChatThreadMessages";
import Divider from "../Divider";
import "./styles.css";
import { usersList } from "../../constants/users";

// copied from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomSender() {
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
    likesCount: 0,
  };
}

function ChatThreadContianer({ threadName }) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onClickEmojiPicker = () => {
    setShowEmojiPicker((prevValue) => !prevValue);
  };

  const onOutsideClick = () => {
    setShowEmojiPicker(false);
  };

  const onNewMessage = (newMessage) => {
    const updatedMessagesList = [newMessage, ...messages];
    setMessages(updatedMessagesList);
  };

  const onChange = (messageValue) => {
    setInputMessage(messageValue);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const validatedInputMessage = inputMessage.trim();
      if (validatedInputMessage.length > 0) {
        const newMessage = createNewMessage(inputMessage);
        console.log("newMessage", newMessage);
        onNewMessage(newMessage);
        onChange("");
        setShowEmojiPicker(false);
      }
    }
  };

  const onClickLike = (messageId) => {
    const updatedMessagesList = messages.map((message) => {
      if (messageId === message.messageId) {
        return { ...message, likesCount: message.likesCount + 1 };
      }
      return message;
    });
    setMessages(updatedMessagesList);
  };

  return (
    <div className="thread-container" onKeyDown={onKeyDown} tabIndex="0">
      <ChatThreadHeader threadName={threadName} />
      <Divider />
      <ChatThreadMessages messages={messages} onClickLike={onClickLike} />
      <ChatMessageInput
        onChange={onChange}
        inputMessage={inputMessage}
        showEmojiPicker={showEmojiPicker}
        onClickEmojiPicker={onClickEmojiPicker}
        onOutsideClick={onOutsideClick}
      />
    </div>
  );
}

export default ChatThreadContianer;
