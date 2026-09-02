// Team data.
//
// Replace the placeholder names, photos and descriptions below with the
// real AN Media team when available.

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  initials: string;
  /** Optional path to a real headshot; falls back to initials when unset. */
  photo?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "FOUNDER NAME",
    role: "Founder / CEO",
    description:
      "Leads company vision, strategy, operations and major client relationships.",
    initials: "FN",
  },
  {
    name: "MEDIA LEAD NAME",
    role: "Media Lead",
    description: "Leads video editing and media production.",
    initials: "ML",
  },
  {
    name: "CREATIVE LEAD NAME",
    role: "Creative / Content Lead",
    description: "Leads content creation, creators and creative strategy.",
    initials: "CL",
  },
  {
    name: "BUSINESS LEAD NAME",
    role: "Business Management Lead",
    description: "Leads clients, campaigns, partnerships and business growth.",
    initials: "BL",
  },
];
