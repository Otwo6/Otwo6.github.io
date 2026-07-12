import './ProtectVote.css';

export default function ProtectVote() {
  return (
    <div className="protect-vote-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Protect the Vote</h1>
          </div>
        </div>
      </section>

      <main className="content-wrap">
        
        <div className="alert-box">
          <h2>Voter Protection Hotline</h2>
          <a href="tel:+18773218683">1 (877) 321-VOTE (8683)</a>
        </div>

        <div className="text-section">
          <h2>Document and Report</h2>
          <ol>
            <li><strong>Document:</strong> Write down what happened and how it impacted someone’s ability to vote. Include as much detail as possible:
              <ul>
                <li><strong>Who:</strong> The voter, group of voters, or polling place affected.</li>
                <li><strong>When:</strong> The time the issue occurred.</li>
                <li><strong>Where:</strong> Exact location of the polling place or drop box, with address if possible. <em>Example: “Vote Center at George Washington Middle School, 1234 Cherry St., Sacramento, CA 95812.”</em></li>
              </ul>
            </li>
            <li><strong>Report:</strong> Call the Voter Protection Hotline at <a href="tel:+18773218683">1 (877) 321-8683</a>.</li>
          </ol>
        </div>

        <div className="text-section">
          <h2>Issues to Report</h2>
          <div className="grid-2">
            <div className="card">
              <h3>Logistical Issues</h3>
              <ul>
                <li>Vote centers opening late or closing early</li>
                <li>Machine malfunctions</li>
                <li>Long lines</li>
                <li>Ballot supply shortages</li>
              </ul>
            </div>
            <div className="card">
              <h3>Voter Protection Issues</h3>
              <ul>
                <li>Electioneering within 100 feet</li>
                <li>Voter intimidation</li>
                <li>Improper challenges to voters</li>
                <li>Federal interference</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-section">
          <h2>If You See I.C.E., National Guard, or Armed Federal Personnel at Polls</h2>
          <p>Report immediately to the Voter Protection Hotline. <strong>Your safety comes first.</strong></p>
          <div className="grid-2">
            <div className="card do-card">
              <h3>Do</h3>
              <ul>
                <li>Move to a safe distance</li>
                <li>Call <a href="tel:+18773218683">1 (877) 321-VOTE (8683)</a></li>
                <li>Observe and document from a safe distance</li>
              </ul>
            </div>
            <div className="card dont-card">
              <h3>Do Not</h3>
              <ul>
                <li>Approach or engage</li>
                <li>Interfere with activities</li>
              </ul>
              <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--charcoal)', fontStyle: 'italic' }}>
                Always prioritize safety.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a 
            href="https://democratsofgreaterriverside.com/wp-content/uploads/2025/10/Protect-the-vote_What-to-do-1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Download a Print Version (PDF)
          </a>
        </div>

        <div className="section-divider"><div className="rule"></div></div>

        <div className="text-section" style={{ textAlign: 'center', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
          <h2>Track Your Ballot & Check Registration</h2>
          <p style={{ marginBottom: '16px' }}>
            Verify your voter registration details and track the status of your vote-by-mail ballot using the official California Secretary of State tool.
          </p>
          <a 
            href="https://voterstatus.sos.ca.gov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{ display: 'inline-block' }}
          >
            Track Your Ballot Now
          </a>
        </div>

      </main>
    </div>
  );
}