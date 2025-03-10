import PagePath from "./header/pagePath";
import GoalStatusAndActions from "./header/goalStatusAndActions";
import Logo from "./header/logo";
import GoalShare from "./header/goalShare";

const Header = () => {
  return (
    <header className="vertical-center sticky top-0 z-50 min-h-[6.125rem] justify-between gap-x-10 bg-white px-6 py-6 shadow-[0_4px_9.3px_0px_rgba(0,0,0,0.05)] max-md:flex-wrap max-md:gap-y-4">
      <div className="vertical-center gap-x-3">
        <Logo />
        <div className="flex flex-col justify-center gap-y-1.5">
          <PagePath />
          <GoalStatusAndActions />
        </div>
      </div>
      <GoalShare />
    </header>
  );
};

export default Header;
