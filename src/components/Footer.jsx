import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const iconStyle = { border: 'none', outline: 'none', textDecoration: 'none', background: 'transparent' };

  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-links">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-center">
          <div className="footer-social" style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
            {/* Increased size from 20 to 32 */}
            <a href="https://www.instagram.com/democratsofcoronanorco/" target="_blank" rel="noopener noreferrer" title="Instagram" style={iconStyle}><FaInstagram size={32} /></a>
            <a href="https://www.facebook.com/people/Democrats-of-Corona-Norco/61591393507103/" target="_blank" rel="noopener noreferrer" title="Facebook" style={iconStyle}><FaFacebook size={32} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" style={iconStyle}><FaYoutube size={32} /></a>
          </div>
          <div className="footer-legal">
            <span>Copyright &copy; 2026 | Democrats of Corona Norco.</span>
            <span>Not authorized by any candidate or candidate committee.</span>
            <span>FPPC ID: 1376282</span>
          </div>
        </div>
        <div className="footer-address">
          Democrats of Corona Norco<br />
          1973 Foothill Parkway Unit 110<br />
          P.O. Box 467<br />
          Corona, CA 92881
        </div>
      </div>
    </footer>
  );
}