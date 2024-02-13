const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="w-10 skeleton rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="h-4 skeleton w-40"></div>
          <div className="h-4 skeleton w-40"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <div className="flex flex-col gap-1">
          <div className="h-4 skeleton w-40"></div>
        </div>
        <div className="w-10 skeleton h-10 rounded-full shrink-0"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
