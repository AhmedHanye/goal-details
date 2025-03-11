import { useEffect, useRef } from "react";
import PlusButton from "./plusButton";
import Sortable from "sortablejs";
import Project from "./project";
import { CircleCheck } from "lucide-react";

const Work = () => {
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
    <div className="">
      <div className="vertical-center gap-x-2 px-4 py-2">
        <h1 className="custom-h1">العمل والمشاريع المتصلة</h1>
        <PlusButton />
      </div>
      <div className="py-2" ref={containerRef}>
        <Project>
          <CircleCheck
            size={16}
            className="stroke-Gray-700"
            strokeWidth={0.8}
          />
        </Project>
        <Project>
          <div className="bg-Blue-500 m-[0.1875rem] size-2.5 rounded-xs" />
        </Project>
        <Project>
          <img src="/icon2.svg" sizes="16" alt="folder" />
        </Project>
      </div>
    </div>
  );
};

export default Work;
