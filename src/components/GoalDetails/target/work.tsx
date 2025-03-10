import { useEffect, useRef } from "react";
import PlusButton from "./plusButton";
import Sortable from "sortablejs";
import Project from "./project";

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
      <div className="vertical-center gap-x-2 py-2 px-4">
        <h1 className="custom-h1">العمل والمشاريع المتصلة</h1>
        <PlusButton />
      </div>
      <div className="py-2" ref={containerRef}>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Work;
