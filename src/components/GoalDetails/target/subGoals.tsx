import { Plus, Triangle, Weight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Goal from "./goal";
import Sortable from "sortablejs";

const SubGoals = () => {
  const [open, setOpen] = useState<boolean>(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      Sortable.create(containerRef.current, {
        animation: 150, // Smooth animation
        swap: true, // Enables swapping
      });
    }
  }, []);

  return (
    <div>
      <div className="vertical-center justify-between">
        <div className="vertical-center gap-x-2 px-3">
          <Triangle
            className={`fill-Gray-500 stroke-Gray-500 transition-transform duration-300 ${open ? "-rotate-180" : "-rotate-90"}`}
            size={10}
          />
          <div
            className="vertical-center cursor-pointer gap-x-2"
            onClick={() => setOpen((pre: boolean) => !pre)}
          >
            <h1 className="text-lg font-semibold">الأهداف الفرعية</h1>
            <Plus size={18} className="fill-Gray-700 stroke-Gray-700" />
          </div>
        </div>
        <div className="vertical-center gap-x-2 px-2.5 py-1">
          <Weight size={18} className="stroke-Gray-500 stroke-[0.9px]" />
          <p className="text-Gray-500 text-sm">:الاوزان</p>
          <p className="text-sm font-medium">متساوية</p>
        </div>
      </div>
      <div
        className={`grid py-5 transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="relative overflow-hidden" ref={containerRef}>
          <Goal />
          <Goal />
          <Goal />
        </div>
      </div>
    </div>
  );
};

export default SubGoals;
