/* global React */
const HowItWorks = () => (
  <section className="section" id="how-it-works">
    <div className="container">
      <div className="section-head-center">
        <span className="section-label">Simple Process</span>
        <h2 className="section-title">How It Works</h2>
        <p className="section-lead">Three easy steps and the junk is gone.</p>
      </div>
      <div className="steps-grid">
        <Step n="1" title="Send a Request">
          Call, text us photos, or fill out the free estimate form. We'll get back to you quickly.
        </Step>
        <Step n="2" title="Get Upfront Pricing">
          We review your items and confirm a clear, fixed price before any work begins — no surprises.
        </Step>
        <Step n="3" title="We Load &amp; Haul Away">
          Our crew handles all the heavy lifting, loading, hauling, and a basic sweep-up after.
        </Step>
      </div>
    </div>
  </section>
);
const Step = ({ n, title, children }) => (
  <div className="step-card">
    <div className="step-num" aria-hidden="true">{n}</div>
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
    <p>{children}</p>
  </div>
);
window.HowItWorks = HowItWorks;
