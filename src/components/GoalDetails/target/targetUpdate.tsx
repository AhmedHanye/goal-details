import { Button } from "../../ui/button";
import TargetState from "./targetState";

const TargetUpdate = () => {
  return (
    <div id="project-state ">
      <div className="vertical-center justify-between">
        <div className="vertical-center gap-x-2">
          <p className="font-medium">هذا الهدف</p>
          <TargetState />
        </div>
        <Button
          variant="state"
          className="cursor-pointer text-sm font-medium"
          size={"custom1"}
        >
          تحديث الحالة
        </Button>
      </div>
    </div>
  );
};

export default TargetUpdate;
