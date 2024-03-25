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
        {
          threadId: "1",
          messageId: "4",
          senderName: "PubNub Bot",
          messageContent: "Welcome to the club Ruby. We are all doing great!",
          events: {
            sentAt: new Date(),
            deliveredAt: new Date(),
          },
        },
        {
          threadId: "1",
          messageId: "5",
          senderName: "Alice Bob",
          messageContent:
            "Hey ya! Excited to be here. Hope everyone has a great weekend. Happy Monday.",
          events: {
            sentAt: new Date(),
            deliveredAt: new Date(),
          },
        },
        {
          threadId: "1",
          messageId: "6",
          senderName: "Ruby",
          messageContent:
            "What's up team? Looks like everyone is on 🔥. Have you guys watched IPL matches?",
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
