import { Button } from "@/components/ui/button";
import Avatars from "./avatars";
import { Lock } from "lucide-react";

const GoalShare = () => {
  return (
    <div className="vertical-center gap-x-2.5 max-md:ms-auto">
      <Avatars />
      <Button
        variant={"default"}
        className="center cursor-pointer gap-2 py-1"
        size={"sm"}
      >
        <Lock size={18} />
        <span>مشاركة</span>
      </Button>
    </div>
  );
};

export default GoalShare;
