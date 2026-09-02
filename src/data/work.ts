// AN Media Portfolio / Work Data

export type WorkCategory =
  | "Social Media"
  | "Video"
  | "Branding"
  | "Campaigns"
  | "Creator Content";

export type WorkItem = {
  id: string;
  client: string;
  category: WorkCategory;
  summary: string;
  servicesProvided: string[];
  result: string;
  media?: string;
  caseStudy?: {
    problem: string;
    strategy: string;
    execution: string;
  };
  hue: string;
};

export const WORK_CATEGORIES: WorkCategory[] = [
  "Social Media",
  "Video",
  "Branding",
  "Campaigns",
  "Creator Content",
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "client-project-01",
    client: "Client Project 01",
    category: "Social Media",
    summary: "Social media video content created for a client project.",
    servicesProvided: ["Social Media Management", "Video Editing"],
    result: "Client project showcase",
    media: "/videos/client_01.mp4",
    hue: "#111111",
  },

  {
    id: "client-project-02",
    client: "Client Project 02",
    category: "Branding",
    summary: "Creative brand-focused video produced for a client.",
    servicesProvided: ["Brand Promotion", "Video Editing"],
    result: "Client project showcase",
    media: "/videos/client_02.mp4",
    hue: "#F5C518",
  },

  {
    id: "client-project-03",
    client: "Client Project 03",
    category: "Video",
    summary: "Professional video editing and creative production.",
    servicesProvided: ["Video Editing"],
    result: "Client project showcase",
    media: "/videos/client_03.mp4",
    hue: "#4A4A46",
  },

  {
    id: "client-project-04",
    client: "Client Project 04",
    category: "Campaigns",
    summary: "Creative campaign video produced for a client project.",
    servicesProvided: ["Creative Campaigns", "Video Editing"],
    result: "Client project showcase",
    media: "/videos/client_04.mp4",
    hue: "#111111",
  },

  {
    id: "brand-promotion",
    client: "Brand Promotion",
    category: "Branding",
    summary: "Brand promotion video created to showcase a business or product.",
    servicesProvided: ["Brand Promotion", "Content Creation"],
    result: "Brand project showcase",
    media: "/videos/brand_promotion.mp4",
    hue: "#F5C518",
  },

  {
    id: "event-video",
    client: "Event Video",
    category: "Campaigns",
    summary: "Event video capturing important moments and creative highlights.",
    servicesProvided: ["Video Editing", "Content Creation"],
    result: "Event project showcase",
    media: "/videos/event_video.mp4",
    hue: "#4A4A46",
  },
];