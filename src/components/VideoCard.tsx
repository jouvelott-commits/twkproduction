import { motion } from "framer-motion";
import { Play } from "lucide-react";

export type VideoFormat = "FORMAT LONG" | "FORMAT COURT" | "PODCAST" | "MINIATURE";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  format: string;
  views: string;
  href?: string;
  aspectRatio?: "16/9" | "9/16";
}

const VideoCard = ({ thumbnail, title, format, views, href, aspectRatio = "16/9" }: VideoCardProps) => {
  const Wrapper = href ? "a" : "div";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group rounded-2xl overflow-hidden bg-[#F0F1F5] shadow-[0_2px_8px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.15)] transition-shadow duration-300"
      style={{ borderRadius: "16px" }}
    >
      <Wrapper
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="block relative w-full overflow-hidden cursor-pointer"
        style={{ aspectRatio }}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 text-[#0B1E3F] ml-0.5" fill="#0B1E3F" />
          </div>
        </div>
      </Wrapper>
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
