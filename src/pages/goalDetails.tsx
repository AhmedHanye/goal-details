import Header from "@/components/GoalDetails/header";
import Target from "@/components/GoalDetails/target";

const GoalDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <Target />
        <div className="w-[22.8125rem] border-r-1 py-16"></div>
      </div>
    </section>
  );
};

export default GoalDetails;
