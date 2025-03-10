import { Circle } from "lucide-react";

const TargetState = () => {
  const states = {
    onTrack: {
      label: "على المسار",
      color: "#00B252",
    },
    delayed: {
      label: "متأخر",
      color: "#FF9900",
    },
    overdue: {
      label: "فات الوقت",
      color: "#FF0000",
    },
    completed: {
      label: "مكتمل",
      color: "#4CAF50",
    },
  };

  const currentState = "completed";
  return (
    <div className="vertical-center gap-x-1.5">
      <Circle
        size="9.1"
        fill={states[currentState].color}
        stroke={states[currentState].color}
      />
      <p style={{ color: states[currentState].color }} className="font-semibold">على المسار</p>
    </div>
  );
};

export default TargetState;
