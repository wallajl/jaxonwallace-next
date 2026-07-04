import { socialLinks } from "./link-data";
import { LinkCard } from "./link-card";

export function LinkSection() {
  return (
    <section className="section" id="links">
      <div className="section-head">
        <h2>Links</h2>
        <span className="mono">social / professional</span>
      </div>
      <div className="links">
        {socialLinks.map((link) => (
          <LinkCard key={link.name} link={link} />
        ))}
      </div>
    </section>
  );
}
