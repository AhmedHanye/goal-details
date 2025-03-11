import Discussion from "./target/discussion";
import TargetDescription from "./target/targetDescription";
import TargetProgress from "./target/targetProgress";
import TargetUpdate from "./target/targetUpdate";
import Uaggregators from "./target/uaggregators";
import Work from "./target/work";

const Target = () => {
  return (
    <div className="mx-auto flex lg:w-[42.5rem] max-lg:w-full flex-col gap-y-8 px-4 py-16">
      <TargetUpdate />
      <Uaggregators />
      <TargetProgress />
      <TargetDescription />
      <Work />
      <Discussion />
    </div>
  );
};

export default Target;
