const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chat bubble"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 `}>Hey Whats up</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:10
      </div>
    </div>
  );
};

export default Message;
