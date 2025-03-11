import { CircleEllipsis } from "lucide-react";
import History from "./details/history";
import MainTargets from "./details/mainTargets";
import Members from "./details/members";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Details = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 max-lg:hidden">
        <Members />
        <div className="bg-Line-Container-Line h-[0.0625rem]" />
        <History />
        <div className="bg-Line-Container-Line h-[0.0625rem]" />
        <MainTargets />
      </div>
      <div className="flex justify-end p-2 lg:hidden">
        <Sheet>
          <SheetTrigger className="vertical-center gap-x-2 cursor-pointer p-2 hover:bg-gray-100 rounded-sm">
            <p className="text-Gray-700 font-semibold">Details</p>
            <CircleEllipsis size={20} color="black" strokeWidth={2} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader></SheetHeader>
            <div className="flex w-full flex-col gap-y-5" dir="rtl">
              <Members />
              <div className="bg-Line-Container-Line h-[0.0625rem]" />
              <History />
              <div className="bg-Line-Container-Line h-[0.0625rem]" />
              <MainTargets />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Details;
