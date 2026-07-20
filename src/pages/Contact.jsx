import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    officer: 'General Club', // The added officer field
    topic: 'General inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This dynamically formats the email subject and body, then opens the user's email client
    const subject = encodeURIComponent(`[${formData.topic}] Website Inquiry from ${formData.name}`);
    
    // Adds the (FOR THE [OFFICER]) note at the very top of the email body
    const body = encodeURIComponent(
      `(FOR THE ${formData.officer.toUpperCase()})\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:democratsofcoronanorco@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="content-wrap" id="emails">
          <h2>Get in Touch</h2>
          <p>Have a question or want to get involved? Send us a message using the form below, or reach out to our general email directly.</p>

          <div className="contact-grid">
            
            {/* Left Column: The Contact Form */}
            <div className="col">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>

                {/* DROPDOWN: Direct to specific officer */}
                <div className="form-group">
                  <label htmlFor="officer">Direct Message To</label>
                  <select id="officer" name="officer" value={formData.officer} onChange={handleChange}>
                    <option value="General Club">General Club (Info)</option>
                    <option value="President">President</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Treasurer">Treasurer</option>
                    <option value="Secretary">Secretary</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="topic">Select Topic</label>
                  <select id="topic" name="topic" value={formData.topic} onChange={handleChange}>
                    <option value="General inquiry">General inquiry</option>
                    <option value="Question about event">Question about event</option>
                    <option value="Notice of event">Notice of event</option>
                    <option value="Request to speak">Request to speak</option>
                    <option value="Membership question">Membership question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="submit-btn">Prepare Message</button>
              </form>
            </div>

            {/* Right Column: General Email & Mailing Info */}
            <div className="col">
              <h3>General Information</h3>
              <ul>
                <li>
                  <strong>Club Email:</strong> <a href="mailto:democratsofcoronanorco@gmail.com">DemocratsOfCoronaNorco@gmail.com</a>
                </li>
              </ul>

              <div id="mailing" style={{ marginTop: '40px' }}>
                <h3>Mailing Address</h3>
                <div className="mailing-box">
                  <p>
                    Democrats of Corona Norco<br />
                    1973 Foothill Parkway Unit 110<br />
                    P.O. Box 467<br />
                    Corona, CA 92881
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="section-divider"><div className="rule"></div></div>
      </main>
    </div>
  );
}