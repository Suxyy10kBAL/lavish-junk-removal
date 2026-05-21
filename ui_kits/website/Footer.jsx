/* global React, Logo */
const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">
          <span className="logo-mark">Lavish</span>
          <span className="logo-sub" style={{ color: "#d0d0d8" }}>Junk Removal</span>
        </div>
        <p className="footer-desc">
          Premium junk removal across the Lower Mainland. Fast, reliable, and upfront pricing you can count on.
        </p>
        <div className="footer-contact-links">
          <a href="tel:+17789384235">(778) 938-4235</a>
          <a href="mailto:info@lavishjunkremoval.com">info@lavishjunkremoval.com</a>
          <span>Mon–Sat &nbsp;11:00 AM – 8:00 PM</span>
        </div>
      </div>
      <div>
        <h4>Pages</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pricing &amp; Estimate</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">What We Remove</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li>Residential Junk Removal</li>
          <li>Furniture Removal</li>
          <li>Appliance Removal</li>
          <li>Garage Cleanouts</li>
          <li>Renovation Debris</li>
          <li>Property Cleanouts</li>
        </ul>
      </div>
      <div>
        <h4>Areas Served</h4>
        <ul>
          <li>North Vancouver</li>
          <li>West Vancouver</li>
          <li>Vancouver</li>
          <li>Burnaby</li>
          <li>Coquitlam</li>
          <li>Port Moody</li>
          <li>Surrounding areas</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>© {new Date().getFullYear()} Lavish Junk Removal. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const MobileBar = ({ onNav }) => (
  <div className="mobile-bar" role="navigation" aria-label="Quick contact">
    <a className="mobile-bar-btn mobile-bar-call" href="tel:+17789384235">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.13 1.01.37 2 .72 2.95a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.13-1.13a2 2 0 012.11-.45c.95.35 1.94.59 2.95.72A2 2 0 0122 14.92v2z"/>
      </svg>
      Call Now
    </a>
    <a className="mobile-bar-btn mobile-bar-estimate" href="#estimate"
       onClick={(e) => { e.preventDefault(); onNav && onNav("pricing"); }}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
      Get Estimate
    </a>
  </div>
);

window.Footer = Footer;
window.MobileBar = MobileBar;
