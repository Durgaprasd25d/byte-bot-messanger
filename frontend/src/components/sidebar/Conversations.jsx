import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : (
        // Check if conversations is an array with at least one element
        conversations && conversations.length > 0 ? (
          conversations.map((conversation, index) => (
            <Conversation key={conversation._id} conversation={conversation} index={index} />
          ))
        ) : (
          <p>No conversations available.</p>
        )
      )}
    </div>
  );
};

export default Conversations;
