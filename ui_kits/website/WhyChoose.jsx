/* global React, Icon */
const WhyChoose = () => {
  const cards = [
    ["dollar",      "Upfront Pricing",              "Final price confirmed before work starts. What we quote is what you pay."],
    ["clock",       "Fast Response",                "Same-day and next-day availability for most areas in the Lower Mainland."],
    ["users",       "Friendly Local Team",          "We're local, professional, and treat every property with respect."],
    ["truck",       "We Do the Heavy Lifting",      "Point to what goes and we handle all the carrying, loading, and hauling."],
    ["shieldCheck", "Careful Property Protection",  "We're mindful of walls, floors, and landscaping during every removal."],
    ["refresh",     "Recycling & Donation",         "We divert items from the landfill by recycling and donating when possible."],
    ["msg",         "Professional Communication",   "We confirm appointments, arrive on time, and keep you informed throughout."],
    ["home",        "We Clean Up After",            "After removal, we do a basic sweep of the area so you're left with a clean space."],
  ];
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-head-center">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Why Lavish Junk Removal</h2>
          <p className="section-lead">A local team that takes the job seriously, every time.</p>
        </div>
        <div className="why-grid">
          {cards.map(([icon, title, body]) => (
            <div className="why-card" key={title}>
              <div className="why-icon"><Icon name={icon} size={20}/></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.WhyChoose = WhyChoose;
