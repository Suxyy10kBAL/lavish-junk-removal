/* global React, Icon */
const Hero = ({ onNav }) => (
  <section className="hero-home">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="hero-eyebrow">Serving the Lower Mainland</p>
        <h1>Fast, Professional Junk Removal Made Simple</h1>
        <p className="hero-sub">
          Lavish Junk Removal helps homeowners, renters, businesses, and property managers
          remove unwanted junk quickly, safely, and stress-free — with upfront pricing and
          no hidden fees.
        </p>

        <div className="trust-badges" style={{ marginBottom: "1.75rem" }}>
          <div className="trust-badge"><span className="trust-badge-icon"><Icon name="check" size={18}/></span>Free Upfront Estimates</div>
          <div className="trust-badge"><span className="trust-badge-icon"><Icon name="clock" size={18}/></span>Same-Day &amp; Next-Day Available</div>
          <div className="trust-badge"><span className="trust-badge-icon"><Icon name="truck" size={18}/></span>We Load Everything</div>
          <div className="trust-badge"><span className="trust-badge-icon"><Icon name="shield" size={18}/></span>No Hidden Fees</div>
        </div>

        <div className="hero-actions">
          <a className="btn btn-gold btn-lg" href="#estimate"
             onClick={(e) => { e.preventDefault(); onNav("pricing"); }}>Get Free Estimate</a>
          <a className="btn btn-outline btn-lg" href="tel:+17789384235">Call Now</a>
          <a className="btn btn-outline btn-lg" href="sms:+17789384235">Text a Photo</a>
        </div>
      </div>

      <div className="hero-media">
        <img src="../../assets/lavish-logo.png" alt="Lavish Junk Removal" loading="eager"
             style={{ background: "#fff", padding: "2rem", aspectRatio: "4/3", objectFit: "contain" }} />
      </div>
    </div>
  </section>
);
window.Hero = Hero;
