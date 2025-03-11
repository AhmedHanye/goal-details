import { Zap } from "lucide-react";
import ProgressSettings from "./progressSettings";
import TargetChart from "./targetChart";
import SubGoals from "./subGoals";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// TODO: FIX THE POSITION OF THE TOOLTIP

const TargetProgress = () => {
  return (
    <div className="widget flex flex-col gap-y-6 p-5">
      <div className="vertical-center justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <h1 className="vertical-center custom-h1 gap-x-2">
                <span>التقدم في الهدف</span>
                <Zap id="hi" size={18} fill="#CCAD00" stroke="#CCAD00" />
              </h1>
            </TooltipTrigger>
            <TooltipContent dir="rtl" className="-left-1/2 px-2.5 py-2">
              <p className="w-[9.75rem]">
                يتم تحديث تقدم هذا الهدف تلقائيًا بناءً على الأهداف الفرعية
                المتصلة.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <ProgressSettings />
      </div>
      <TargetChart />
      <SubGoals />
    </div>
  );
};

export default TargetProgress;
