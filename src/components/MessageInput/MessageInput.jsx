import "./MessageInput.scss";
import { useState, useEffect } from "react";
import { getToken, queueUp, connect, sendMessage } from "/src/scripts/api.js";

export default function MessageInput({ addMessage }) {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      try {
        document.title = "Connecting to advisor...";
        const response = await getToken();
        setToken(response.token);

        await queueUp(response.token, "customer");
        connect(response.token, handleIncomingMessage);
      } catch (error) {
        console.error("Couldn't initialize:", error);
      }
    };
    initialize();
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
          <svg
            className="input__svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
              fill="#0F0F0F"
            />
            <path
              d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z"
              fill="#0F0F0F"
            />
            <path
              d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z"
              fill="#0F0F0F"
            />
            <path
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
              fill="#0F0F0F"
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
