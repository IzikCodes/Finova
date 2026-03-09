import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold tracking-[0.25em] text-accent mb-4">
            FINOVA
          </h3>

          <p className="text-white/70 text-sm leading-relaxed">
            A trusted investment platform designed to help you grow your funds securely 
            and confidently in the evolving digital economy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link to="/register" className="hover:text-accent transition-colors">Register</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">Legal</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacypolicy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">Connect With Us</h4>
          <p className="text-white/70 text-sm mb-4">+44 7745 304367, +44 7728 409721</p>
          <p className="text-white/70 text-sm mb-4">
          <a href="mailto:support@finova.com" className="hover:text-accent transition-colors">
            Email: support@finova.com
          </a> </p>

          <div className="flex space-x-4 text-accent text-2xl">
            <a href="#" className="hover:scale-110 transition-transform"><BiLogoFacebook /></a>
            <a href="#" className="hover:scale-110 transition-transform"><BiLogoTwitter /></a>
            <a href="#" className="hover:scale-110 transition-transform"><BiLogoInstagram /></a>
            <a href="#" className="hover:scale-110 transition-transform"><BiLogoLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Finova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
