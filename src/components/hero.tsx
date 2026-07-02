import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="dot" aria-hidden="true" /> / online hub · Adelaide
        </span>
        <h1>
          Jaxon
          <br />
          <span className="grad">Wallace.</span>
        </h1>
        <p className="lead">
          A cleaner, faster Linktree-style homepage for socials, GitHub projects,
          and professional profiles — rebuilt as a premium Next.js starter ready
          for Vercel.
        </p>
        <div className="cta">
          <a className="btn primary" href="#links">
            Open links <span>↓</span>
          </a>
          <a className="btn" href="https://www.linkedin.com/in/jaxon-wallace" target="_blank" rel="noreferrer">
            LinkedIn <span>↗</span>
          </a>
        </div>
      </div>
      <aside className="portrait-card premium-panel" aria-label="Jaxon Wallace portrait and site status">
        <div className="portrait" aria-label="Jaxon Wallace portrait">
          <Image
            className="portrait-image"
            src="/jaxon-portrait.jpeg"
            alt="Portrait of Jaxon Wallace"
            fill
            priority
            sizes="(max-width: 860px) min(100vw - 42px, 430px), 430px"
          />
        </div>
        <div className="status">
          <span>
            <b>status</b>
            <br />
            <span className="ok">ready for Vercel</span>
          </span>
          <span>
            next.js / react
            <br />
            gsap polish
          </span>
        </div>
      </aside>
    </section>
  );
}
