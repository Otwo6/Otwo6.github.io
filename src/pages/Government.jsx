import { useState } from 'react';
import './Government.css';

export default function Government() {
  // State for the main accordion and the two nested accordions
  const [openTop, setOpenTop] = useState(1);
  const [openCity, setOpenCity] = useState(1);
  const [openSchool, setOpenSchool] = useState(1);

  const toggleTop = (i) => setOpenTop(openTop === i ? null : i);
  const toggleCity = (i) => setOpenCity(openCity === i ? null : i);
  const toggleSchool = (i) => setOpenSchool(openSchool === i ? null : i);

  return (
    <div className="government-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Our Government</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="intro-text">
          <p>Quick links to City Council, School Boards, and other local meetings so you can see where decisions are made and make your voice heard. State and national resources are also available, from Sacramento to Washington, DC.</p>
        </div>

        <div className="content-wrap">
          <div className="accordion">

            {/* TOP 1: City Councils */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 1 ? 'active' : ''}`} onClick={() => toggleTop(1)}>
                <span className="icon">{openTop === 1 ? '-' : '+'}</span> City Councils
              </button>
              <div className={`accordion-content ${openTop === 1 ? 'open' : ''}`}>
                <div className="accordion-body">
                  <div className="accordion">
                    
                    {/* Inner: Corona */}
                    <div className="accordion-item">
                      <button className={`accordion-header ${openCity === 1 ? 'active' : ''}`} onClick={() => toggleCity(1)}>
                        <span className="icon">{openCity === 1 ? '-' : '+'}</span> Corona
                      </button>
                      <div className={`accordion-content ${openCity === 1 ? 'open' : ''}`}>
                        <div className="accordion-body flat-body">
                          <div>
                            <h6>City Council</h6>
                            <p>
                              District 1 — <a href="mailto:Jacque.Casillas@CoronaCA.gov">Jacque Casillas</a><br />
                              District 2 — <a href="mailto:Tony.Daddario@CoronaCA.gov">Tony Daddario</a><br />
                              District 3 — <a href="mailto:Tom.Richins@CoronaCA.gov">Tom Richins</a><br />
                              District 4 — <a href="mailto:Jim.Steiner@CoronaCA.gov">Jim Steiner</a><br />
                              District 5 — <a href="mailto:Wes.Speake@CoronaCA.gov">Wes Speake</a>
                            </p>
                            <a href="https://cityofcorona.maps.arcgis.com/apps/instant/lookup/index.html?appid=73e60a2960614b53bbbdc5a627b14515" target="_blank" rel="noopener noreferrer" className="find-link">🔍 Find your Corona district</a>
                            <h6 style={{ marginTop: '16px' }}>Contact Information</h6>
                            <p>
                              <strong>Phone:</strong> (951) 736-2400<br />
                              <strong>City Hall</strong>, <a href="https://maps.app.goo.gl/N7TUWVY4dafHBVet9" target="_blank" rel="noopener noreferrer">400 S. Vicentia Ave, Corona, CA 92882</a><br />
                              <a href="https://www.facebook.com/CityOfCorona/" target="_blank" rel="noopener noreferrer">Corona Facebook Page</a><br />
                              <a href="https://www.youtube.com/@Innercirclecorona" target="_blank" rel="noopener noreferrer">Corona YouTube Channel</a>
                            </p>
                          </div>
                          <div>
                            <h6>Public Meetings</h6>
                            <p>The Corona City Council meets on the <strong>first and third Wednesdays of each month at 6:00 PM</strong> in the City Hall Council Chambers, located at 400 S. Vicentia Ave., Corona, CA 92882.</p>
                            <ul>
                              <li><a href="https://www.coronaca.gov/government/city-council/council-agendas-documents" target="_blank" rel="noopener noreferrer">Meeting Resources</a> — agendas, minutes & videos</li>
                              <li><a href="https://video.isilive.ca/corona/live.html" target="_blank" rel="noopener noreferrer">Corona TV — Livestream</a></li>
                              <li><a href="https://www.coronaca.gov/government/departments-divisions/city-clerk-277" target="_blank" rel="noopener noreferrer">City Clerk Documents</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inner: Norco (Note: No data for Norco in the provided HTML) */}
                    <div className="accordion-item">
                      <button className={`accordion-header ${openCity === 2 ? 'active' : ''}`} onClick={() => toggleCity(2)}>
                        <span className="icon">{openCity === 2 ? '-' : '+'}</span> Norco
                      </button>
                      <div className={`accordion-content ${openCity === 2 ? 'open' : ''}`}>
                        <div className="accordion-body flat-body">
                          <div>
                            <h6>Mayor & City Council</h6>
                            <p>
                              Mayor — <a href="mailto:rgrundmeyer@ci.norco.ca.us">Robin Grundmeyer</a><br />
                              Council Member — <a href="mailto:gbowen@ci.norco.ca.us">Gregory Bowen</a><br />
                              Council Member — <a href="mailto:kbash@ci.norco.ca.us">Kevin Bash</a><br />
                              Council Member — <a href="mailto:gnewton@ci.norco.ca.us">Greg Newton</a><br />
                              Council Member — <a href="mailto:Fsullivan@ci.norco.ca.us">Fia Sullivan</a>
                            </p>
                            <h6 style={{ marginTop: '16px' }}>Contact Information</h6>
                            <p>
                              <strong>Phone:</strong> (951) 270-5623<br />
                              <strong>City Hall</strong>, 2870 Clark Ave, Norco, CA 92860<br />
                              <a href="https://www.facebook.com/cityofnorco/" target="_blank" rel="noopener noreferrer">Norco Facebook Page</a><br />
                              <a href="https://www.youtube.com/@cityofnorco9651/featured" target="_blank" rel="noopener noreferrer">Norco YouTube Channel</a>
                            </p>
                          </div>
                          <div>
                            <h6>Public Meetings</h6>
                            <p>The Norco City Council meets on the <strong>first and third Wednesdays of each month at 6:30 PM</strong> in the Council Chambers.</p>
                            <ul>
                              <li><a href="https://norco.civicweb.net/portal/" target="_blank" rel="noopener noreferrer">Meeting Resources</a> — agendas, minutes & videos</li>
                              <li><a href="https://norco.civicweb.net/Portal/Video.aspx" target="_blank" rel="noopener noreferrer">Norco TV — Livestream</a></li>
                              <li><a href="https://norco.civicweb.net/Portal/VirtualLibrary.aspx" target="_blank" rel="noopener noreferrer">City Clerk Documents</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* TOP 2: School Boards */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 2 ? 'active' : ''}`} onClick={() => toggleTop(2)}>
                <span className="icon">{openTop === 2 ? '-' : '+'}</span> School Boards
              </button>
              <div className={`accordion-content ${openTop === 2 ? 'open' : ''}`}>
                <div className="accordion-body">
                  <div className="accordion">
                    
                    {/* Inner: CNUSD */}
                    <div className="accordion-item">
                      <button className={`accordion-header ${openSchool === 1 ? 'active' : ''}`} onClick={() => toggleSchool(1)}>
                        <span className="icon">{openSchool === 1 ? '-' : '+'}</span> Corona-Norco Unified (CNUSD)
                      </button>
                      <div className={`accordion-content ${openSchool === 1 ? 'open' : ''}`}>
                        <div className="accordion-body flat-body">
                          <div>
                            <h6>Board of Education</h6>
                            <p>
                              President — <a href="mailto:stacy.nicola@cnusd.k12.ca.us">Stacy Nicola</a><br />
                              Vice President — <a href="mailto:christopher.raahauge@cnusd.k12.ca.us">Chris Raahauge</a><br />
                              Member — <a href="mailto:%E2%80%8BMary.Ybarra@cnusd.k12.ca.us">Mary Helen Ybarra</a><br />
                              Member — <a href="mailto:anna.coriddi-meza@cnusd.k12.ca.us">Anna Coriddi-Meza</a><br />
                              Member — <a href="mailto:jami.merchant@cnusd.k12.ca.us">Jami Merchant</a>
                            </p>
                          </div>
                          <div>
                            <h6>Public Meetings</h6>
                            <p>CNUSD's Board of Education typically holds regular business meetings on the <strong>first Tuesday of each month at 7:00 PM</strong>, with study sessions on the third Tuesday at 6:00 PM, in the Board/Council Chambers, 2820 Clark Avenue, Norco, CA.</p>
                            <ul>
                              <li><a href="https://simbli.eboardsolutions.com/SB_Meetings/SB_MeetingListing.aspx?S=36030741" target="_blank" rel="noopener noreferrer">Meeting Resources</a> — agendas, minutes & videos</li>
                              <li><a href="https://www.youtube.com/@CNUSDBoardMeetings/featured" target="_blank" rel="noopener noreferrer">Video Archive (YouTube)</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* TOP 3: County Supervisors */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 3 ? 'active' : ''}`} onClick={() => toggleTop(3)}>
                <span className="icon">{openTop === 3 ? '-' : '+'}</span> County Supervisors
              </button>
              <div className={`accordion-content ${openTop === 3 ? 'open' : ''}`}>
                <div className="accordion-body flat-body">
                  <div>
                    <h6>Board of Supervisors</h6>
                    <p>
                      1st District (Norco/Jurupa) — <a href="https://rivcodistrict1.org/" target="_blank" rel="noopener noreferrer">Jose Medina</a> — (951) 955-1010<br /><br />
                      2nd District (Corona) — <a href="https://rivcodistrict2.org/" target="_blank" rel="noopener noreferrer">Karen Spiegel</a> — (951) 955-1020
                    </p>
                    <a href="https://countyofriverside.maps.arcgis.com/apps/instant/lookup/index.html?appid=b1148414615c4bbf9bd51fd97847ff15" target="_blank" rel="noopener noreferrer" className="find-link">🔍 Find your district</a>
                  </div>
                  <div>
                    <h6>Public Meetings</h6>
                    <p>The Riverside County Board of Supervisors typically meets on <strong>Tuesdays at 9:30 AM</strong> in the County Administrative Center Board Chambers, 4080 Lemon Street, 1st Floor, Riverside, CA 92501.</p>
                    <a href="https://riversidecountyca.iqm2.com/Citizens/default.aspx" target="_blank" rel="noopener noreferrer" className="find-link">Meeting Resources — agendas, minutes & videos</a>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP 4: State Legislature */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 4 ? 'active' : ''}`} onClick={() => toggleTop(4)}>
                <span className="icon">{openTop === 4 ? '-' : '+'}</span> State Legislature
              </button>
              <div className={`accordion-content ${openTop === 4 ? 'open' : ''}`}>
                <div className="accordion-body flat-body">
                  <div>
                    <h6>Assembly</h6>
                    <p>
                      ★ <a href="https://www.assembly.ca.gov/assemblymembers/63" target="_blank" rel="noopener noreferrer">Natasha Johnson</a> (R-63rd) — Riverside/Corona<br />
                      (951) 277-3639
                    </p>
                    <h6 style={{ marginTop: '14px' }}>Senate</h6>
                    <p>
                      ★ <a href="https://sr32.senate.ca.gov/" target="_blank" rel="noopener noreferrer">Kelly Seyarto</a> (R-32nd) — Riverside/Corona<br />
                      (951) 280-1260
                    </p>
                  </div>
                  <div>
                    <a href="https://findyourrep.legislature.ca.gov/" target="_blank" rel="noopener noreferrer" className="find-link">🔍 Find your CA representatives</a>
                    <h6 style={{ marginTop: '14px' }}>Statewide Offices</h6>
                    <p>
                      <a href="https://www.gov.ca.gov/contact/" target="_blank" rel="noopener noreferrer">Governor Gavin Newsom</a><br />
                      <a href="https://ltg.ca.gov/contact/" target="_blank" rel="noopener noreferrer">Lt. Governor Eleni Kounalakis</a><br />
                      <a href="https://oag.ca.gov/contact" target="_blank" rel="noopener noreferrer">Attorney General Rob Bonta</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP 5: US Congress */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 5 ? 'active' : ''}`} onClick={() => toggleTop(5)}>
                <span className="icon">{openTop === 5 ? '-' : '+'}</span> US Congress
              </button>
              <div className={`accordion-content ${openTop === 5 ? 'open' : ''}`}>
                <div className="accordion-body flat-body">
                  <div>
                    <h6>House of Representatives</h6>
                    <p>
                      ★ <a href="https://calvert.house.gov/contact" target="_blank" rel="noopener noreferrer">Ken Calvert</a> (R-41st) — Corona<br />
                      (202) 225-1986 — DC<br />
                      (951) 277-0042 — Corona
                    </p>
                    <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noopener noreferrer" className="find-link">🔍 Find your representative</a>
                  </div>
                  <div>
                    <h6>Senate</h6>
                    <p>
                      <a href="https://www.schiff.senate.gov/contact/" target="_blank" rel="noopener noreferrer">Adam Schiff</a><br />
                      (202) 224-3841 — DC
                    </p>
                    <p>
                      <a href="https://www.padilla.senate.gov/contact/contact-form/" target="_blank" rel="noopener noreferrer">Alex Padilla</a><br />
                      (202) 224-3841 — DC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP 6: Election Resources */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 6 ? 'active' : ''}`} onClick={() => toggleTop(6)}>
                <span className="icon">{openTop === 6 ? '-' : '+'}</span> Election Resources
              </button>
              <div className={`accordion-content ${openTop === 6 ? 'open' : ''}`}>
                <div className="accordion-body flat-body">
                  <div>
                    <h6>Voter Registration</h6>
                    <p><a href="https://voterstatus.sos.ca.gov/" target="_blank" rel="noopener noreferrer">Am I Registered?</a></p>
                    <p><a href="https://registertovote.ca.gov/" target="_blank" rel="noopener noreferrer">Register to Vote</a></p>
                    <p><a href="https://voteinfo.net/" target="_blank" rel="noopener noreferrer">Riverside County Registrar of Voters</a></p>
                    <a href="https://docs.voteinfo.net/electiondatalookup/" target="_blank" rel="noopener noreferrer" className="find-link">🔍 Look up your district and officials</a>
                  </div>
                  <div>
                    <h6>Elections</h6>
                    <p><a href="https://www.sos.ca.gov/elections/polling-place" target="_blank" rel="noopener noreferrer">Find Your Polling Place</a></p>
                    <p><a href="https://cadem.org/our-endorsements/" target="_blank" rel="noopener noreferrer">Find Endorsed Candidates</a> (CADEM)</p>
                    <p><a href="https://california.ballottrax.net/voter/" target="_blank" rel="noopener noreferrer">Track Your Ballot</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP 7: How to Call Your Rep */}
            <div className="accordion-item">
              <button className={`accordion-header ${openTop === 7 ? 'active' : ''}`} onClick={() => toggleTop(7)}>
                <span className="icon">{openTop === 7 ? '-' : '+'}</span> How to Call Your Rep
              </button>
              <div className={`accordion-content ${openTop === 7 ? 'open' : ''}`}>
                <div className="accordion-body">
                  <div className="call-block">
                    <h6>Call Congress with 5-Calls.org</h6>
                    <p>The 5 Calls app makes it easy to reach Congress and be heard. They research issues, write scripts, find key decision-makers, and list their numbers. You just call. There's a handy app for your phone too.</p>
                    <a href="https://5calls.org/" target="_blank" rel="noopener noreferrer" className="btn">Use 5 Calls on the Web</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}