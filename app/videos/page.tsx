import VideoCard from "@/components/VideoCard";
import FadeUp from "@/components/FadeUp";
import videos from "@/data/videos.json";

export default function VideosPage() {
  return (
    <div className="py-16">
      <FadeUp>
        <h2 className="section-label mb-8">// videos</h2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video, i) => (
          <FadeUp key={video.title} delay={i * 80}>
            <VideoCard video={video} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
