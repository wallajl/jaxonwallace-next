import type { SocialLink } from "./link-data";

type LinkCardProps = {
  link: SocialLink;
};

export function LinkCard({ link }: LinkCardProps) {
  return (
    <a className="card magnetic-card" href={link.href} target="_blank" rel="noreferrer">
      <div className="top">
        <span className="icon" aria-hidden="true">
          {link.icon}
        </span>
        <span className="name">{link.name}</span>
      </div>
      <p className="desc">{link.description}</p>
      <span className="handle">{link.handle}</span>
    </a>
  );
}
