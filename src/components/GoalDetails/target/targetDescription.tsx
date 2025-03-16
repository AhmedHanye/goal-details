import { Textarea } from "@/components/ui/textarea";

const TargetDescription = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="py-1.5 custom-h1">وصف الهدف</h1>
      <Textarea 
      id="target-description"
      name="target-description"
      placeholder="كيف يصف هذا الهدف نفسه ليعكس غايته ودوره بوضوح؟" 
      className="py-3.5 px-2 h-[10.125rem]" 
      />
    </div>
  );
};

export default TargetDescription;
