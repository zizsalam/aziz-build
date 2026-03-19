interface Video {
  title: string;
  description: string;
  source: string;
  linkedinUrl: string;
  url: string | null;
  thumbnail: string | null;
  date: string;
}

export default function VideoCard({ video }: { video: Video }) {
  const link = video.url || video.linkedinUrl;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border rounded overflow-hidden transition-all hover:border-accent hover:-translate-y-0.5"
    >
      <div className="relative aspect-video bg-gradient-to-br from-surface to-bg flex items-center justify-center">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-dim flex items-center justify-center group-hover:border-accent transition-colors">
              <span className="text-dim group-hover:text-accent transition-colors ml-0.5">
                ▶
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-bright text-sm font-medium mb-1">{video.title}</h3>
        <p className="text-body text-xs leading-relaxed mb-2 line-clamp-2">
          {video.description}
        </p>
        <div className="flex items-center gap-2 text-[10px] text-dim">
          <span>{video.source}</span>
          <span>·</span>
          <span>{video.date}</span>
        </div>
      </div>
    </a>
  );
}
