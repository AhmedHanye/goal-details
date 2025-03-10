import TargetProgress from "./target/targetProgress";
import TargetUpdate from "./target/targetUpdate";
import Uaggregators from "./target/uaggregators";

const Target = () => {
  return (
    <div className="mx-auto flex h-screen w-[42.5rem] flex-col gap-y-8 px-4 py-16">
      <TargetUpdate />
      <Uaggregators />
      <TargetProgress />
    </div>
  );
};

export default Target;
