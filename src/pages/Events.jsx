import { useState, useEffect } from 'react';
import './Events.css';

// Google Calendar Configuration (Pulled from .env)
const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// Safely check if variables exist (to prevent crashes if .env is missing)
const isConfigured = Boolean(CALENDAR_ID && API_KEY && !CALENDAR_ID.includes('your_calendar_id'));
const safeCalendarId = CALENDAR_ID || 'your_calendar_id@group.calendar.google.com';

// Helper Functions
const dateKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const fmtTime = (d) => {
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  return `${h}${m ? ':' + String(m).padStart(2, '0') : ''}${ampm}`;
};

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
    mk(18, 18, 0, 'Postcard Writing Night', 'Norco Community Center', 90),
    mk(24, 11, 0, 'Precinct Walk: Corona District 3', 'Meet at HQ', 120),
  ];
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [mode, setMode] = useState('month');
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Fetch events on component mount
  useEffect(() => {
    async function loadEvents() {
      if (isConfigured) {
        try {
          const timeMin = new Date(); timeMin.setMonth(timeMin.getMonth() - 1);
          const timeMax = new Date(); timeMax.setMonth(timeMax.getMonth() + 6);
          const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&maxResults=250`;
          
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const data = await res.json();
          
          const formatted = (data.items || []).map(item => ({
            title: item.summary || '(untitled event)',
            location: item.location || '',
            start: new Date(item.start.dateTime || item.start.date),
            end: new Date(item.end.dateTime || item.end.date),
            allDay: !item.start.dateTime,
          }));
          setEvents(formatted);
        } catch (err) {
          setErrorMsg(`Could not load events from Google Calendar (${err.message}). Showing demo events instead.`);
          setEvents(getDemoEvents());
        }
      } else {
        setEvents(getDemoEvents());
      }
    }
    loadEvents();
  }, []);

  // Filter events by search
  const filteredEvents = events.filter(ev => ev.title.toLowerCase().includes(search.toLowerCase()));

  // Calendar Grid Calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const totalCells = Math.ceil((firstDow + daysInMonth) / 7) * 7;
  
  const eventsByDay = {};
  filteredEvents.forEach(ev => {
    const key = dateKey(ev.start);
    if (!eventsByDay[key]) eventsByDay[key] = [];
    eventsByDay[key].push(ev);
  });

  const todayKey = dateKey(new Date());

  // Generate the calendar cells array
  const calendarCells = Array.from({ length: totalCells }).map((_, i) => {
    let cellDate, outside = false;
    if (i < firstDow) {
      cellDate = new Date(year, month - 1, daysInPrev - firstDow + i + 1);
      outside = true;
    } else if (i >= firstDow + daysInMonth) {
      cellDate = new Date(year, month + 1, i - firstDow - daysInMonth + 1);
      outside = true;
    } else {
      cellDate = new Date(year, month, i - firstDow + 1);
    }
    return { date: cellDate, outside, key: dateKey(cellDate) };
  });

  // List View calculations
  const upcomingEvents = filteredEvents
    .filter(ev => ev.end >= new Date(new Date().setHours(0,0,0,0)))
    .sort((a, b) => a.start - b.start);

  return (
    <div className="events-page" onClick={() => setMenuOpen(false)}>
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Events</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="toolbar">
          <div className="search-box">
            <span>&#128269;</span>
            <input 
              type="text" 
              placeholder="Search for events" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
          <div className="toolbar-actions">
            <div className="view-toggle">
              <button className={mode === 'list' ? 'active' : ''} onClick={() => setMode('list')}>List</button>
              <button className={mode === 'month' ? 'active' : ''} onClick={() => setMode('month')}>Month</button>
            </div>
            
            <div className="subscribe-wrap" onClick={(e) => e.stopPropagation()}>
              <button className="btn" onClick={() => setMenuOpen(!menuOpen)}>Subscribe to calendar &#9662;</button>
              <div className={`subscribe-menu ${menuOpen ? 'open' : ''}`}>
                <a href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(safeCalendarId)}`} target="_blank" rel="noopener noreferrer">Add to Google Calendar</a>
                <a href={`https://calendar.google.com/calendar/ical/${encodeURIComponent(safeCalendarId)}/public/basic.ics`} target="_blank" rel="noopener noreferrer">Download .ics file</a>
              </div>
            </div>
          </div>
        </div>

        {mode === 'month' ? (
          <>
            <div className="month-nav">
              <div className="arrow" onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>&#8249;</div>
              <div className="arrow" onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>&#8250;</div>
              <button className="today-btn" onClick={() => setCurrentDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))}>This Month</button>
              <div className="month-label">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            </div>

            <div className="calendar">
              <div className="cal-weekdays">
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              </div>
              <div className="cal-grid">
                {calendarCells.map((cell, idx) => (
                  <div key={idx} className={`cal-cell ${cell.outside ? 'outside' : ''} ${cell.key === todayKey ? 'today' : ''}`}>
                    <div className="cal-daynum">{cell.date.getDate()}</div>
                    {(eventsByDay[cell.key] || []).slice(0, 4).map((ev, i) => (
                      <div key={i} className={`cal-event ${cell.key === todayKey ? 'featured' : ''}`} title={`${ev.title} ${ev.location ? '— ' + ev.location : ''}`}>
                        <span className="ev-time">{ev.allDay ? '' : fmtTime(ev.start)} </span>
                        {ev.title}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="list-view" style={{ display: 'block' }}>
            {upcomingEvents.length === 0 ? (
              <div className="empty-note">No upcoming events found.</div>
            ) : (
              upcomingEvents.map((ev, idx) => (
                <div key={idx} className="list-item">
                  <div className="list-date">
                    <div className="dow">{ev.start.toLocaleDateString('en-US', { month: 'short' })}</div>
                    <div className="dnum">{ev.start.getDate()}</div>
                  </div>
                  <div className="list-body">
                    <h3>{ev.title}</h3>
                    <div className="lt">{ev.allDay ? 'All day' : `${fmtTime(ev.start)} – ${fmtTime(ev.end)}`}</div>
                    {ev.location && <div className="ll">{ev.location}</div>}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {(!isConfigured || errorMsg) && (
          <div className="config-note">
            {errorMsg || (
              <>This calendar is running on placeholder demo events. To connect it to your real Google Calendar: make the calendar public, then add <code>VITE_CALENDAR_ID</code> and <code>VITE_GOOGLE_API_KEY</code> to your <code>.env</code> file.</>
            )}
          </div>
        )}
      </main>
    </div>
  );
}