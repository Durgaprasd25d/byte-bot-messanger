import useConversation from "../../zustand/useConvsersation.js";

const Conversation = ({ conversation, index }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected =
    selectedConversation && selectedConversation._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? "bg-sky-500" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt={`Profile of ${conversation.fullName}`}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-center">
            <p className="font-bold text-black-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {index !== 0 && <div className="divider my-0 py-0 h-1 " />}
    </>
  );
};

export default Conversation;
