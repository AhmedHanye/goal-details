import DragSign from "./dragSign";
import DotMenu from "./dotMenu";
import { MenubarItem } from "@/components/ui/menubar";
import CustomCalender from "./customCalender";
import CustomUser from "./customUser";

const Project = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hover:bg-Gray-50 group vertical-center relative h-9 cursor-grab justify-between px-4 py-2">
      <div className="vertical-center gap-x-2">
        {children}
        <p className="text-Gray-600 text-sm">تعيين مدير مبيعات جديد</p>
      </div>
      <div className="vertical-center gap-x-3">
        <CustomUser />
        <CustomCalender />
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
