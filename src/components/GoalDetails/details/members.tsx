import { CircleX, UsersRound } from "lucide-react";

const Members = () => {
  return (
    <div className="flex flex-col gap-y-4 px-6">
      <h1 className="font-medium text-Gray-700">تفاصيل هذا الهدف</h1>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xs">مسؤول الهدف</h2>
        <div className="vertical-center gap-x-[0.3125rem]">
          <img
            src="/person1.webp"
            className="size-6 rounded-full"
            alt="person img"
          />
          <h3 className="text-xs font-medium">مازن العتيبي</h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xs">الفريق المسؤول</h2>
        <div className="vertical-center gap-x-[0.3125rem]">
          <UsersRound
            size={24}
            className="border-Gray-400 stroke-Gray-400 rounded-full border-1 p-1.5"
            strokeWidth={0.857143}
          />
          <h3 className="text-xs font-medium">فريق المبيعات</h3>
          <CircleX
            size={12}
            className="fill-Gray-700 cursor-pointer text-white"
            strokeWidth={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default Members;
