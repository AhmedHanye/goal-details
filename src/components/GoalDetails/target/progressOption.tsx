import { JSX } from "react";

const ProgressOption = ({
  children,
  title,
  description,
}: {
  children: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="widget hover:bg-Gray-50 flex w-full cursor-pointer flex-col items-end gap-y-1.5 p-3">
      {children}
      <h1 className="font-medium">{title}</h1>
      <p className="text-Gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ProgressOption;
