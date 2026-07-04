const workFocus = ["BMS Engineering", "HVAC Controls", "Commissioning", "Home Assistant"];

const homeAssistantServices = ["Dashboards", "Automations", "Integrations", "Remote Access"];

const contactMethods = [
  {
    label: "Discord",
    value: "Slimdog",
    detail: "Fastest contact.",
    href: null,
    featured: true,
  },
  {
    label: "LinkedIn",
    value: "Jaxon Wallace",
    detail: "Professional profile.",
    href: "https://www.linkedin.com/in/jaxon-wallace",
    featured: false,
  },
  {
    label: "GitHub",
    value: "@wallajl",
    detail: "Projects and code.",
    href: "https://github.com/wallajl",
    featured: false,
  },
];

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="info-card magnetic-card motion-card">
      <span className="kicker">{title}</span>
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
          <span className="mono">BMS / HVAC / automation</span>
        </div>
        <div className="about-panel motion-card compact-panel">
          <p>
            Adelaide-based BMS Engineer at Schneider Electric, focused on building controls,
            HVAC systems, commissioning, and practical automation.
          </p>
          <div className="stat-row compact-stats" aria-label="Professional highlights">
            <span><b>BMS</b> Engineering</span>
            <span><b>SA</b> Adelaide</span>
            <span><b>AI</b> Claude user</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="focus">
        <div className="section-head">
          <h2>Focus</h2>
          <span className="mono">controls / dashboards / reliability</span>
        </div>
        <div className="info-grid compact-grid">
          {workFocus.map((item) => (
            <MiniCard key={item} title="focus" body={item} />
          ))}
        </div>
      </section>

      <section className="content-section home-assistant-section" id="home-assistant">
        <div className="service-panel motion-card compact-panel">
          <div>
            <span className="kicker">Home Assistant</span>
            <h3>Reliable smart-home setups.</h3>
            <p>Dashboards, automations, integrations, alerts, and remote access.</p>
          </div>
          <div className="service-list compact-list">
            {homeAssistantServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="contact-panel motion-card compact-panel">
          <div>
            <span className="kicker">contact</span>
            <h2>Contact</h2>
            <p>Discord for quick contact. LinkedIn for work. GitHub for projects.</p>
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
