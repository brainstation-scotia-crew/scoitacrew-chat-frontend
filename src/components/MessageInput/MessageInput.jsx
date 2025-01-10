import "./MessageInput.scss";
import { useState } from "react";

export default function MessageInput({ addMessage }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addMessage(message);
    setMessage("");
  };

  return (
    <div className="input">
      <input
        className="input__text"
        type="text"
        placeholder="Enter message here..."
        name="message"
        value={message}
        onChange={handleInputChange}
      ></input>
      <div className="input__flex"></div>
      <button className="input__button" onClick={handleSubmit} type="submit">
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 28 28"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>input</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g id="Page-1" stroke="none" fill="none">
            <g
              id="Icon-Set"
              transform="translate(-258.000000, -933.000000)"
              fill="#000000"
            >
              <path
                d="M269,944 C269.001,943.445 268.555,942.999 268,943 C267.445,943.001 267.001,943.445 267,944 L267,951 C267,951.555 267.445,952.001 268,952 L275,952 C275.555,951.999 275.999,951.556 276,951 C276.001,950.444 275.555,949.999 275,950 L270.509,950 L285.293,935.217 C285.684,934.826 285.684,934.192 285.293,933.802 C284.902,933.412 284.269,933.412 283.879,933.802 L269,948.681 L269,944 L269,944 Z M284,946 L284,957 C284,958.087 283.086,959 282,959 L261.935,959.033 C260.848,959.033 259.967,958.152 259.967,957.065 L260,937 C260,935.913 260.914,935 262,935 L273,935 L273,933 L262,933 C259.827,933 258,935.221 258,937.394 L258,957.065 C258,959.238 259.762,961 261.935,961 L281.606,961 C283.779,961 286,959.173 286,957 L286,946 L284,946 L284,946 Z"
                id="input"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
