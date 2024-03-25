import ChatThreadContianer from "./components/ChatThreadContianer";

function ChatApp() {
  return (
    <ChatThreadContianer
      threadName="Introductions"
      messages={[
        {
          threadId: "1",
          messageId: "1",
          senderName: "PubNub Bot",
          messageContent: "Welcome to the chat 👋",
          events: {
            sentAt: new Date(),
            deliveredAt: new Date(),
          },
        },
        {
          threadId: "1",
          messageId: "2",
          senderName: "Alan",
          messageContent: "Hey! Hi",
          events: {
            sentAt: new Date(),
            deliveredAt: new Date(),
          },
        },
        {
          threadId: "1",
          messageId: "3",
          senderName: "Ruby",
          messageContent: "Hello all. How are you?",
          events: {
            sentAt: new Date(),
            deliveredAt: new Date(),
          },
        },
      ]}
    />
  );
}

export default ChatApp;
