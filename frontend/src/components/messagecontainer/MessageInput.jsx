import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage.js";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-black-700 border-black-700 text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="inset-y-0 text-white absolute end-0 flex items-center pe-3">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend className="text-black" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
