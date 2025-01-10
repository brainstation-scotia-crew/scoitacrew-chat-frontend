import "./PageTwo.scss";
import MessageBubble from "../../components/MessageBubble/MessageBubble";
import MessageInput from "../../components/MessageInput/MessageInput";
import { useState } from "react";

function PageTwo() {
  const [messages, setMessages] = useState([
    { sender: "customer", text: "Hello advisor" },
    { sender: "advisor", text: "Hi, how can I help you today?" },
  ]);

  const addMessage = (text) => {
    setMessages([...messages, { sender: "customer", text }]);
  };

  return (
    <div className="chat">
      <MessageBubble messages={messages} />
      <MessageInput addMessage={addMessage} />
    </div>
  );
}

export default PageTwo;
