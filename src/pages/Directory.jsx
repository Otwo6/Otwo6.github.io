import { useState } from 'react';
import './Directory.css';

export default function Directory() {
  // State for the tabs
  const [activeTab, setActiveTab] = useState('corona');
  
  // State for the accordions
  const [openTop, setOpenTop] = useState(1);     // Top-level categories
  const [openInner, setOpenInner] = useState(1); // Nested categories

  const toggleTop = (index) => setOpenTop(openTop === index ? null : index);
  const toggleInner = (index) => setOpenInner(openInner === index ? null : index);

  return (
    <div className="directory-page">
      {/* NEW HERO BANNER */}
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Democratic &amp; Progressive Groups</h1>
          </div>
        </div>
      </section>
      <main>
        <div className="intro-text">
          <p>Explore our collection of links and resources to stay informed, engaged, and active in the Democratic movement. Whether you're looking for local party information or ways to get involved, these links connect you with the tools and organizations that support our shared values.</p>
        </div>

        <div className="accordion-container">
          <div className="accordion">

            {/* TOP LEVEL 1: Party & Organizations */}
            <div className="accordion-item">
              <button 
                className={`accordion-header ${openTop === 1 ? 'active' : ''}`} 
                onClick={() => toggleTop(1)}
              >
                <span className="icon">{openTop === 1 ? '-' : '+'}</span> 
                Party, Organizations &amp; Protests
              </button>
              
              <div className={`accordion-content ${openTop === 1 ? 'open' : ''}`}>
                <div className="accordion-body">
                  
                  {/* INNER ACCORDIONS */}
                  <div className="accordion">
                    
                    {/* Inner 1: Democratic Party */}
                    <div className="accordion-item">
                      <button 
                        className={`accordion-header ${openInner === 1 ? 'active' : ''}`} 
                        onClick={() => toggleInner(1)}
                      >
                        <span className="icon">{openInner === 1 ? '-' : '+'}</span> 
                        Democratic Party
                      </button>
                      <div className={`accordion-content ${openInner === 1 ? 'open' : ''}`}>
                        <div className="accordion-body flat-body">
                          <div>
                            <p><span className="star">&#9733;</span> <strong><a href="https://www.riversidecountydemocrats.org/" target="_blank" rel="noopener noreferrer">Riverside County Democratic Party (RCDP)</a></strong></p>
                            <p><a href="https://cadem.org/" target="_blank" rel="noopener noreferrer">California Democratic Party (CADEM)</a></p>
                            <p><a href="https://democrats.org/" target="_blank" rel="noopener noreferrer">Democratic National Committee (DNC)</a></p>
                          </div>
                          <div>
                            <p><a href="https://www.sanbernardinodemocrats.org/" target="_blank" rel="noopener noreferrer">San Bernardino County Democratic Party</a></p>
                            <p><a href="https://caldc.org/" target="_blank" rel="noopener noreferrer">California Democratic Council (CalDC)</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inner 2: Democratic Clubs (Tabs) */}
                    <div className="accordion-item">
                      <button 
                        className={`accordion-header ${openInner === 2 ? 'active' : ''}`} 
                        onClick={() => toggleInner(2)}
                      >
                        <span className="icon">{openInner === 2 ? '-' : '+'}</span> 
                        Democratic Clubs
                      </button>
                      <div className={`accordion-content ${openInner === 2 ? 'open' : ''}`}>
                        <div className="accordion-body">
                          <div className="tabs">
                            <button 
                              className={`tab-btn ${activeTab === 'corona' ? 'active' : ''}`} 
                              onClick={() => setActiveTab('corona')}
                            >
                              Corona &amp; Norco Area
                            </button>
                            <button 
                              className={`tab-btn ${activeTab === 'riverside' ? 'active' : ''}`} 
                              onClick={() => setActiveTab('riverside')}
                            >
                              Riverside County
                            </button>
                            <button 
                              className={`tab-btn ${activeTab === 'young' ? 'active' : ''}`} 
                              onClick={() => setActiveTab('young')}
                            >
                              Young Democrats
                            </button>
                          </div>
                          
                          <div className={`tab-panel ${activeTab === 'corona' ? 'active' : ''}`}>
                            <p><span className="star">&#9733;</span> <strong><a href="https://www.facebook.com/DemocratsOfCoronaNorco/" target="_blank" rel="noopener noreferrer">Democrats of Corona Norco</a></strong></p>
                            <p><a href="https://swdems.club/" target="_blank" rel="noopener noreferrer">Democrats of Southwest Riverside County</a></p>
                            <p><a href="https://democratsofgreaterriverside.com/" target="_blank" rel="noopener noreferrer">Democrats of Greater Riverside</a></p>
                          </div>
                          
                          <div className={`tab-panel ${activeTab === 'riverside' ? 'active' : ''}`}>
                            <p><a href="https://www.facebook.com/Hemet.Democratic.Headquarters/" target="_blank" rel="noopener noreferrer">Democrats of Hemet-San Jacinto</a></p>
                            <p><a href="https://chinovalleydemocrats.org/" target="_blank" rel="noopener noreferrer">Chino Valley Democratic Club</a></p>
                            <p><a href="https://www.facebook.com/greaterONTdems/" target="_blank" rel="noopener noreferrer">Greater Ontario Democratic Club</a></p>
                            <p><a href="https://www.redlandsareademocrats.org/" target="_blank" rel="noopener noreferrer">Redlands Area Democratic Club</a></p>
                          </div>
                          
                          <div className={`tab-panel ${activeTab === 'young' ? 'active' : ''}`}>
                            <p><span className="star">&#9733;</span> <strong><a href="https://rivcoyoungdems.org/home.html" target="_blank" rel="noopener noreferrer">Riverside County Young Democrats</a></strong></p>
                            <p><a href="https://n1155199.websitebuilder.online/" target="_blank" rel="noopener noreferrer">California Young Democrats</a></p>
                            <p><a href="https://yda.org/" target="_blank" rel="noopener noreferrer">Young Democrats of America</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inner 3: Progressive Groups */}
                    <div className="accordion-item">
                      <button 
                        className={`accordion-header ${openInner === 3 ? 'active' : ''}`} 
                        onClick={() => toggleInner(3)}
                      >
                        <span className="icon">{openInner === 3 ? '-' : '+'}</span> 
                        Progressive Groups &amp; Protests
                      </button>
                      <div className={`accordion-content ${openInner === 3 ? 'open' : ''}`}>
                        <div className="accordion-body flat-body">
                          <div>
                            <h6>Indivisible</h6>
                            <p><span className="star">&#9733;</span> <a href="http://indivisibleriverside.com/" target="_blank" rel="noopener noreferrer">Indivisible Riverside</a></p>
                            <p><a href="https://www.facebook.com/groups/4332832273610020" target="_blank" rel="noopener noreferrer">Indivisible Inland Empire</a></p>
                            <p><a href="https://indivisible.org/" target="_blank" rel="noopener noreferrer">Indivisible.org (national)</a></p>
                            <h6 style={{ marginTop: '16px' }}>Events &amp; Volunteering</h6>
                            <p><span className="star">&#9733;</span> <a href="https://www.mobilize.us/indivisible/?address=Corona%2C%20CA%2C%20USA&lat=33.8787742&lon=-117.5760323" target="_blank" rel="noopener noreferrer">Local Events (Mobilize)</a></p>
                            <p><a href="https://www.mobilize.us/moveon/" target="_blank" rel="noopener noreferrer">MoveOn.org</a></p>
                          </div>
                          <div>
                            <h6>Elections &amp; Rapid Response</h6>
                            <p><span className="star">&#9733;</span> <a href="https://swingleft.org/group/slriverside" target="_blank" rel="noopener noreferrer">Swing Left &mdash; Riverside</a></p>
                            <p><a href="https://www.fieldteam6.org/" target="_blank" rel="noopener noreferrer">Field Team 6</a></p>
                            <h6 style={{ marginTop: '16px' }}>Protest &amp; Opposition</h6>
                            <p><a href="https://www.buildtheresistance.org/" target="_blank" rel="noopener noreferrer">Building the Resistance</a></p>
                            <p><a href="https://www.nvunheard.org/" target="_blank" rel="noopener noreferrer">No Voice Unheard</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inner 4: Women First */}
                    <div className="accordion-item">
                      <button 
                        className={`accordion-header ${openInner === 4 ? 'active' : ''}`} 
                        onClick={() => toggleInner(4)}
                      >
                        <span className="icon">{openInner === 4 ? '-' : '+'}</span> 
                        Women First
                      </button>
                      <div className={`accordion-content ${openInner === 4 ? 'open' : ''}`}>
                        <div className="accordion-body flat-body">
                          <div>
                            <h6>NOW &mdash; National Organization for Women</h6>
                            <p><span className="star">&#9733;</span> <a href="https://now.org/chapter/ca0120-riverside-county-now/" target="_blank" rel="noopener noreferrer">Riverside County NOW</a></p>
                            <p><a href="https://now.org/" target="_blank" rel="noopener noreferrer">NOW &mdash; National</a></p>
                          </div>
                          <div>
                            <h6>League of Women Voters</h6>
                            <p><span className="star">&#9733;</span> <a href="https://www.lwv.org/local-leagues/lwv-riverside" target="_blank" rel="noopener noreferrer">LWV of Riverside</a></p>
                            <p><a href="https://www.lwv.org/" target="_blank" rel="noopener noreferrer">LWV &mdash; National</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* END INNER ACCORDIONS */}

                </div>
              </div>
            </div>

            {/* TOP LEVEL 2: Important Issues */}
            <div className="accordion-item">
              <button 
                className={`accordion-header ${openTop === 2 ? 'active' : ''}`} 
                onClick={() => toggleTop(2)}
              >
                <span className="icon">{openTop === 2 ? '-' : '+'}</span> 
                Important Issues &amp; Research
              </button>
              
              <div className={`accordion-content ${openTop === 2 ? 'open' : ''}`}>
                <div className="accordion-body">
                  <p style={{ marginBottom: '20px' }}>Explore these links to support progressive causes, stay informed on key issues, and take action for a more just and equitable future.</p>
                  <div className="flat-body">
                    <div>
                      <h6>Civil Rights</h6>
                      <p><a href="http://www.aclusocal.org" target="_blank" rel="noopener noreferrer">ACLU of Southern California</a></p>
                      <p><a href="https://naacpriversidebranch.org/" target="_blank" rel="noopener noreferrer">NAACP Riverside</a></p>
                      <h6 style={{ marginTop: '16px' }}>Environment</h6>
                      <p><a href="http://www.sierraclub.org/" target="_blank" rel="noopener noreferrer">Sierra Club</a></p>
                      <p><a href="http://www.edf.org/" target="_blank" rel="noopener noreferrer">Environmental Defense Fund</a></p>
                      <h6 style={{ marginTop: '16px' }}>Gun Control</h6>
                      <p><a href="http://www.bradycampaign.org/" target="_blank" rel="noopener noreferrer">Brady Campaign</a></p>
                      <p><a href="http://momsdemandaction.org/" target="_blank" rel="noopener noreferrer">Moms Demand Action</a></p>
                    </div>
                    <div>
                      <h6>Health &amp; Wellbeing</h6>
                      <p><a href="http://www.coveredca.com/" target="_blank" rel="noopener noreferrer">Covered California</a></p>
                      <p><a href="http://www.plannedparenthood.org/" target="_blank" rel="noopener noreferrer">Planned Parenthood</a></p>
                      <h6 style={{ marginTop: '16px' }}>Immigration</h6>
                      <p><a href="https://ic4ij.org/" target="_blank" rel="noopener noreferrer">Inland Coalition for Immigrant Justice</a></p>
                      <p><a href="https://democratsofgreaterriverside.com/wp-content/uploads/2025/02/KYR-One-Pager.pdf" target="_blank" rel="noopener noreferrer">Know Your Rights Handout (PDF)</a></p>
                      <h6 style={{ marginTop: '16px' }}>LGBTQIA+ &amp; Veterans</h6>
                      <p><a href="https://www.riversideprideie.org/" target="_blank" rel="noopener noreferrer">Riverside Pride</a></p>
                      <p><a href="http://www.votevets.org/" target="_blank" rel="noopener noreferrer">Vote Vets</a></p>
                    </div>
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