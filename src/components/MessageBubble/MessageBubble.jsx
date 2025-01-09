import "./MessageBubble.scss";

export default function MessageBubble() {
  const customer = ["Hello advisor"];
  const advisor = ["Hi, how can I help you today?"];

  return (
    <div className="bubble">
      <div className="bubble__text bubble__customer">{customer}</div>
      <div className="bubble__text bubble__advisor">{advisor}</div>
    </div>
  );
}
