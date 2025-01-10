import "./MessageInput.scss";
import { useState, useEffect } from "react";
import { getToken, queueUp, connect, sendMessage } from "/src/scripts/api.js";
import { io } from "socket.io-client";

export default function MessageInput({ addMessage, addadvMessage }) {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

 useEffect(() => {
    const initialize = async () => {
      try {
        document.title = "Connecting to advisor...";
        const response = await getToken();
        setToken(response.token);

        await queueUp(response.token, "customer");
        const socketInstance = io("http://localhost:8080");

        socketInstance.emit("register", response.token);

        socketInstance.on("inbox-message", (data) => {
          console.log(`Received message from advisor: ${data.message}`);
          addadvMessage(data.message);
        });

        setSocket(socketInstance);
      } catch (error) {
        console.error("Couldn't initialize:", error);
      }
    };
    initialize();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addMessage(message);

    try {
      await sendMessage(token, message);
    } catch (error) {
      console.error(error);
    }

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
      <div className="input__flex">
        <div className="input__icons">
          <svg
            className="input__svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674"
              stroke="#000000"
            />
          </svg>
        </div>
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
    </div>
  );
}