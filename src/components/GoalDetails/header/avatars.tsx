const Avatars = () => {
  return (
    <div className="vertical-center -space-x-2.5">
      <img src="/person2.png" className="avatar z-20" alt="person2" />
      <img src="/person1.jpg" className="avatar z-10" alt="person1" />
      <div className="avatar center gap-x-0.5 border-2 border-[#A1A1AA]">
        <span className="size-[0.2rem] rounded-full bg-[#A1A1AA]"></span>
        <span className="size-[0.2rem] rounded-full bg-[#A1A1AA]"></span>
        <span className="size-[0.2rem] rounded-full bg-[#A1A1AA]"></span>
      </div>
    </div>
  );
};

export default Avatars;
