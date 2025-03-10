import { Zap } from "lucide-react";
import ProgressSettings from "./progressSettings";
import TargetChart from "./targetChart";
import SubGoals from "./subGoals";

const TargetProgress = () => {
  return (
    <div className="widget flex flex-col p-5 gap-y-6">
      <div className="vertical-center justify-between">
        <h1 className="vertical-center gap-x-2 text-lg font-semibold">
          <span>التقدم في الهدف</span>
          <Zap size={18} fill="#CCAD00" stroke="#CCAD00" />
        </h1>
        <ProgressSettings />
      </div>
      <TargetChart />
      <SubGoals />
    </div>
  );
};

export default TargetProgress;
