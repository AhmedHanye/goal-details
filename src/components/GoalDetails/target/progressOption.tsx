import { JSX } from "react";

const ProgressOption = ({
  children,
  title,
  description,
  selected,
  selectFunc,
}: {
  children: JSX.Element;
  title: string;
  description: string;
  selected: boolean;
  selectFunc: () => void;
}) => {
  return (
    <div
      className={`widget flex w-full cursor-pointer flex-col items-end gap-y-1.5 p-3 ${selected ? "bg-Blue-50" : "hover:bg-Gray-50"}`}
      onClick={selectFunc}
    >
      {children}
      <h1 className="font-medium">{title}</h1>
      <p className="text-Gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ProgressOption;
