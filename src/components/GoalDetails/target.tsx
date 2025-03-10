import TargetDescription from "./target/targetDescription";
import TargetProgress from "./target/targetProgress";
import TargetUpdate from "./target/targetUpdate";
import Uaggregators from "./target/uaggregators";

const Target = () => {
  return (
    <div className="mx-auto flex w-[42.5rem] flex-col gap-y-8 px-4 py-16">
      <TargetUpdate />
      <Uaggregators />
      <TargetProgress />
      <TargetDescription />
    </div>
  );
};

export default Target;
