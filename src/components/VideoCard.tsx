import { motion } from "framer-motion";

export type VideoFormat = "FORMAT LONG" | "FORMAT COURT" | "PODCAST" | "MINIATURE";

interface VideoCardProps {
  videoId: string;
  title: string;
  format: string;
  views: string;
  aspectRatio?: "16/9" | "9/16";
}

const VideoCard = ({ videoId, title, format, views, aspectRatio = "16/9" }: VideoCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group rounded-2xl overflow-hidden bg-[#F0F1F5] shadow-[0_2px_8px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.15)] transition-shadow duration-300"
      style={{ borderRadius: "16px" }}
    >
      <div className="w-full overflow-hidden" style={{ aspectRatio }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full block"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#0B1E3F] leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-xs uppercase text-slate-500 tracking-[0.12em]">
          {format} • {views} VUES
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;