import WritingItem from "@/components/WritingItem";
import FadeUp from "@/components/FadeUp";
import writing from "@/data/writing.json";

export default function WritingPage() {
  return (
    <div className="py-16">
      <FadeUp>
        <h2 className="section-label mb-8">// writing</h2>
      </FadeUp>
      <div>
        {writing.map((item, i) => (
          <FadeUp key={item.title} delay={i * 80}>
            <WritingItem item={item} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
