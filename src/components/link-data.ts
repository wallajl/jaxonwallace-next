export type SocialLink = {
  name: string;
  href: string;
  handle: string;
  description: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Snapchat",
    href: "https://www.snapchat.com/add/jaxw2004",
    handle: "@jaxw2004",
    description: "Quick personal updates and day-to-day snaps.",
    icon: "SC",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jaxon_wallace_04/",
    handle: "@jaxon_wallace_04",
    description: "Photos, personal updates, and life outside work.",
    icon: "IG",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jaxon-wallace",
    handle: "/in/jaxon-wallace",
    description: "BMS Engineer at Schneider Electric in Adelaide.",
    icon: "IN",
  },
  {
    name: "GitHub",
    href: "https://github.com/wallajl",
    handle: "@wallajl",
    description: "Personal builds, experiments, and web projects.",
    icon: "GH",
  },
];
