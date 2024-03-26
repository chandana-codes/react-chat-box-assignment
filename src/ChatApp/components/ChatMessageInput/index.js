import OutsideClickHandler from "react-outside-click-handler";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef } from "react";
import "./styles.css";
import MentionUserList from "../MentionUserList";
import { usersList } from "../../constants/users";

function ChatMessageInput({
  onChange,
  inputMessage,
  showEmojiPicker,
  onClickEmojiPicker,
  onOutsideClick,
}) {
  const [showMentions, setShowMentions] = useState(false);
  const inputRef = useRef(null);

  const onEmojiClick = ({ emoji }) => {
    const newMessage = inputMessage + emoji;
    onChange(newMessage);
  };

  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  const onClickUser = (user) => {
    const newMessage = inputMessage + user + " ";
    onChange(newMessage);
    setShowMentions(false);
    inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    // console.log(e.key);
    if (e.key === "@") {
      setShowMentions(true);
    } else if (
      ["Backspace", "Enter"].includes(e.key) &&
      inputMessage.endsWith("@")
    ) {
      setShowMentions(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <EmojiPicker
        open={showEmojiPicker}
        autoFocusSearch={false}
        className="emoji-picker"
        onEmojiClick={onEmojiClick}
      />
      {showMentions ? (
        <MentionUserList users={usersList} onClickUser={onClickUser} />
      ) : null}
      <div className="message-input-container">
        <input
          type="text"
          ref={inputRef}
          placeholder="Type a message..."
          className="message-input"
          value={inputMessage}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
        />
        <div className="emoji-picker-trigger" onClick={onClickEmojiPicker}>
          <span>&#128512; </span>
        </div>
      </div>
    </OutsideClickHandler>
  );
}

export default ChatMessageInput;
