/* global React, Icon */
const Services = ({ onNav, preview }) => {
  const services = [
    ["home",     "Residential Junk Removal",       "Clear rooms, basements and garages quickly and efficiently."],
    ["sofa",     "Furniture Removal",              "Sofas, sectionals, dining sets, wardrobes — any size, hauled away."],
    ["fridge",   "Appliance Removal",              "Safe removal of fridges, freezers, washing machines, dryers, and more."],
    ["garage",   "Garage & Basement Cleanouts",    "Full cleanouts — we remove everything, down to the last item."],
    ["debris",   "Renovation Debris Removal",      "Drywall, wood, flooring, tile, and construction waste."],
    ["property", "Property Cleanouts",             "Full cleanouts for landlords, estate sales, and property managers."],
  ];
  const list = preview ? services.slice(0, 6) : services;
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-lead">From single-item pickups to full property cleanouts — we handle it all.</p>
        </div>
        <div className={"services-grid" + (preview ? " services-preview" : "")}>
          {list.map(([icon, title, body]) => (
            <div className="service-card" key={title}>
              <span className="service-icon"><Icon name={icon} size={36} stroke={1.8}/></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        {preview && (
          <div className="services-cta-row">
            <a className="btn btn-outline-dark btn-lg" href="#services"
               onClick={(e) => { e.preventDefault(); onNav("services"); }}>See All Services</a>
          </div>
        )}
      </div>
    </section>
  );
};
window.Services = Services;
