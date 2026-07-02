const workFocus = [
  "Building Management Systems",
  "HVAC controls and automation",
  "Smart building integrations",
  "Commissioning and fault finding",
];

const homeAssistantServices = [
  "Home Assistant dashboards and automations",
  "Lighting, climate, and sensor integrations",
  "Local-first smart home control",
  "Alerts, routines, and practical quality-of-life automations",
];

const projects = [
  "Personal website and custom web builds",
  "GitHub experiments and tooling",
  "Home lab / smart home workflows",
  "Automation ideas that connect real equipment to clean interfaces",
];

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="info-card magnetic-card motion-card">
      <span className="kicker">{"// "}{title}</span>
      <p>{body}</p>
    </article>
  );
}

export function ProfileSections() {
  return (
    <>
      <section className="content-section about-section" id="about">
        <div className="section-head">
          <h2>About</h2>
          <span className="mono">bms / controls / automation</span>
        </div>
        <div className="about-panel motion-card">
          <p>
            Jaxon Wallace is an Adelaide-based BMS Engineer working in smart building controls,
            HVAC automation, and connected infrastructure. Currently at Schneider Electric, he
            has a trade and technical background through St Patrick&apos;s Technical College and
            hands-on experience across building systems, commissioning, and automation work.
          </p>
          <div className="stat-row" aria-label="Professional highlights">
            <span><b>2025</b> Schneider Electric</span>
            <span><b>BMS</b> smart buildings</span>
            <span><b>SA</b> Adelaide based</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="focus">
        <div className="section-head">
          <h2>Work focus</h2>
          <span className="mono">systems that make buildings smarter</span>
        </div>
        <div className="info-grid">
          {workFocus.map((item) => (
            <MiniCard key={item} title="focus" body={item} />
          ))}
        </div>
      </section>

      <section className="content-section home-assistant-section" id="home-assistant">
        <div className="section-head">
          <h2>Home Assistant services</h2>
          <span className="mono">smart home / automation / local control</span>
        </div>
        <div className="service-panel motion-card">
          <div>
            <span className="kicker">{"// practical smart-home builds"}</span>
            <h3>Home automation that feels reliable, not gimmicky.</h3>
            <p>
              I can help set up Home Assistant automations, dashboards, device integrations,
              notifications, and local smart-home workflows — the kind of stuff that makes a
              house easier to live in instead of just adding more apps.
            </p>
          </div>
          <div className="service-list">
            {homeAssistantServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-head">
          <h2>Projects / lab</h2>
          <span className="mono">web / github / automation</span>
        </div>
        <div className="info-grid">
          {projects.map((project) => (
            <MiniCard key={project} title="lab" body={project} />
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="contact-panel motion-card">
          <div>
            <span className="kicker">{"// best way to reach me"}</span>
            <h2>For work, start with LinkedIn. For builds, check GitHub.</h2>
            <p>
              This page keeps the useful links in one place: professional profile, socials,
              personal projects, and smart-home / automation work.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn primary" href="https://www.linkedin.com/in/jaxon-wallace" target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
            <a className="btn" href="https://github.com/wallajl" target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
