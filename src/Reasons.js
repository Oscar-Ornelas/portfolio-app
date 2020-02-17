import React from 'react';

function Reasons() {
  return (
    <section className="reasons">
      <div className="section-intro">
        <h1 className="reasons-header section-header">Why Hire Me?</h1>
        <p className="section-subtitle">Only a few of the advantages of working with me</p>
      </div>
      <div className="reasons-content">
        <div className="reason">
          <h2 className="reasons-subtitle">Always Learning</h2>
          <i class="fas fa-book-reader reason-emoticon"></i>
          <p className="reasons-info">By having a strong understanding of the fundamentals of front-end web development I am able to more easily pick up new technologies.</p>
        </div>
        <div className="reason">
          <h2 className="reasons-subtitle">Passionate</h2>
          <i className="fas fa-laptop-code reason-emoticon"></i>
          <p className="reasons-info">Strong desire to push myself every day in order to learn and produce more. I am constantly pushing myself to improve.</p>
        </div>
        <div className="reason">
          <h2 className="reasons-subtitle">Adaptable</h2>
          <i class="fas fa-toolbox reason-emoticon"></i>
          <p className="reasons-info">I can learn whatever is necessary to meet and surpass expectations. I am confident in my ability to adapt to any circumstances provided.</p>
        </div>
      </div>
    </section>
  )
}

export default Reasons;
