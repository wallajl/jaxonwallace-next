export function SiteNav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top">
        <span className="mark">
          <span>JW</span>
        </span>
        <span>Jaxon Wallace</span>
      </a>
      <div className="navlinks">
        <a href="#links">Links</a>
        <a className="keep" href="https://github.com/wallajl" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </nav>
  );
}
