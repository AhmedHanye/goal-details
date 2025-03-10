import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";
import { Ellipsis } from "lucide-react";

const DotMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menubar className="flex justify-end border-none bg-transparent p-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="p-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          <div className="size-5 cursor-pointer rounded-sm hover:shadow-md">
            <Ellipsis size={20} />
          </div>
        </MenubarTrigger>
        <MenubarContent>{children}</MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default DotMenu;
