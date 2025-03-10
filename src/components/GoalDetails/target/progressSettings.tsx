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

const ProgressSettings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="vertical-center text-Gray-500 bg-Gray-50 hover:bg-Gray-50/90 h-8 cursor-pointer gap-x-2 rounded-sm p-1.5">
          <Settings2 size={18} />
          <p className="text-sm font-medium">إعدادات تقدم الهدف</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[38.25rem]">
        <DialogHeader>
          <DialogTitle className="border-b-1 pb-4 text-right">
            إعدادات تقدم الهدف
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-3.5 text-right">
          <p>مصدر تقدم الهدف</p>
          <ProgressOption
            title="المشاريع"
            description="سيتم احتساب تقدم الهدف تلقائيًا بناءً على تقدم المشاريع المتصلة."
          >
            <img src="/Graphics-symbol.svg" alt="logo" width={16} height={16} />
          </ProgressOption>
          <ProgressOption
            title="الأهداف الفرعية"
            description="سيتم حساب تقدم الهدف تلقائيًا بناءً على تقدم الأهداف الفرعية."
          >
            <ClipboardList size={16} />
          </ProgressOption>
          <ProgressOption
            title="يدوي"
            description="يتم تحديث تقدم هذا الهدف يدويًا."
          >
            <User size={16} />
          </ProgressOption>
        </div>

        <DialogFooter>
          <Button type="submit" className="cursor-pointer">
            حفظ
          </Button>
          <Button variant="ghost" className="cursor-pointer">
            إلغاء
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProgressSettings;
