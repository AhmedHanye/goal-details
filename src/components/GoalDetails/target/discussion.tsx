import { Textarea } from "@/components/ui/textarea";
import Comment from "./comment";
import { Button } from '@/components/ui/button';

const Discussion = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="custom-h1 py-1">المناقشة والتعليقات</h1>
      <div className="widget bg-Gray-50 flex flex-col gap-y-8 px-4 py-6">
        <Comment
          imgSrc="/person1.webp"
          name="مازن العتيبي"
          comment="شكرًا عبدالسلام خطاب، على مراجعة هذه المهمة"
          time="منذ 30 دقيقة"
        />
        <Comment
          imgSrc="/person2.webp"
          name="عبدالسلام خطاب"
          comment="مرحبًا عبدالسلام, يرجى القيام بالمهمة الفرعية التالية"
          time="منذ 20 دقيقة"
        />
        <div className="flex gap-x-3">
          <img
            src="person1.webp"
            className="size-10 rounded-full"
            alt="person1"
          />
          <div className="relative w-full">
            <Textarea
              placeholder="اسأل سؤالًا أو أضف تعليقك"
              className="h-[6.5rem] p-3.5  text-xs"
            />
            <Button className="text-xs font-medium absolute left-3.5 bottom-3.5 cursor-pointer" size={'custom1'}>
            أضف تعليق
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
