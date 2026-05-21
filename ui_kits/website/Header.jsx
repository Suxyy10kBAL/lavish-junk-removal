/* global React, Icon, Logo */
const Header = ({ activePage, onNav }) => {
  const [open, setOpen] = React.useState(false);
  const items = [
    ["home", "Home"],
    ["pricing", "Pricing"],
    ["services", "Services"],
    ["contact", "Contact"],
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(o => !o)}
        ><span/><span/><span/></button>
        <nav className={"nav" + (open ? " open" : "")} aria-label="Main navigation">
          {items.map(([id, label]) => (
            <a key={id} href={"#" + id}
               className={activePage === id ? "active" : ""}
               onClick={(e) => { e.preventDefault(); setOpen(false); onNav(id); }}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-outline-dark btn-sm" href="tel:+17789384235">Call Now</a>
          <a className="btn btn-gold btn-sm" href="#estimate"
             onClick={(e) => { e.preventDefault(); onNav("pricing"); }}>Get Estimate</a>
        </div>
      </div>
    </header>
  );
};
window.Header = Header;
