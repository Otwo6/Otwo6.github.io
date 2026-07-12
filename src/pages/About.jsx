import { useState } from 'react';
import './About.css';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="content-wrap" id="club">
          <h2>Our Club</h2>
          <p>As a chartered club of the <a href="https://www.riversidecountydemocrats.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Riverside County Democratic Party</a>, we're dedicated to advancing Democratic values across Corona and Norco. Our all-volunteer club serves as a place for neighbors to organize, learn, and get involved close to home.</p>
          <p>Our focus is electing Democrats up and down the ballot, from school boards and city councils to the state legislature and beyond. Whether you've been knocking doors for decades or you're just getting started, there's a place for you here.</p>
        </div>

        {/* React Carousel */}
        <div className="carousel">
          <div className="carousel-track-wrap">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="carousel-slide slide1"><span className="cap">Rallying for working families in Corona</span></div>
              <div className="carousel-slide slide2"><span className="cap">Precinct walking in Norco</span></div>
              <div className="carousel-slide slide3"><span className="cap">Tabling at the community fair</span></div>
            </div>
          </div>
          <button className="carousel-arrow prev" onClick={prevSlide}>&#8249;</button>
          <button className="carousel-arrow next" onClick={nextSlide}>&#8250;</button>
          
          <div className="carousel-dots">
            {[0, 1, 2].map((index) => (
              <span 
                key={index}
                className={currentSlide === index ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="section-divider"><div className="rule"></div></div>

        <div className="content-wrap" id="team">
          <h2>Our Officers</h2>
          <p>Our slate of officers. Elections for all positions take place at the November General Membership Meeting.</p>

          <div className="team-grid">
            <div>
              <h3>Officers</h3>
              <ul>
                <li><a href="#">Kate Harrison</a>, President</li>
                <li><a href="#">Bryan Craig Edwards</a>, Vice President</li>
                <li><a href="#">Barbara Gwinn-Edwards</a>, Secretary</li>
                <li><a href="#">Tami Friedrich</a>, Treasurer</li>
                <li><a href="#">Theresa Page</a>, Membership</li>
                <li><a href="#">Vacant</a>, Fundraising</li>
                <li><a href="#">Vacant</a>, Communications</li>
                <li><a href="#">Melba Winsell</a>, Political Action</li>
                <li><a href="#">Harold Allen</a>, Policy &amp; Research</li>
                <li><a href="#">Joy Wolfsberger</a>, Rules</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}