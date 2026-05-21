/* global React */
const Areas = () => (
  <section className="section" id="areas">
    <div className="container">
      <div className="section-head">
        <span className="section-label">Local Experts</span>
        <h2 className="section-title">Areas We Serve</h2>
        <p className="section-lead">Proudly serving homes and businesses across the Lower Mainland.</p>
      </div>
      <div className="areas-grid">
        <span className="area-tag area-tag-primary">North Vancouver</span>
        <span className="area-tag area-tag-primary">Vancouver</span>
        <span className="area-tag">West Vancouver</span>
        <span className="area-tag">Burnaby</span>
        <span className="area-tag">Coquitlam</span>
        <span className="area-tag">Port Moody</span>
        <span className="area-tag">Surrounding Areas</span>
      </div>
    </div>
  </section>
);

const CtaBanner = ({ title, body, onNav }) => (
  <section className="cta-banner">
    <div className="container">
      <h2>{title || "Ready to Get Rid of Your Junk?"}</h2>
      <p>{body || "Call, text, or request a free estimate today. Send photos for the fastest quote."}</p>
      <div className="cta-actions">
        <a className="btn btn-gold btn-lg" href="tel:+17789384235">Call Now</a>
        <a className="btn btn-outline btn-lg" href="sms:+17789384235">Text a Photo</a>
        <a className="btn btn-outline btn-lg" href="#estimate"
           onClick={(e) => { e.preventDefault(); onNav && onNav("pricing"); }}>Get Free Estimate</a>
      </div>
    </div>
  </section>
);
window.Areas = Areas;
window.CtaBanner = CtaBanner;
