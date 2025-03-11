import { ClipboardList, Settings2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProgressOption from "./progressOption";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const ProgressSettings = () => {
  const [option, setOption] = useState<number | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="vertical-center text-Gray-500 hover:bg-Gray-50 h-8 cursor-pointer gap-x-2 rounded-sm p-1.5">
          <Settings2 size={18} />
          <p className="text-sm font-medium">إعدادات تقدم الهدف</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[38.25rem]">
        <DialogHeader>
          <DialogTitle className="border-b-1 pb-4">
            إعدادات تقدم الهدف
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-3.5">
          <p>مصدر تقدم الهدف</p>
          <ProgressOption
            title="الأهداف الفرعية"
            description=".سيتم حساب تقدم الهدف تلقائيًا بناءً على تقدم الأهداف الفرعية"
            selected={option === 1}
            selectFunc={() => setOption(1)}
          >
            <img src="/icon1.svg" alt="logo" width={16} height={16} />
          </ProgressOption>
          <ProgressOption
            title="المشاريع"
            description=".سيتم احتساب تقدم الهدف تلقائيًا بناءً على تقدم المشاريع المتصلة"
            selected={option === 2}
            selectFunc={() => setOption(2)}
          >
            <ClipboardList size={16} />
          </ProgressOption>
          <ProgressOption
            title="يدوي"
            description=".يتم تحديث تقدم هذا الهدف يدويًا"
            selected={option === 3}
            selectFunc={() => setOption(3)}
          >
            <User size={16} />
          </ProgressOption>
        </div>

        <DialogFooter>
          <Button type="submit" className="cursor-pointer">
            حفظ
          </Button>
          <DialogClose asChild>
          <Button variant="ghost" className="cursor-pointer">
            إلغاء
          </Button>
        </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProgressSettings;
