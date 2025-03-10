import { GripVertical } from "lucide-react";

const DragSign = () => {
  return (
    <div className="absolute top-1/2 right-0.5 -translate-y-1/2 transform opacity-0 transition-opacity duration-150 group-hover:opacity-100">
      <GripVertical size={14} className="fill-Gray-700 stroke-Gray-700" />
    </div>
  );
};

export default DragSign;
