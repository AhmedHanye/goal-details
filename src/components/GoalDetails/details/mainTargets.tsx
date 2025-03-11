import { MenubarItem } from "@radix-ui/react-menubar";
import DotMenu from "../target/dotMenu";
import PlusButton from "../target/plusButton";
import { Circle } from "lucide-react";

const MainTargets = () => {
  const states = {
    onTrack: {
      label: "على المسار",
      color: "#00B252",
    },
    delayed: {
      label: "متأخر",
      color: "#FF9900",
    },
    overdue: {
      label: "فات الوقت",
      color: "#FF0000",
    },
    completed: {
      label: "مكتمل",
      color: "#4CAF50",
    },
  };
  const currentState = "completed";
  return (
    <div className="flex flex-col gap-y-2 px-6">
      <div className="vertical-center gap-x-3">
        <h1 className="text-Gray-700 font-medium">الأهداف الرئيسية</h1>
        <PlusButton />
      </div>
      <div className="widget group flex flex-col gap-y-6 px-3 py-2">
        <div className="vertical-center justify-between">
          <h2 className="text-Gray-900 text-sm font-medium">
            اطلاق مدير في نهاية شهر يناير
          </h2>
          <DotMenu>
            <MenubarItem className="text-Red-500 hover:!text-Red-500">
              إلغاء الارتباط بهذا الهدف الرئيسي
            </MenubarItem>
          </DotMenu>
        </div>
        <div className="vertical-center justify-between">
          <p className="text-Gray-700 text-[0.625rem]">H1 FY25</p>
          <div className="vertical-center gap-x-[0.1875rem]">
            <Circle
              size={4.5}
              fill={states[currentState].color}
              stroke={states[currentState].color}
            />
            <p className="text-Green-900 text-[0.625rem] font-medium">
              على المسار
            </p>
          </div>
          <img src="person3.webp" width={14} height={14} className="rounded-full" alt="person img" />
        </div>
      </div>
    </div>
  );
};

export default MainTargets;
