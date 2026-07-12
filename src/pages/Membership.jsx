import { Link } from 'react-router-dom';
import './Membership.css';

export default function Membership() {
  const formUrl = "https://docs.google.com/forms/d/1hN8Muh3oHOYYyC9Nyb7l60YYHXQGdIbIwzsgC578b0M/viewform?edit_requested=true";

  return (
    <div className="membership-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Membership Information</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="content-wrap">
          <p className="intro-line">Join us in this fight! Now more than ever we need you.</p>

          <div className="two-col">
            <div>
              <h3>Are you passionate about democracy, equality, and progress?</h3>
              <ul>
                <li>Do you want to make a real difference in Corona and Norco?</li>
                <li>Do you want your voice heard in the Democratic Party?</li>
              </ul>
              <p className="callout">Then join our club!</p>
            </div>
            <div>
              <h3>Why join?</h3>
              <ul>
                <li>Influence local politics and push for the policies that matter most to you.</li>
                <li>Connect with fellow Democrats who share your values and vision for Corona-Norco's future.</li>
                <li>Engage with the Riverside County and California Democratic Parties.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-divider"><div className="rule"></div></div>

        <div className="content-wrap">
          <h2 className="section-head" id="renew">Already a Member? Renew Today!</h2>
          <div className="renew-row">
            <p>Renew your club membership and help keep our grassroots work going strong. Your support powers local organizing, voter outreach, and the fight to elect Democrats up and down the ballot in Corona and Norco. Choose the option below that fits your situation.</p>
            <div className="renew-options">
              <div className="renew-card">
                <h4>Nothing Has Changed</h4>
                <p>Your contact info, address, and membership level are all still accurate. Renew quickly with your info on file.</p>
                <a href={'https://docs.google.com/forms/d/16I4OPZSO1lP9C3EOkXcAx1LbvOvVx8lz2F-UMeYejf4/viewform?edit_requested=true'} target="_blank" rel="noopener noreferrer" className="btn">Quick Renew</a>
              </div>
              <div className="renew-card">
                <h4>My Info Has Changed</h4>
                <p>Moved, got a new email or phone number, or want to switch your membership level? Update your details as you renew.</p>
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn red">Renew &amp; Update Info</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"><div className="rule"></div></div>

        <div className="content-wrap">
          <h2 className="section-head" id="join">Sign Up as a New Member</h2>

          <div className="dues-panel">
            <div>
              <h4>We offer three types of membership:</h4>
              <ul>
                <li>Regular Voting Member (Receive T-Shirt): <b>$45/yr</b></li>
                <li>Regular Voting Member: <b>$30/yr</b></li>
                <li>Voting Member - Student / Fixed Income: <b>$15/yr</b></li>
                <li>Voting Member - Spouse / Partner / Household Member: <b>$15/yr</b></li>
              </ul>
            </div>
            <div>
              <h4>As a member, you'll be able to:</h4>
              <ul>
                <li>Participate in club votes and make motions (associate members excluded).</li>
                <li>Run for and be elected to the club's Executive Board.</li>
                <li>Meet and speak to local and state candidates running for office.</li>
                <li>Participate in a forum where you can help shape democracy.</li>
              </ul>
            </div>
          </div>

          <div className="ready-row">
            <div className="ready-col">
              <h4>Ready to Join?</h4>
              <p style={{ fontSize: '14.5px', marginBottom: '14px' }}>Becoming a member takes only two easy steps:</p>
              <ol>
                <li><b>Step 1:</b> Fill out and submit the membership application.</li>
                <li><b>Step 2:</b> Pay your annual membership dues.</li>
              </ol>
            </div>
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn red">Click Here to Start Application</a>
          </div>

          <p className="questions-line">Do you have any questions about membership? Please don't hesitate to email our <a href="#">Membership Committee</a>.</p>
        </div>
      </main>
    </div>
  );
}