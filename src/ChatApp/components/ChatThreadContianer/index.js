import ChatThreadHeader from "../ChatThreadHeader";
import Divider from "../Divider";
import "./styles.css";

function ChatThreadContianer({ threadName, messages }) {
  return (
    <div className="thread-container">
      <ChatThreadHeader threadName={threadName} />
      <Divider />
    </div>
  );
}

export default ChatThreadContianer;
