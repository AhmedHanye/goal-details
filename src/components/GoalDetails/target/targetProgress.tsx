import { Zap } from "lucide-react";
import ProgressSettings from "./progressSettings";
import TargetChart from "./targetChart";
import SubGoals from "./subGoals";

const TargetProgress = () => {
  return (
    <div className="widget flex flex-col gap-y-6 p-5">
      <div className="vertical-center justify-between">
        <h1 className="vertical-center custom-h1 gap-x-2">
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
