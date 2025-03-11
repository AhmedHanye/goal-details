import { Progress } from "@/components/ui/progress";
import TargetState from "./targetState";

const Uaggregators = () => {
  return (
    <div className="flex w-full gap-1.5 text-center max-md:flex-wrap">
      <div className="uaggregator widget center">
        <p className="text-xs font-medium">نسبة اكتمال الهدف</p>
        <p className="text-[2rem] font-medium">%50</p>
        <Progress
          value={40}
          className="[&>div]:bg-Blue-500 h-1 w-[5.875rem] rtl:rotate-180 [&>div]:h-1 [&>div]:rounded-lg"
          aria-label="نسبة اكتمال الهدف"
        />
      </div>
      <div className="uaggregator widget center">
        <p className="text-xs font-medium">حالة الهدف</p>
        <TargetState />
        <p className="text-Gray-500 text-sm">آخر تحديث من 24 دقيقة</p>
      </div>
      <div className="uaggregator widget center">
        <p className="text-xs font-medium">وقت الهدف المتبقي</p>
        <p className=" font-medium">23 يوم</p>
        <p className="text-Gray-500 text-sm">1 يناير 2025 — 31 ديسمبر 2025</p>
      </div>
    </div>
  );
};

export default Uaggregators;
