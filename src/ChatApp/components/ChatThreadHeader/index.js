import "./styles.css";

function ChatThreadHeader({ threadName }) {
  return (
    <div className="thread-header">
      <div className="thread-name-container">
        <h4 className="thread-name">{threadName}</h4>
        <p className="thread-description">
          This Channel is for Company Wide Chatter
        </p>
      </div>
      {/* TODO: show people/message count */}
    </div>
  );
}

export default ChatThreadHeader;
