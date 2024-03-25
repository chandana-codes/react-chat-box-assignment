import ChatMessageInput from "../ChatMessageInput";
import ChatThreadHeader from "../ChatThreadHeader";
import ChatThreadMessages from "../ChatThreadMessages";
import Divider from "../Divider";
import "./styles.css";

function ChatThreadContianer({ threadName, messages }) {
  return (
    <div className="thread-container">
      <ChatThreadHeader threadName={threadName} />
      <Divider />
      <ChatThreadMessages messages={messages} />
      <ChatMessageInput />
    </div>
  );
}

export default ChatThreadContianer;
