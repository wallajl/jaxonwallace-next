const workFocus = [
  "BMS",
  "HVAC controls",
  "Smart buildings",
  "Fault finding",
];

const homeAssistantServices = [
  "Dashboards",
  "Lighting / climate",
  "Automations",
  "Remote access / backups",
];

const servicePackages = [
  {
    name: "Starter setup",
    detail: "Install, backup, remote access, and device basics.",
  },
  {
    name: "Dashboard polish",
    detail: "Clean phone, tablet, and room views.",
  },
  {
    name: "Automation fixes",
    detail: "Fix flaky routines, alerts, devices, and integrations.",
  },
];

const projects = [
  "Personal sites",
  "GitHub tools",
  "Home lab workflows",
  "Automation ideas",
];

const timeline = [
  ["Now", "BMS Engineer at Schneider Electric"],
  ["2024", "BMS Engineer at Automated Air"],
  ["2020–24", "Apprentice pathway and trade experience"],
  ["2021", "St Patrick's Technical College graduate"],
];

const contactMethods = [
  {
    label: "Discord",
    value: "Slimdog",
    detail: "Fastest reply.",
    href: null,
    featured: true,
  },
  {
    label: "LinkedIn",
    value: "Jaxon Wallace",
    detail: "Work and BMS.",
    href: "https://www.linkedin.com/in/jaxon-wallace",
    featured: false,
  },
  {
    label: "GitHub",
    value: "@wallajl",
    detail: "Code and builds.",
    href: "https://github.com/wallajl",
    featured: false,
  },
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
            Adelaide-based BMS Engineer at Schneider Electric, focused on smart
            buildings, HVAC controls, commissioning, and useful automation.
          </p>
          <div className="stat-row" aria-label="Professional highlights">
            <span><b>2025</b> Schneider Electric</span>
            <span><b>BMS</b> smart buildings</span>
            <span><b>SA</b> Adelaide based</span>
          </div>
        </div>
      </section>

      <section className="content-section timeline-section" id="timeline">
        <div className="section-head">
          <h2>Experience path</h2>
          <span className="mono">hands-on trade background → smart buildings</span>
        </div>
        <div className="timeline motion-card">
          {timeline.map(([date, label]) => (
            <div className="timeline-item" key={date}>
              <span>{date}</span>
              <p>{label}</p>
            </div>
          ))}
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
            <h3>Smart home setups that actually behave.</h3>
            <p>
              Home Assistant dashboards, automations, integrations, alerts, and
              remote access — kept clean and reliable.
            </p>
          </div>
          <div className="service-list">
            {homeAssistantServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
        <div className="package-grid">
          {servicePackages.map((pack) => (
            <article className="package-card motion-card" key={pack.name}>
              <span className="kicker">{"// service"}</span>
              <h3>{pack.name}</h3>
              <p>{pack.detail}</p>
            </article>
          ))}
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
            <span className="kicker">{"// contact channel"}</span>
            <h2>Message me on Discord for the fastest reply.</h2>
            <p>
              Discord for quick contact. LinkedIn for work. GitHub for builds.
            </p>
          </div>
          <div className="contact-stack" aria-label="Contact options">
            {contactMethods.map((method) => {
              const content = (
                <>
                  <span className="contact-label">{method.label}</span>
                  <strong>{method.value}</strong>
                  <small>{method.detail}</small>
                </>
              );

              return method.href ? (
                <a
                  className={`contact-method ${method.featured ? "featured" : ""}`}
                  href={method.href}
                  key={method.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                  <span className="contact-arrow">↗</span>
                </a>
              ) : (
                <div className={`contact-method ${method.featured ? "featured" : ""}`} key={method.label}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
