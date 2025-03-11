import Details from "@/components/GoalDetails/details";
import Header from "@/components/GoalDetails/header";
import Target from "@/components/GoalDetails/target";

const GoalDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex max-lg:flex-col-reverse">
        <Target />
        <div className="lg:w-[22.8125rem] lg:border-r-1 lg:py-16">
          <Details />
        </div>
      </div>
    </section>
  );
};

export default GoalDetails;
