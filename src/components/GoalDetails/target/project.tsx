import { CircleCheck } from "lucide-react";
import DragSign from "./dragSign";
import DotMenu from "./dotMenu";
import { MenubarItem } from "@/components/ui/menubar";

const Project = () => {
  return (
    <div className="hover:bg-Gray-50 group vertical-center relative h-9 cursor-grab justify-between px-4 py-2">
      <div className="vertical-center gap-x-2">
        <CircleCheck size={16} className="stroke-Gray-700" strokeWidth={0.8} />
        <p className="text-Gray-600 text-sm">تعيين مدير مبيعات جديد</p>
      </div>
      <div className="vertical-center">
        <DotMenu>
          <MenubarItem className="text-Red-500 hover:!text-Red-500">
            فصل العمل عن الهدف
          </MenubarItem>
        </DotMenu>
      </div>

      <DragSign />
    </div>
  );
};

export default Project;
