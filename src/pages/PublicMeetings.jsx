import { useState, useEffect } from 'react';
import './PublicMeetings.css';

// Google Calendar Configuration (Same as your Events page)
const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const isConfigured = !CALENDAR_ID.includes('your_calendar_id') && !API_KEY.includes('YOUR_GOOGLE_API_KEY');

const fmtTime = (d) => {
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  return `${h}${m ? ':' + String(m).padStart(2, '0') : ''}${ampm}`;
};

// Demo Events for testing (These use keywords so our filters catch them)
const getDemoEvents = () => {
  const now = new Date();
  const mk = (offsetDays, hour, minute, title) => {
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offsetDays, hour, minute);
    return { title, start, end: new Date(start.getTime() + 60 * 60000) };
  };
  return [
    mk(2, 18, 0, 'Moreno Valley City Council Meeting'),
    mk(5, 15, 0, 'Riverside City Council'),
    mk(12, 18, 0, 'Moreno Valley City Council Meeting'),
    mk(8, 9, 30, 'Riv. County Board of Supervisors'),
    mk(15, 9, 30, 'Riv. County Board of Supervisors'),
    mk(20, 17, 30, 'RUSD Board Meeting'),
    mk(22, 18, 0, 'Corona City Council Meeting'),
  ];
};

export default function PublicMeetings() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      if (isConfigured) {
        try {
          const timeMin = new Date();
          const timeMax = new Date(); timeMax.setMonth(timeMax.getMonth() + 3); // Look 3 months ahead
          const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&maxResults=100`;
          
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const data = await res.json();
          
          const formatted = (data.items || []).map(item => ({
            title: item.summary || '(untitled event)',
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
      loading(false); // Make sure to keep this inside the useEffect!
    }
    loadEvents();
  }, []);

  // Filter events into categories based on keywords in their titles
  const upcomingEvents = events.filter(ev => ev.end >= new Date(new Date().setHours(0,0,0,0)));
  
  const cityCouncilEvents = upcomingEvents.filter(ev => 
    ev.title.toLowerCase().includes('city council')
  );
  
  const countyEvents = upcomingEvents.filter(ev => 
    ev.title.toLowerCase().includes('county') || ev.title.toLowerCase().includes('supervisor')
  );
  
  const schoolBoardEvents = upcomingEvents.filter(ev => 
    ev.title.toLowerCase().includes('school') || ev.title.toLowerCase().includes('rusd') || ev.title.toLowerCase().includes('cnusd') || ev.title.toLowerCase().includes('board of education')
  );

  // Helper component to render an event card
  const EventCard = ({ ev }) => (
    <div className="event-card">
      <div className="event-date">
        <div className="month">{ev.start.toLocaleDateString('en-US', { month: 'short' })}</div>
        <div className="day">{ev.start.getDate()}</div>
      </div>
      <div className="event-details">
        <h3>{ev.title}</h3>
        <div className="time">{ev.allDay ? 'All Day' : fmtTime(ev.start)}</div>
      </div>
      <div className="event-action">
        <a href={ev.link || "#"} target="_blank" rel="noopener noreferrer">View Details</a>
      </div>
    </div>
  );

  return (
    <div className="public-meetings-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Public Meetings</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="content-wrap">
          <p className="intro-text">
            One of the most powerful ways to protect our community and democracy is by keeping watch on our local government. Decisions made in <b>City, County, and School District meetings</b> impact everything from public safety to education, housing, and civil rights. Too often, these meetings fly under the radar. This page is your go-to resource for monitoring local public meetings.
          </p>

          <div className="jump-menu">
            <a href="#CityCouncil">City Council</a>
            <a href="#CountyBOS">Riverside County</a>
            <a href="#SchoolBoard">School Boards</a>
            <a href="#Resources">Resources &amp; Tools</a>
          </div>

          {loading ? (
            <div className="empty-note">Loading upcoming meetings...</div>
          ) : (
            <>
              {/* City Council Section */}
              <div className="meeting-section" id="CityCouncil">
                <h2>City Council</h2>
                <div className="event-list">
                  {cityCouncilEvents.length > 0 ? (
                    cityCouncilEvents.map((ev, i) => <EventCard key={i} ev={ev} />)
                  ) : (
                    <div className="empty-note">No upcoming City Council meetings found.</div>
                  )}
                </div>
              </div>

              {/* Riverside County Section */}
              <div className="meeting-section" id="CountyBOS">
                <h2>Riverside County</h2>
                <div className="event-list">
                  {countyEvents.length > 0 ? (
                    countyEvents.map((ev, i) => <EventCard key={i} ev={ev} />)
                  ) : (
                    <div className="empty-note">No upcoming County Board meetings found.</div>
                  )}
                </div>
              </div>

              {/* School Boards Section */}
              <div className="meeting-section" id="SchoolBoard">
                <h2>School Boards</h2>
                <div className="event-list">
                  {schoolBoardEvents.length > 0 ? (
                    schoolBoardEvents.map((ev, i) => <EventCard key={i} ev={ev} />)
                  ) : (
                    <div className="empty-note">No upcoming School Board meetings found.</div>
                  )}
                </div>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  );
}