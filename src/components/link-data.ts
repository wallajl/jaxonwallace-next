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
    description: "Personal updates.",
    icon: "SC",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jaxon_wallace_04/",
    handle: "@jaxon_wallace_04",
    description: "Photos and life outside work.",
    icon: "IG",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jaxon-wallace",
    handle: "/in/jaxon-wallace",
    description: "BMS / controls profile.",
    icon: "IN",
  },
  {
    name: "GitHub",
    href: "https://github.com/wallajl",
    handle: "@wallajl",
    description: "Builds and experiments.",
    icon: "GH",
  },
];
