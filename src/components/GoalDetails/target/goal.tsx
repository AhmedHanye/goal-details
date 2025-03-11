import { Progress } from "@/components/ui/progress";
import { Circle, CircleUserRound } from "lucide-react";
import DragSign from "./dragSign";
import DotMenu from "./dotMenu";
import { MenubarItem } from "@/components/ui/menubar";

const Goal = () => {
  return (
    <div className="border-t-Line-Container-Line hover:bg-Gray-50 group relative flex h-[4.25rem] cursor-grab justify-between border-t-1 px-8">
      <div className="flex h-full flex-col justify-center gap-y-4 max-w-1/3">
        <h1 className="text-Gray-600 text-sm font-medium truncate">
          تعيين مدير مبيعات جديد
        </h1>
        <div className="vertical-center gap-x-2">
          <span className="text-Gray-500 text-xs font-medium">Q1 FY25</span>
          <Circle className="fill-Gray-500 stroke-Gray-500" size={4} />
          <CircleUserRound
            className="stroke-Gray-200"
            strokeWidth={1}
            size={14}
          />
          <span className="text-Gray-500 text-xs">المالية</span>
        </div>
      </div>
      <div className="h-full flex-col justify-center gap-y-4">
        <DotMenu>
          <MenubarItem>إزالة من التحديث التلقائي للتقدم</MenubarItem>
          <MenubarItem className="text-Red-500 hover:!text-Red-500">
            فصل العمل عن الهدف
          </MenubarItem>
        </DotMenu>
        <div className="vertical-center gap-x-4">
          <div className="vertical-center gap-x-[0.4375rem]">
            <Progress
              value={20}
              className="[&>div]:bg-Blue-500 h-1 w-[5.875rem] rtl:rotate-180 [&>div]:h-1 [&>div]:rounded-lg"
              aria-label="نسبة اكتمال الهدف"
            />
            <span className="text-Gray-500 text-xs">%20</span>
          </div>
          <img
            src="/person1.webp"
            alt="person image"
            className="size-6 rounded-full"
          />
        </div>
      </div>
      <DragSign />
      <div className="bg-Line-Dotted-Line absolute -top-[3.8rem] right-4 z-30 h-full w-0.5"></div>
      <div className="curve-line absolute top-1.5 right-4"></div>
    </div>
  );
};

export default Goal;
