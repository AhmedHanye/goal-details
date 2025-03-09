import { ChevronDown, Circle, Star, ThumbsUp } from "lucide-react";

const GoalStatusAndActions = () => {
  return (
    <div className="flex gap-x-6 gap-y-3 max-md:flex-col max-md:items-start md:items-center">
      <div className="flex gap-x-3 gap-y-1 max-md:flex-col max-md:items-start md:items-center">
        <h1 className="text-xl font-semibold">زيادة المبيعات بنسبة 20%</h1>
        <div className="vertical-center text-text-gray-2 gap-x-3">
          <ChevronDown size={20} strokeWidth={1} />
          <Star size={20} strokeWidth={1} />
          <ThumbsUp size={18} strokeWidth={1} />
        </div>
      </div>
      <div className="vertical-center gap-x-1.5">
        <Circle size={13} className="text-text-gray-3" />
        <p className="text-text-gray-3 font-medium">تحديد الحالة</p>
        <ChevronDown size={16} strokeWidth={1} className="text-text-gray-2" />
      </div>
    </div>
  );
};

export default GoalStatusAndActions;
