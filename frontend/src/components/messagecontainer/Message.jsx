import useConversation from "../../zustand/useConvsersation.js";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/timeExtract.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profile = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profile} alt="Chat bubble" />
        </div>
      </div>
      <div className={`chat-bubble text-white   ${bgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatTime}
      </div>
    </div>
  );
};

export default Message;
