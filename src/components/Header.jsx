import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import the social media icons
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaReddit } from 'react-icons/fa';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const headerRef = useRef(null);

  // Inline style object to remove outlines and backgrounds
  const iconStyle = { border: 'none', outline: 'none', textDecoration: 'none', background: 'transparent' };

  // Helper to close all menus when a link is clicked
  const closeMenus = () => {
    setIsNavOpen(false);
    setIsAboutOpen(false);
    setIsHomeOpen(false); 
    setIsEventsOpen(false);
    setIsResourcesOpen(false);
    setIsMembershipOpen(false);
    setIsContactOpen(false);
  };

  // Listen for clicks outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className="header-inner">
          <div className="brand">
            <div className="brand-mark">
              <Link to="/" onClick={closeMenus}>
                <img src="/DCNC.png" alt="Democrats of Corona Norco logo" />
              </Link>
            </div>
            <Link to="/" onClick={closeMenus}>
              <div className="brand-name">
                Democrats of Corona Norco
              </div>
            </Link>
          </div>
          
          <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
            
            {/* Dropdown Container for Home */}
            <div className="nav-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/" end onClick={closeMenus}>Home</NavLink>
                <span 
                  className={`dropdown-caret ${isHomeOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsHomeOpen(!isHomeOpen);
                    setIsAboutOpen(false); 
                    setIsEventsOpen(false);
                    setIsResourcesOpen(false);
                    setIsMembershipOpen(false);
                    setIsContactOpen(false);
                  }}
                >
                  &#9662;
                </span>
              </div>
              
              <div className={`dropdown-menu ${isHomeOpen ? 'show' : ''}`}>
                <NavLink to="/#hero" onClick={closeMenus}>Home</NavLink>
                <NavLink to="/#events" onClick={closeMenus}>Upcoming Events</NavLink>
              </div>
            </div>
            
            {/* Dropdown Container for About */}
            <div className="nav-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/about" end onClick={closeMenus}>About</NavLink>
                <span 
                  className={`dropdown-caret ${isAboutOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsAboutOpen(!isAboutOpen);
                    setIsHomeOpen(false); 
                    setIsEventsOpen(false);
                    setIsResourcesOpen(false);
                    setIsMembershipOpen(false);
                    setIsContactOpen(false);
                  }}
                >
                  &#9662;
                </span>
              </div>
              
              <div className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`}>
                <NavLink to="/about#club" onClick={closeMenus}>Our Club</NavLink>
                <NavLink to="/about#team" onClick={closeMenus}>Our Team</NavLink>
              </div>
            </div>

            {/* Dropdown Container for Events */}
            <div className="nav-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/events" end onClick={closeMenus}>Events</NavLink>
                <span 
                  className={`dropdown-caret ${isEventsOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsEventsOpen(!isEventsOpen);
                    setIsHomeOpen(false); 
                    setIsAboutOpen(false);
                    setIsResourcesOpen(false);
                    setIsMembershipOpen(false);
                    setIsContactOpen(false);
                  }}
                >
                  &#9662;
                </span>
              </div>
              
              <div className={`dropdown-menu ${isEventsOpen ? 'show' : ''}`}>
                <NavLink to="/events" end onClick={closeMenus}>All Events</NavLink>
                <NavLink to="/events" end onClick={closeMenus}>Calendar</NavLink>
              </div>
            </div>

            {/* Dropdown Container for Resources */}
            <div className="nav-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/resources" end onClick={closeMenus}>Resources</NavLink>
                <span 
                  className={`dropdown-caret ${isResourcesOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsResourcesOpen(!isResourcesOpen);
                    setIsHomeOpen(false); 
                    setIsAboutOpen(false);
                    setIsEventsOpen(false);
                    setIsMembershipOpen(false);
                    setIsContactOpen(false);
                  }}
                >
                  &#9662;
                </span>
              </div>
              
              <div className={`dropdown-menu ${isResourcesOpen ? 'show' : ''}`}>
                <NavLink to="/resources" end onClick={closeMenus}>All Resources</NavLink>
                <NavLink to="/political-action" onClick={closeMenus}>Political Action</NavLink>
                <NavLink to="/directory" onClick={closeMenus}>Other Groups</NavLink>
                <NavLink to="/government" onClick={closeMenus}>Government Info</NavLink>
                <NavLink to="/our-meetings" onClick={closeMenus}>Our Meetings</NavLink>
                <NavLink to="/public-meetings" onClick={closeMenus}>Public Meetings</NavLink>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Donate</a>
                <NavLink to="/membership#renew" onClick={closeMenus}>Renew Membership</NavLink>
                <NavLink to="/membership#renew" onClick={closeMenus}>Update Member Info</NavLink>
                <NavLink to="/protect-vote" onClick={closeMenus}>Voter Info</NavLink>
              </div>
            </div>

            {/* Dropdown Container for Membership */}
            <div className="nav-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/membership" end onClick={closeMenus}>Membership</NavLink>
                <span 
                  className={`dropdown-caret ${isMembershipOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMembershipOpen(!isMembershipOpen);
                    setIsHomeOpen(false); 
                    setIsAboutOpen(false);
                    setIsEventsOpen(false);
                    setIsResourcesOpen(false);
                    setIsContactOpen(false);
                  }}
                >
                  &#9662;
                </span>
              </div>
              
              <div className={`dropdown-menu ${isMembershipOpen ? 'show' : ''}`}>
                <NavLink to="/membership#renew" onClick={closeMenus}>Renew Membership</NavLink>
                <NavLink to="/membership#join" onClick={closeMenus}>Join as a New Member</NavLink>
              </div>
            </div>

            {/* Dropdown Container for Contact */}
            <div className="nav-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/contact" end onClick={closeMenus}>Contact</NavLink>
                <span 
                  className={`dropdown-caret ${isContactOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsContactOpen(!isContactOpen);
                    setIsHomeOpen(false); 
                    setIsAboutOpen(false);
                    setIsEventsOpen(false);
                    setIsResourcesOpen(false);
                    setIsMembershipOpen(false);
                  }}
                >
                  &#9662;
                </span>
              </div>
              
              <div className={`dropdown-menu ${isContactOpen ? 'show' : ''}`}>
                <NavLink to="/contact#emails" onClick={closeMenus}>Email Us</NavLink>
                <NavLink to="/contact#mailing" onClick={closeMenus}>Mail Us</NavLink>
              </div>
            </div>

          </nav>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            &#9776;
          </button>
        </div>
      </header>

      <div className="social-strip">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', alignItems: 'center' }}>
          <a href="https://www.instagram.com/democratsofcoronanorco/" target="_blank" rel="noopener noreferrer" title="Instagram" style={iconStyle}><FaInstagram size={20} /></a>
          <a href="https://www.facebook.com/people/Democrats-of-Corona-Norco/61591393507103/" target="_blank" rel="noopener noreferrer" title="Facebook" style={iconStyle}><FaFacebook size={20} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" style={iconStyle}><FaYoutube size={20} /></a>
        </div>
      </div>
    </>
  );
}