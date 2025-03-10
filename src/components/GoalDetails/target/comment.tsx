const Comment = ({
  imgSrc,
  name,
  comment,
  time,
}: {
  imgSrc: string;
  name: string;
  comment: string;
  time: string;
}) => {
  return (
    <div className="flex h-[2.875rem] justify-between">
      <div className="flex gap-x-3">
        <img
          src={imgSrc}
          className="aspect-square h-full rounded-full"
          alt="person image"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-sm font-semibold">{name}</h1>
          <p className="text-sm">{comment}</p>
        </div>
      </div>
      <div className="text-xs font-medium">{time}</div>
    </div>
  );
};

export default Comment;
