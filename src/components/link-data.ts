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
    description: "Add Jaxon on Snapchat.",
    icon: "SC",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jaxon_wallace_04/",
    handle: "@jaxon_wallace_04",
    description: "Photos and day-to-day updates.",
    icon: "IG",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jaxon-wallace",
    handle: "/in/jaxon-wallace",
    description: "Work, profile, and professional contact.",
    icon: "IN",
  },
  {
    name: "GitHub",
    href: "https://github.com/wallajl",
    handle: "@wallajl",
    description: "Code, projects, and repos.",
    icon: "GH",
  },
];
