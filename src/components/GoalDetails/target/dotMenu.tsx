import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";
import { Ellipsis } from "lucide-react";

const DotMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menubar dir="rtl" className="flex justify-end border-none bg-transparent p-0 shadow-none">
      <MenubarMenu >
        <MenubarTrigger aria-label="more" className="p-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          <div className="size-6 cursor-pointer rounded-[0.25rem] hover:bg-Line-Container-Line center">
            <Ellipsis size={20} className="stroke-[0.08rem]" />
          </div>
        </MenubarTrigger>
        <MenubarContent >{children}</MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default DotMenu;
