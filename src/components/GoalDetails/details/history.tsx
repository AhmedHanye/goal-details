import { ChevronDown } from "lucide-react";
const History = () => {
  return (
    <div className="px-6">
      <h1 className="text-Gray-700 font-medium">الفترة الزمنية</h1>
      <div
        id="start-time"
        className="vertical-center cursor-pointer gap-x-1 py-2"
      >
        <p className="text-xs">الربع الأول، 2024</p>
        <ChevronDown size={18} strokeWidth={1.2} className="stroke-Gray-500" />
      </div>
      <p className="text-Gray-600 py-2 text-xs">تاريخ محدد للتسليم</p>
      <p className="text-xs font-medium">1 أبريل - 2025</p>
    </div>
  );
};

export default History;
