import { Link } from 'react-router-dom';
import './Resources.css';

export default function Resources() {
  return (
    <div className="resources-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Resources &amp; Tools</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="resource-grid">

          <Link to="/political-action" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <circle cx="34" cy="46" r="9" fill="var(--indigo)" />
                <circle cx="50" cy="40" r="10" fill="var(--red)" />
                <circle cx="67" cy="46" r="9" fill="var(--green)" />
                <rect x="24" y="55" width="20" height="24" rx="3" fill="var(--indigo)" />
                <rect x="40" y="50" width="20" height="29" rx="3" fill="var(--red)" />
                <rect x="56" y="55" width="20" height="24" rx="3" fill="var(--green)" />
                <rect x="44" y="20" width="12" height="16" rx="2" fill="var(--gold)" />
              </svg>
            </div>
            <h3>Political Action Updates</h3>
            <p>Get the latest on our Political Action efforts.</p>
            <span className="card-link">View Updates &rarr;</span>
          </Link>

          <Link to="/directory" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <path d="M28 66 A22 22 0 0 1 72 66 Z" fill="var(--red)" />
                <circle cx="50" cy="40" r="10" fill="var(--gold)" />
                <circle cx="22" cy="70" r="7" fill="var(--indigo)" />
                <circle cx="35" cy="70" r="7" fill="var(--green)" />
                <circle cx="65" cy="70" r="7" fill="var(--green)" />
                <circle cx="78" cy="70" r="7" fill="var(--indigo)" />
                <rect x="16" y="75" width="12" height="10" rx="2" fill="var(--indigo)" />
                <rect x="29" y="75" width="12" height="10" rx="2" fill="var(--green)" />
                <rect x="59" y="75" width="12" height="10" rx="2" fill="var(--green)" />
                <rect x="72" y="75" width="12" height="10" rx="2" fill="var(--indigo)" />
              </svg>
            </div>
            <h3>Democratic &amp; Progressive Groups</h3>
            <p>Stay informed and engaged with links and resources to support the Democratic movement and take action.</p>
            <span className="card-link">See the List &rarr;</span>
          </Link>

          <Link to="/government" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <rect x="20" y="70" width="60" height="8" rx="1.5" fill="var(--indigo)" />
                <rect x="24" y="42" width="6" height="26" fill="var(--red)" />
                <rect x="35" y="42" width="6" height="26" fill="var(--red)" />
                <rect x="47" y="42" width="6" height="26" fill="var(--red)" />
                <rect x="59" y="42" width="6" height="26" fill="var(--red)" />
                <rect x="70" y="42" width="6" height="26" fill="var(--red)" />
                <polygon points="50,18 78,38 22,38" fill="var(--indigo)" />
                <rect x="46" y="24" width="8" height="8" fill="var(--gold)" />
              </svg>
            </div>
            <h3>Government Info</h3>
            <p>Quick links and info to help you make your voice heard in local, state, and national government.</p>
            <span className="card-link">Explore Links &rarr;</span>
          </Link>

          <Link to="/our-meetings" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                {/* Notice strokeWidth below */}
                <rect x="26" y="28" width="48" height="46" rx="4" fill="#fff" stroke="var(--indigo)" strokeWidth="3" />
                <rect x="34" y="40" width="32" height="4" rx="2" fill="var(--green)" />
                <rect x="34" y="50" width="32" height="4" rx="2" fill="var(--green)" />
                <rect x="34" y="60" width="20" height="4" rx="2" fill="var(--green)" />
                <circle cx="24" cy="34" r="7" fill="var(--indigo)" />
                <circle cx="24" cy="58" r="7" fill="var(--red)" />
                <circle cx="76" cy="46" r="7" fill="var(--gold)" />
              </svg>
            </div>
            <h3>Our Meetings</h3>
            <p>Our General Membership meetings are held on the last Tuesday of every month. Click to learn more.</p>
            <span className="card-link">Meeting Details &rarr;</span>
          </Link>

          <Link to="/public-meetings" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <rect x="20" y="34" width="60" height="34" rx="3" fill="#fff" stroke="var(--indigo)" strokeWidth="3" />
                <polygon points="50,34 20,34 50,50" fill="var(--red)" opacity="0.85" />
                <polygon points="50,34 80,34 50,50" fill="var(--green)" opacity="0.85" />
                <circle cx="30" cy="76" r="6" fill="var(--indigo)" />
                <circle cx="50" cy="80" r="6" fill="var(--red)" />
                <circle cx="70" cy="76" r="6" fill="var(--green)" />
              </svg>
            </div>
            <h3>Volunteer Opportunities</h3>
            <p>We need volunteers to help monitor City Councils, School Boards, and County Supervisors.</p>
            <span className="card-link">Sign Up to Help &rarr;</span>
          </Link>

          <Link to="https://secure.actblue.com/donate/democrats-of-corona-norco-1" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <path d="M50 78 C30 62 20 50 20 38 A14 14 0 0 1 44 28 L50 34 L56 28 A14 14 0 0 1 80 38 C80 50 70 62 50 78Z" fill="var(--red)" />
                <circle cx="50" cy="46" r="9" fill="#fff" />
                <rect x="46" y="41" width="8" height="10" rx="1.5" fill="var(--indigo)" />
              </svg>
            </div>
            <h3>Donate</h3>
            <p>Your support keeps our grassroots strong. Every gift helps us reach voters, train volunteers, and fight for our shared values.</p>
            <span className="card-link">Donate Today &rarr;</span>
          </Link>

          <Link to="/membership#renew" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <circle cx="50" cy="50" r="24" fill="none" stroke="var(--indigo)" strokeWidth="6" />
                {/* Notice strokeWidth, strokeLinecap, strokeLinejoin below */}
                <path d="M50 26 L58 34 L50 42" fill="none" stroke="var(--red)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 74 L42 66 L50 58" fill="none" stroke="var(--red)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="6" fill="var(--gold)" />
              </svg>
            </div>
            <h3>Renew Your Membership</h3>
            <p>Renew your club membership and help keep our grassroots work going strong.</p>
            <span className="card-link">Renew Now &rarr;</span>
          </Link>

          <Link to="/membership#renew" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <path d="M32 76 V44 L50 30 L68 44 V76 Z" fill="#fff" stroke="var(--indigo)" strokeWidth="3" />
                <rect x="42" y="60" width="10" height="16" fill="var(--red)" />
                <rect x="40" y="48" width="8" height="8" fill="var(--green)" />
                <rect x="54" y="48" width="8" height="8" fill="var(--green)" />
              </svg>
            </div>
            <h3>Update Member Info</h3>
            <p>Help us keep our records up to date. If you've moved, changed your phone number, or switched emails, let us know.</p>
            <span className="card-link">Update Info &rarr;</span>
          </Link>

          <Link to="/protect-vote" className="resource-card">
            <div className="resource-icon">
              <svg viewBox="0 0 100 100" width="88" height="88">
                <circle cx="50" cy="50" r="46" fill="var(--cream-deep)" />
                <path d="M50 20 L76 30 V50 C76 66 65 78 50 82 C35 78 24 66 24 50 V30 Z" fill="var(--indigo)" />
                <path d="M38 50 L46 58 L64 40" fill="none" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Protect Your Vote</h3>
            <p>Includes sign up for track your ballot, what to do when you see an issue at the polls, and links to track your ballot.</p>
            <span className="card-link">Learn What to Do &rarr;</span>
          </Link>

        </div>
      </main>
    </div>
  );
}