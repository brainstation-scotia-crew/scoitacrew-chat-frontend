import "./MessageBubble.scss";

export default function MessageBubble({ messages }) {
  return (
    <div className="bubble">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`bubble__text bubble__${
            message.sender === "customer" ? "customer" : "advisor"
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}
