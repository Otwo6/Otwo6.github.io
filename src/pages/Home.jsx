import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Google Calendar Configuration
const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const isConfigured = !CALENDAR_ID.includes('your_calendar_id') && !API_KEY.includes('YOUR_GOOGLE_API_KEY');

// Helper to format time (e.g., "6:00 PM")
const fmtTime = (d) => {
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}${m ? ':' + String(m).padStart(2, '0') : ''} ${ampm}`;
};

// Demo Events for testing
const getDemoEvents = () => {
  const now = new Date();
  const mk = (offsetDays, hour, minute, title, location, durationMin = 60) => {
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offsetDays, hour, minute);
    return { title, location, start, end: new Date(start.getTime() + durationMin * 60000) };
  };
  return [
    mk(1, 18, 0, 'Executive Board Meeting', 'Corona Public Library, Community Room', 90),
    mk(2, 18, 30, 'Norco Town Council Meeting', 'Norco City Hall Council Chamber', 120),
    mk(3, 18, 0, 'Corona City Council Meeting', 'Corona City Hall', 180),
    mk(6, 10, 0, 'Voter Registration Drive', 'Corona Certified Farmers Market', 180),
    mk(9, 19, 0, 'General Membership Meeting', 'In person & on Zoom', 90),
    mk(15, 9, 30, 'Riv. County Board of Supervisors', 'County Administrative Center', 150),
    mk(18, 18, 0, 'Postcard Writing Night', 'Norco Community Center', 90)
  ];
};

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events on component mount
  useEffect(() => {
    async function loadEvents() {
      if (isConfigured) {
        try {
          const timeMin = new Date(); 
          const timeMax = new Date(); timeMax.setMonth(timeMax.getMonth() + 6); // Look 6 months ahead
          const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&maxResults=50`;
          
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const data = await res.json();
          
          const formatted = (data.items || []).map(item => ({
            title: item.summary || '(untitled event)',
            location: item.location || '',
            start: new Date(item.start.dateTime || item.start.date),
            end: new Date(item.end.dateTime || item.end.date),
            allDay: !item.start.dateTime,
            link: item.htmlLink
          }));
          setEvents(formatted);
        } catch (err) {
          console.error('Calendar error:', err);
          setEvents(getDemoEvents());
        }
      } else {
        setEvents(getDemoEvents());
      }
      setLoading(false);
    }
    loadEvents();
  }, []);

  // Filter for future events, sort chronologically, and grab exactly the first 6
  const upcomingEvents = events
    .filter(ev => ev.end >= new Date(new Date().setHours(0,0,0,0)))
    .sort((a, b) => a.start - b.start)
    .slice(0, 6);

  return (
    <main>
      <section className="hero" id="hero">
        <div className="wrap">
          <div className="hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
          <h1>From Circle City, to Horsetown, to Temescal Valley.</h1>
          
          <p style={{ fontSize: '1.75rem', margin: '0 0 20px 0', opacity: 0.9 }}>
            We're building democratic power close to home.
          </p>

          <div className="hero-logo-center">
            <img src="/DCNC.png" alt="Democrats of Corona Norco Logo" />
          </div>

          <div>
            <Link to="/membership" className="btn" style={{ fontSize: '16px', padding: '16px 38px' }}>
              Join Us
            </Link>
          </div>
          {/* --- NEW AWARD SECTION --- */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '10px 20px', 
            marginBottom: '30px',
            fontSize: '15px',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <span style={{ fontSize: '20px' }} aria-hidden="true">🏆</span>
            <span>Winner of the Spirit of Democracy Celebration Defiant Blue Award 2026</span>
          </div>
          {/* ------------------------- */}
        </div>
      </section>

      <div className="wrap pillars" id="about-pillar">
        <div className="pillar about">
          <h2>About Us</h2>
          <p>As a chartered club of the Riverside County Democratic Party, we organize Democrats across Corona and Norco. We're an all-volunteer crew that treats local politics like the neighborhood project it is.</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
        <div className="pillar donate">
          <h2>Donate</h2>
          <p>Every dollar stays local: yard signs for Corona, phone banks for Norco, and more. We're entirely volunteer-run, so your gift goes straight to the work, not overhead.</p>
          
          <a href="https://secure.actblue.com/donate/democrats-of-corona-norco-1" target="_blank" rel="noopener noreferrer" className="btn">
            Donate Today
          </a>
          
        </div>
        <div className="pillar join">
          <h2>Join Us</h2>
          <p>Whether you're new to organizing or a longtime precinct captain, there's a seat for you. Come to a meeting, meet your neighbors, and help decide what we tackle next in Corona-Norco.</p>
          <Link to="/membership" className="btn">Membership</Link>
        </div>
      </div>

      <div className="wrap" id="events">
        <div className="section-head">
          <h2>Upcoming Events</h2>
          <div className="rule"></div>
        </div>
        <div className="events-section">
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Loading upcoming events...</div>
          ) : (
            <div className="events-grid">
              {upcomingEvents.length === 0 ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px', color: '#666' }}>
                  No upcoming events scheduled right now. Check back soon!
                </div>
              ) : (
                upcomingEvents.map((ev, idx) => (
                  <div className="event-card" key={idx}>
                    <h3>{ev.title}</h3>
                    <div className="event-time">
                      {ev.start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} &middot; {ev.allDay ? 'All Day' : `${fmtTime(ev.start)}–${fmtTime(ev.end)}`}
                    </div>
                    <div className="event-loc">{ev.location || 'Location TBA'}</div>
                    <a 
                      href={ev.link || "/events"} 
                      target={ev.link ? "_blank" : "_self"} 
                      rel="noopener noreferrer" 
                      className="details"
                    >
                      View Details
                    </a>
                  </div>
                ))
              )}
            </div>
          )}

          <div className="center">
            <Link to="/events" className="btn outline" style={{ borderColor: 'var(--indigo)', color: 'var(--indigo)' }}>
              Click for More Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}