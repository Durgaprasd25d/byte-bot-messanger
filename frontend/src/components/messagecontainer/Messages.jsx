import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/messageSkeleton.jsx";
import Message from "./Message.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const messagesEndRef = useRef();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id}>
            <Message message={message} />
            {index === messages.length - 1 && <div ref={messagesEndRef} />}
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {loading && messages.length === 0 && (
        <p className="text text-center">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
