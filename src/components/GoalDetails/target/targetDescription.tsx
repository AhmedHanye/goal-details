import { Textarea } from "@/components/ui/textarea";

const TargetDescription = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="py-1.5 text-lg font-semibold">وصف الهدف</h1>
      <Textarea placeholder="كيف يصف هذا الهدف نفسه ليعكس غايته ودوره بوضوح؟" className="py-3.5 px-2 h-[10.125rem]" />
    </div>
  );
};

export default TargetDescription;
