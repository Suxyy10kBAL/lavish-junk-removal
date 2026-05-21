/* global React */
const Reviews = () => {
  const list = [
    ["Sarah M. — North Vancouver", "Fast, professional, and easy to work with. Had a couch and some boxes removed the same day I called. Will definitely use again."],
    ["James T. — West Vancouver",  "They arrived on time and handled everything carefully. The pricing was clear and exactly what was quoted. Great service."],
    ["Linda K. — Burnaby",         "Used them for a full garage cleanout. Very impressed with how efficiently they worked. The space looks completely different now."],
    ["Michael R. — West Vancouver","The whole process was stress-free from start to finish. Clear communication, showed up when they said they would, and left everything clean."],
    ["Rachel S. — Coquitlam",      "Great communication and fair pricing. Highly recommend for any cleanout project. Professional crew and no hidden charges."],
    ["David L. — North Vancouver", "Quick response, came next day, and took care of everything. Very pleased with the service. Would recommend to anyone in the area."],
  ];
  return (
    <section className="section section-muted" id="reviews">
      <div className="container">
        <div className="section-head-center">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">Trusted by Local Customers</h2>
        </div>
        <div className="reviews-grid">
          {list.map(([author, text]) => (
            <div className="review-card" key={author}>
              <p className="review-stars" aria-label="5 star review">★★★★★</p>
              <p className="review-text">"{text}"</p>
              <p className="review-author">{author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Reviews = Reviews;
