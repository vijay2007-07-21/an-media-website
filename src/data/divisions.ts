export type Division = {
  code: string;
  name: string;
  title: string;
  description: string;
  items: string[];
};

export const DIVISIONS: Division[] = [
  {
    code: "01",
    name: "MEDIA",
    title: "Video Editing & Production",
    description:
      "Professional video editing, production, reels, advertisements and visual storytelling.",
    items: [
      "Reels",
      "Short-form videos",
      "YouTube videos",
      "Advertisements",
      "Motion graphics",
      "Visual storytelling",
    ],
  },
  {
    code: "02",
    name: "CREATIVE",
    title: "Content & Creators",
    description:
      "Content ideas, scripting, creation, personal branding and creator collaborations.",
    items: [
      "Content strategy",
      "Scriptwriting",
      "Content creation",
      "Personal branding",
      "Influencer collaborations",
      "Campaign concepts",
    ],
  },
  {
    code: "03",
    name: "BUSINESS",
    title: "Business Management & Growth",
    description:
      "Client management, marketing strategy, campaigns, partnerships and business growth.",
    items: [
      "Marketing strategy",
      "Brand management",
      "Campaign management",
      "Client management",
      "Influencer marketing",
      "Growth strategy",
    ],
  },
];
