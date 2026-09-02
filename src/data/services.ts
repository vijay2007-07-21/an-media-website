import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Video,
  Scissors,
  Share2,
  Palette,
  Megaphone,
  Users,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export type Service = {
  code: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    code: "01",
    icon: Camera,
    title: "Photography",
    description:
      "Professional photography for products, businesses, events, people and social media content.",
  },
  {
    code: "02",
    icon: Video,
    title: "Videography",
    description:
      "High-quality video production for businesses, events, promotions, advertisements and branded content.",
  },
  {
    code: "03",
    icon: Scissors,
    title: "Video Editing",
    description:
      "Professional editing for reels, advertisements, YouTube videos, promotional videos and branded content.",
  },
  {
    code: "04",
    icon: Smartphone,
    title: "Reels & Short-form Content",
    description:
      "Creative and engaging short-form videos designed for Instagram, YouTube Shorts and other social platforms.",
  },
  {
    code: "05",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Content planning, posting, creative management and social media support to build a consistent online presence.",
  },
  {
    code: "06",
    icon: Palette,
    title: "Branding",
    description:
      "Creative branding solutions that help businesses develop a strong, professional and memorable identity.",
  },
  {
    code: "07",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Digital marketing solutions designed to improve visibility, reach the right audience and support business growth.",
  },
  {
    code: "08",
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Creator collaborations and promotional campaigns that connect brands with relevant audiences.",
  },
  {
    code: "09",
    icon: TrendingUp,
    title: "Brand Promotion & Growth",
    description:
      "Creative promotional strategies that increase brand awareness, build trust and support long-term growth.",
  },
];