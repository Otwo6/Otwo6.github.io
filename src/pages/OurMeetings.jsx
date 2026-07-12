import { Link } from 'react-router-dom';
import './OurMeetings.css';

export default function OurMeetings() {
  return (
    <div className="meetings-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Join us at a Meeting</h1>
          </div>
        </div>
      </section>

      <main className="info-content">
        <div className="info-card">
          <h2>DCNC Members</h2>
          <p>
            The specific location and time of each meeting is <strong>communicated to our members via email</strong>. 
          </p>
          <p>
            {/* Routed internally to your Contact page */}
            Please <Link to="/contact">contact us</Link> if you are a member and haven’t received our meeting announcements.
          </p>
        </div>
        
        <div className="info-card">
          <h2>Guests &amp; Non-members</h2>
          <p>
            If you would like to attend one of our meetings, <strong>please use the button below</strong>.
          </p>
          <Link to="https://docs.google.com/forms/d/1um9Ovi54c_y7NYnWRAWuPE1aJ99KqCDZ3EyGn477p-g/viewform?edit_requested=true"  target="_blank" rel="noopener noreferrer">
            <a className="btn">
              Request an Invite
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}